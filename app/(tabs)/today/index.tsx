import FeedList from "@/components/FeedList";
import { PostCategory } from "@/types";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function TodayScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState<PostCategory>("TWENTIES");
  return (
    <View style={styles.container}>
      <FeedList selectedCategory={selectedCategory} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
});
