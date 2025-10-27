import { queryClient } from "@/api/queryClient";
import { useGetMe } from "@/hooks/queries/useAuth";
import { useIsLogin, useSetLogin } from "@/store/authStore";
import { logOnDev } from "@/utils/logOnDev";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect } from "react";
import "react-native-reanimated";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigator />
    </QueryClientProvider>
  );
}
function RootNavigator() {
  const isLogin = useIsLogin(); // 라우터 가드에 사용
  const setLogin = useSetLogin();
  const { isSuccess, user } = useGetMe();

  useEffect(() => {
    if (isSuccess && user) {
      setLogin(user);
      logOnDev("이미 로그인 된 유저입니다.");
    }
  }, [isSuccess, setLogin, user]);

  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      </Stack>
  );
}
