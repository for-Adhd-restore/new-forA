import { colors } from "@/constants/colors";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface InputFieldProps extends TextInputProps {
  label: string;
  error?: string;
  isValid?: boolean;
}

function InputField({
  label,
  error = "",
  isValid = false,
  ...props
}: InputFieldProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.GRAY_200}
          autoCapitalize="none" // 자동 대문자 제거
          spellCheck={false} // 입력값에 대한 맞춤법 검사 끄기
          autoCorrect={false} //입력값 자동 교정(오타 수정)을 끄기
          {...props}
        />
      </View>
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.GRAY_300,
    fontSize: 16,
  },
  container: {
    height: 50,
    justifyContent: "center",
  },
  input: {
    borderBottomWidth: 2,
    fontSize: 16,
    borderBottomColor: colors.GRAY_300,
    paddingVertical: 8,
  },
  error: {},
});

export default InputField;
