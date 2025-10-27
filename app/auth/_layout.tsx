import { colors } from "@/constants/colors";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: colors.WHITE },
        headerShadowVisible: false, // 헤더 구분선 제거
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: "",
        }}
      />
    </Stack>
  );
}
