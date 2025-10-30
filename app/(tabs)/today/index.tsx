import CustomButton from "@/components/CustomButton";
import FeedList from "@/components/FeedList";
import { PostCategory } from "@/types";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function TodayScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState<PostCategory>("TWENTIES");
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <CustomButton
          label="10대"
          onPress={() => setSelectedCategory("TEENS")}
        />
        <CustomButton
          label="20대"
          onPress={() => setSelectedCategory("TWENTIES")}
        />
        <CustomButton
          label="30대"
          onPress={() => setSelectedCategory("THIRTIES_AND_ABOVE")}
        />
        <CustomButton
          label="학부모"
          onPress={() => setSelectedCategory("PARENTS")}
        />
      </View>
      <FeedList selectedCategory={selectedCategory} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  categoryContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
