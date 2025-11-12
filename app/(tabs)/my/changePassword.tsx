import PasswordConfirmInput from "@/components/auth/PasswordConfirmInput";
import PasswordInput from "@/components/auth/PasswordInput";
import CustomButton from "@/components/common/CustomButton";
import { useChangePassword } from "@/hooks/queries/useAuth";
import { FormProvider, useForm, useFormState } from "react-hook-form";
import { StyleSheet, View } from "react-native";

interface changePasswordFormValues {
  prevPassword: string;
  password: string;
  passwordConfirm: string;
}

export default function ChangePassword() {
  const changePasswordMutate = useChangePassword();
  const changePasswordForm = useForm<changePasswordFormValues>({
    defaultValues: {
      prevPassword: "",
      password: "",
      passwordConfirm: "",
    },
    mode: "onChange",
  });

  const handleChangePassword = (formValues: changePasswordFormValues) => {
    const body = {
      prevPassword: formValues.prevPassword,
      password: {
        password: formValues.password,
        passwordConfirm: formValues.passwordConfirm,
      },
    };
    changePasswordMutate.mutate(body);
  };
  const { control } = changePasswordForm;
  const { isValid } = useFormState({ control });

  return (
    <FormProvider {...changePasswordForm}>
      <View style={styles.formContainer}>
        <PasswordInput label="현재 비밀번호" valueName="prevPassword" />
        <PasswordInput label="새 비밀번호" valueName="password" />
        <PasswordConfirmInput
          label="새 비밀번호 확인"
          valueName="passwordConfirm"
        />
        <CustomButton
          label="변경"
          onPress={changePasswordForm.handleSubmit(handleChangePassword)}
          isValid={isValid}
          disabled={!isValid}
        />
      </View>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 16,
    gap: 18,
  },
});
