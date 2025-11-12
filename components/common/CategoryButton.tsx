import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface CategoryButtonProps extends PressableProps {
  label: string;
}

function CategoryButton({ label, ...props }: CategoryButtonProps) {
  return (
    <Pressable
      style={styles.container}
      {...props} // onPress전달
    >
      <Text style={styles.labelText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  labelText: {
    fontSize: 12,
  },
});

export default CategoryButton;
