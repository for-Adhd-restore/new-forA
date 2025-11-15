import { colors } from "@/constants/colors";
import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface CustomButtonProps extends PressableProps {
  label: string;
  isSelected?: boolean; // 칩 버튼 전용
  size?: "large" | "medium";
  variant?: "standard" | "chip" | "login";
}

function CustomButton({
  label,
  isSelected = false, // 칩 버튼
  disabled,
  variant = "standard",
  size = "medium",
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        styles.container,
        styles[variant],
        styles[size],
        isSelected && variant === "chip" && styles.selected,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
      ]}
      {...props}
    >
      <Text
        style={[
          styles.label,
          styles[`${variant}Text`],
          isSelected && variant === "chip" && styles.selectedText,
          disabled && styles.disabledText,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontWeight: "600",
  },

  pressed: {
    opacity: 0.8,
  },

  // variant
  standard: {
    borderRadius: 6,
    backgroundColor: colors.GREEN[400],
  },
  chip: {
    borderRadius: 999,
    backgroundColor: colors.GRAY[200],
  },
  login: {
    borderRadius: 999,
    backgroundColor: colors.GREEN[400],
  },

  loginText: {
    fontSize: 18,
    color: colors.WHITE,
  },
  standardText: {
    fontSize: 16,
    color: colors.WHITE,
  },
  chipText: {
    color: colors.BLACK,
    fontSize: 14,
  },

  // size
  large: {
    paddingVertical: 20,
  },
  medium: {
    paddingVertical: 10,
    paddingHorizontal: 23,
  },

  // state
  selected: {
    backgroundColor: colors.GREEN[400],
  },
  selectedText: {
    color: colors.WHITE,
  },

  disabled: {
    backgroundColor: colors.GRAY[200],
    opacity: 0.5,
  },
  disabledText: {
    color: colors.BLACK,
  },
});

export default CustomButton;
