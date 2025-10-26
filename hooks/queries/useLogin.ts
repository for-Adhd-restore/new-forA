import { postLogin } from "@/api/auth";
import { saveSecureStore } from "@/utils/secureStore";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { Alert } from "react-native";

export function useLogin() {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: async ({ accessToken, refreshToken }) => {
      await saveSecureStore("accessToken", accessToken);
      await saveSecureStore("refreshToken", refreshToken);
      console.log("로그인 성공");
      router.replace("/");
    },
    onError: (error) => {
      console.error(error);
      Alert.alert("이메일과 비밀번호를 확인해주세요.");
    },
  });
}
