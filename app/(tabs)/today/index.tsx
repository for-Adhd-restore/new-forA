import CategoryButtonList from "@/components/CategoryButtonList";
import FeedList from "@/components/FeedList";
import { PostCategory } from "@/types";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

export default function TodayScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState<PostCategory>("TWENTIES");

  return (
    <View style={styles.container}>
      <CategoryButtonList setSelectedCategory={setSelectedCategory} />
      <FeedList selectedCategory={selectedCategory} />
      <Link href={"/post/write"} asChild>
        <Pressable style={styles.writeButton}>
          <Image
            source={require("@/assets/images/write.png")}
            style={styles.writeImg}
          />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  writeButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 70,
    height: 70,

    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  writeImg: {
    width: 100, // 예시 크기
    height: 100, // 예시 크기
  },
});
