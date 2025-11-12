import { colors } from "@/constants/colors";
import React from "react";
import {
  Image,
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
          style={[
            styles.input,
            error && styles.errorInput,
            isValid && styles.isVaildInput,
          ]}
          placeholderTextColor={colors.GRAY[300]}
          autoCapitalize="none" // 자동 대문자 제거
          spellCheck={false} // 입력값에 대한 맞춤법 검사 끄기
          autoCorrect={false} //입력값 자동 교정(오타 수정)을 끄기
          {...props}
        />
      </View>
      {Boolean(error) && <Text style={styles.errorText}>{error}</Text>}
      {isValid && (
        <Image
          style={styles.checkedImage}
          source={require("@/assets/images/forA-checked.png")}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.GRAY[600],
    fontSize: 14,
  },
  container: {
    height: 45,
    justifyContent: "center",
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 16,
    borderBottomColor: colors.GRAY[600],
    paddingVertical: 8,
  },
  errorInput: {
    borderBottomColor: colors.RED[400],
  },
  isVaildInput: {
    borderBottomColor: colors.GREEN[400],
  },
  errorText: {
    color: colors.RED[400],
  },
  checkedImage: {
    position: "absolute",
    right: 10,
    top: 25,
    width: 25,
    height: 25,
  },
});

export default InputField;
