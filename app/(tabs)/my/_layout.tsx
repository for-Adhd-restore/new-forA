import { colors } from "@/constants/colors";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function MyLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.GRAY[200] },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "",
          headerLeft: () => (
            <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
              마이페이지
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="myPost"
        options={{
          title: "나의 글",
          contentStyle: { backgroundColor: colors.WHITE },
        }}
      />
      <Stack.Screen
        name="myComment"
        options={{
          title: "나의 댓글",
          contentStyle: { backgroundColor: colors.WHITE },
        }}
      />
    </Stack>
  );
}
