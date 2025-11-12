import { colors } from "@/constants/colors";
import { PostCategory } from "@/types";
import React from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../common/CategoryButton";

interface CategoryButtonListProps {
  setSelectedCategory: (category: PostCategory) => void;
}

function CategoryButtonList({ setSelectedCategory }: CategoryButtonListProps) {
  return (
    <View style={styles.categoryContainer}>
      <CustomButton label="10대" onPress={() => setSelectedCategory("TEENS")} />
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
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: colors.WHITE,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default CategoryButtonList;
