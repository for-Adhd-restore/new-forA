import { colors } from "@/constants/colors";
import Feather from "@expo/vector-icons/Feather";
import { router, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function PostLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.WHITE },
      }}
    >
      <Stack.Screen
        name="write"
        options={{
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Feather name="arrow-left" size={28} color={"black"} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerLeft: () => (
            <Pressable
              onPress={() =>
                //상세 페이지 뒤로가기 딥 링크 대응 로직 추가
                router.canGoBack() ? router.back() : router.replace("/today")
              }
            >
              <Feather name="arrow-left" size={28} color={"black"} />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
