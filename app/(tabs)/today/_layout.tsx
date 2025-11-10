import TodayHeader from "@/components/today/TodayHeader";
import { colors } from "@/constants/colors";
import { Stack } from "expo-router";

export default function TodayLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: colors.WHITE },
        headerShadowVisible: false, // 구분선/그림자 숨기기
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          header: () => <TodayHeader />,
        }}
      />
      <Stack.Screen name="search" options={{}} />
      <Stack.Screen name="notification" options={{}} />
    </Stack>
  );
}
