import { changePassword, getMe, logout, postLogin } from "@/api/auth";
import { queryKeys } from "@/constants/queryKeys";
import { queryClient } from "@/lib/queryClient";
import { useSetLogout } from "@/store/authStore";
import { User } from "@/types";
import { logOnDev } from "@/utils/logOnDev";
import {
  deleteSecureStore,
  getSecureStore,
  saveSecureStore,
} from "@/utils/secureStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Alert } from "react-native";

export function useLogin() {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: async ({ accessToken, refreshToken }) => {
      await saveSecureStore("accessToken", accessToken);
      await saveSecureStore("refreshToken", refreshToken);
      queryClient.invalidateQueries({
        queryKey: [queryKeys.AUTH, queryKeys.GET_ME],
      });
      logOnDev("로그인 성공!");
    },
    onError: (error) => {
      logOnDev(`로그인 에러: ${error.message}`);
      Alert.alert("이메일과 비밀번호를 확인해주세요.");
    },
  });
}

export function useLogout() {
  const setLogout = useSetLogout();
  return useMutation({
    mutationFn: logout,
    onSettled: async () => {
      await deleteSecureStore("accessToken"); //토큰 삭제
      await deleteSecureStore("refreshToken"); //토큰 삭제
      setLogout(); // 전역 초기화
      queryClient.resetQueries({ queryKey: [queryKeys.AUTH] }); //쿼리 키 무효화
      logOnDev("로그아웃");
    },
  });
}

export function useGetMe() {
  const { data: user, isSuccess } = useQuery({
    queryFn: async (): Promise<User | null> => {
      const accessToken = await getSecureStore("accessToken"); // 토큰 확인
      if (!accessToken) {
        logOnDev("토근이 없습니다. 최초 로그인 사용자입니다.");
        return null;
      }
      const data = await getMe();
      return data;
    },
    queryKey: [queryKeys.AUTH, queryKeys.GET_ME],
    retry: false,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false, // 사용자가 다른 앱을 보거나 홈 화면에 나갔다가 다시 앱으로 돌아왔을 때(앱이 포커스될 때), 데이터를 자동으로 새로고침하지 않는다.
    refetchOnMount: false, // 컴포넌트(화면)가 처음 화면에 나타날 때(마운트될 때), 캐시된 데이터가 있더라도 자동으로 데이터를 새로고침(리페치)하지 않는다.
    refetchOnReconnect: true, //오프라인->온라인 복귀 시 최신 동기화
  });

  return { user, isSuccess };
}

export function useChangePassword() {
  return useMutation({
    mutationFn: changePassword,
  });
}
