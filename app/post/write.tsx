import { StyleSheet, Text, View } from "react-native";

export default function WriteScreen() {
  return (
    <View style={styles.container}>
      <Text>글쓰기</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
