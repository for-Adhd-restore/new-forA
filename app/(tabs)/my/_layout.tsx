import { colors } from "@/constants/colors";
import { Stack } from "expo-router";

export default function MyLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.GRAY_200 },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "마이페이지",
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
          },
          headerTitleAlign: "left", // ios적용 안됨
        }}
      />
    </Stack>
  );
}
