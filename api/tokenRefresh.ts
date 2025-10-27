import { logOnDev } from "@/utils/logOnDev";
import { getSecureStore, saveSecureStore } from "@/utils/secureStore";
import axios from "axios";

export const tokenRefresh = async () => {
  const accessToken = await getSecureStore("accessToken");
  const refreshToken = await getSecureStore("refreshToken");
  const tmp = {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
  const { data } = await axios.put(
    `${process.env.EXPO_PUBLIC_API_URL}/auth/reissue`,
    tmp,
  );
  const newAccessToken = data.accessToken;
  const newRefreshToken = data.refreshToken;
  await saveSecureStore("accessToken", newAccessToken);
  await saveSecureStore("refreshToken", newRefreshToken);
  logOnDev("토큰 재발급 완료");
};
