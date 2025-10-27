import { useLogout } from "@/hooks/queries/useAuth";
import { Pressable, Text, View } from "react-native";

export default function MyScreen() {
  const logoutMutation = useLogout();

  return (
    <View>
      <Text>마이페이지</Text>
      <Pressable
        onPress={() => {
          logoutMutation.mutate();
        }}
      >
        <Text>로그아웃</Text>
      </Pressable>
    </View>
  );
}
