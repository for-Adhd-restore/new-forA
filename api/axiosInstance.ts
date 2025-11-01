import { logOnDev } from "@/utils/logOnDev";
import { getSecureStore } from "@/utils/secureStore";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { Alert } from "react-native";
import { tokenRefresh } from "./tokenRefresh";

export const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use(
  async function (config: InternalAxiosRequestConfig) {
    const accessToken = await getSecureStore("accessToken");

    //헤더에 토큰 추가
    if (accessToken) {
      config.headers.set("Authorization", `Bearer ${accessToken}`);
    }
    logOnDev(`
    [interceptor]:
      method: ${config.method},
      url: ${config.url},
      data: ${config.data},
      params: ${config.params},
        `);

    return config;
  },
  function (error: AxiosError) {
    logOnDev(`[API request error]: ${error.config}`);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response: AxiosResponse) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  async function (error: AxiosError) {
    const { response } = error;
    const originalRequest = response?.config;
    switch (response?.status) {
      case 401:
        logOnDev("401인증 오류");
        // 감싸줘야 타입 오류 안 생김
        if (originalRequest) {
          try {
            await tokenRefresh();
            const accessToken = await getSecureStore("accessToken");
            originalRequest?.headers.set(
              "Authorization",
              `Bearer ${accessToken}`,
            );
            return axiosInstance(originalRequest);
          } catch (e) {
            return Promise.reject(e);
          }
        }
        break;

      case 403:
        Alert.alert("접근 권한이 없습니다.");
        break;
      case 500:
        Alert.alert("서버 오류가 발생했습니다.");
        break;
      default:
        logOnDev(`Unhandled error:  ${error.response?.data}`);
    }

    return Promise.reject(error);
  },
);
