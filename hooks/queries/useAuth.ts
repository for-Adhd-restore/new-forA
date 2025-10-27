import { logOnDev } from "@/utils/logOnDev";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { Alert } from "react-native";

export function useLogin() {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: async ({ accessToken, refreshToken }) => {
      await saveSecureStore("accessToken", accessToken);
      await saveSecureStore("refreshToken", refreshToken);

      logOnDev("로그인 성공!");
      router.replace("/");
    },
    onError: (error) => {
      logOnDev(`로그인 에러: ${error.message}`);
      Alert.alert("이메일과 비밀번호를 확인해주세요.");
    },
  });
}
