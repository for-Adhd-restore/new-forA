import { logout, postLogin } from "@/api/auth";
import { queryClient } from "@/api/queryClient";
import { logOnDev } from "@/utils/logOnDev";
import { deleteSecureStore, saveSecureStore } from "@/utils/secureStore";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { Alert } from "react-native";

export function useLogin() {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: async ({ accessToken, refreshToken }) => {
      await saveSecureStore("accessToken", accessToken);
      await saveSecureStore("refreshToken", refreshToken);
      queryClient.invalidateQueries({ queryKey: ["auth", "getMe"] });
      logOnDev("로그인 성공!");
      router.replace("/");
    },
    onError: (error) => {
      logOnDev(`로그인 에러: ${error.message}`);
      Alert.alert("이메일과 비밀번호를 확인해주세요.");
    },
  });
}

export function useLogout() {
  return useMutation({
    mutationFn: logout,
    onSettled: async () => {
      await deleteSecureStore("accessToken");
      await deleteSecureStore("refreshToken");
      queryClient.resetQueries({ queryKey: ["auth"] });
      logOnDev("로그아웃");
      router.replace("/auth/login");
    },
  });
}
