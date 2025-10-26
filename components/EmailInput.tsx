import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";

interface EmailInputProps {}

function EmailInput({}: EmailInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name="email"
      control={control}
      render={({ field: { value, onChange } }) => {
        return (
          <InputField
            label="이메일"
            placeholder="이메일을 입력해주세요."
            value={value}
            onChangeText={(text) => onChange(text)}
            autoFocus
            inputMode="email"
            returnKeyType="next"
          />
        );
      }}
    />
  );
}

export default EmailInput;
