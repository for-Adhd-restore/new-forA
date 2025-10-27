import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";

interface PasswordInputProps {}

function PasswordInput({}: PasswordInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name="password"
      control={control}
      render={({ field: { value, onChange } }) => {
        return (
          <InputField
            label="비밀번호를 입력해주세요."
            placeholder="비밀번호를 입력해주세요."
            value={value}
            onChangeText={(text) => onChange(text)}
            secureTextEntry // 암호화
            textContentType="oneTimeCode" //Strong Password 제거
          />
        );
      }}
    />
  );
}

export default PasswordInput;
