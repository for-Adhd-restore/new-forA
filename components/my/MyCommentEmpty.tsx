import { colors } from "@/constants/colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function MyCommentEmpty() {
  return (
    <View style={styles.container}>
      <View style={styles.emptyContainer}>
        <Image
          style={styles.emptyImage}
          source={require("@/assets/images/forA-mypage-mycomment.png")}
        />
        <Text style={styles.emptyText}>아직 작성한 댓글이 없어요!</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GRAY[200],
  },
  emptyContainer: {
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  emptyImage: {
    width: 40,
    height: 40,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default MyCommentEmpty;
