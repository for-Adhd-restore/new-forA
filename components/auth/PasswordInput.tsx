import { REGEX } from "@/constants/valid";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "../common/InputField";

interface PasswordInputProps {
  label: string;
  valueName: string;
}

function PasswordInput({ label, valueName }: PasswordInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={valueName}
      control={control}
      render={({
        field: { value, onChange },
        fieldState: { invalid, error, isDirty },
      }) => {
        const success = !invalid && isDirty; // 유효성 통과 부울값
        return (
          <InputField
            label={label}
            placeholder="비밀번호를 입력해주세요."
            value={value}
            isValid={success}
            error={error?.message}
            onChangeText={(text) => {
              onChange(text.trim());
            }}
            secureTextEntry // 암호화
            textContentType="oneTimeCode" //Strong Password 제거
            maxLength={20}
            returnKeyType="next"
          />
        );
      }}
      rules={{
        required: "비밀번호를 입력해주세요.",
        minLength: { value: 8, message: "8자 이상 입력해주세요." },
        pattern: {
          value: REGEX.PASSWORD,
          message: "영문, 숫자, 특수문자 조합으로 입력해주세요.",
        },
      }}
    />
  );
}

export default PasswordInput;
