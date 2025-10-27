import { colors } from "@/constants/colors";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href={"/auth/login"} asChild>
        <Pressable>
          <Text>로그인으로 이동하기</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GRAY_200,
    padding: 50,
  },
});
