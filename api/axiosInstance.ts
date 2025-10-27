import { logOnDev } from "@/utils/logOnDev";
import { getSecureStore } from "@/utils/secureStore";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 5000,
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
      headers: ${config.headers},
      method: ${config.method},
      url: ${config.url},
      baseUrl: ${config.baseURL},
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
