import { colors } from "@/constants/colors";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: colors.WHITE },
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: "",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
