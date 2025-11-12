import { colors } from "@/constants/colors";
import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface CustomButtonProps extends PressableProps {
  label: string;
  isValid?: boolean;
}

function CustomButton({ label, isValid = false, ...props }: CustomButtonProps) {
  return (
    <Pressable
      style={[
        styles.container,
        isValid && { backgroundColor: colors.GREEN[400] },
      ]}
      {...props}
    >
      <Text style={[styles.label, isValid && { color: colors.WHITE }]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: colors.GRAY[200],
  },

  label: {
    fontSize: 16,
  },
});

export default CustomButton;
