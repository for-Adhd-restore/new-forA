import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import { useLogin } from "@/hooks/queries/useLogin";
import { Link } from "expo-router";
import { FormProvider, useForm } from "react-hook-form";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type FormValues = {
  email: string;
  password: string;
};

export default function LoginScreen() {
  const loginMutation = useLogin();
  const loginForm = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (formValues: FormValues) => {
    const { email, password } = formValues;
    loginMutation.mutate({
      username: email,
      password: password,
    });
  };

  return (
    <FormProvider {...loginForm}>
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>ADHD인들의 커뮤니티,</Text>
          <Image
            style={styles.logoImg}
            source={require("@/assets/images/forA-text-logo.png")}
            resizeMode="contain" // 이미지의 가로세로 비율을 유지
          />
        </View>

        {/* Form */}
        <View style={styles.mainContainer}>
          <View style={styles.formContainer}>
            <EmailInput />
            <PasswordInput />
          </View>
          <Pressable onPress={loginForm.handleSubmit(handleLogin)}>
            <Text>로그인 버튼</Text>
          </Pressable>

          <Link href={"/auth/signup"}>
            <Text>이메일로 가입</Text>
          </Link>
        </View>
      </View>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {},
  logoImg: {},
  mainContainer: {
    flex: 2,
    paddingHorizontal: 15,
  },
  formContainer: {},
});
