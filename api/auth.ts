import { User } from "@/types";
import { axiosInstance } from "../lib/axiosInstance";

//TODO: 타입 정리
type RequestUser = {
  username: string;
  password: string;
};
type ResponseUser = {
  accessToken: string;
  refreshToken: string;
  hasVerifiedEmail: boolean;
};

export const postLogin = async (body: RequestUser): Promise<ResponseUser> => {
  const { data } = await axiosInstance.post("/auth/login", body);
  return data;
};

export const logout = async () => {
  await axiosInstance.delete("/auth/logout");
};

export const getMe = async (): Promise<User> => {
  const { data } = await axiosInstance.get("/user");
  return data;
};

type ChangePasswordProps = {
  prevPassword: string;
  password: {
    password: string;
    passwordConfirm: string;
  };
};

export const changePassword = async (body: ChangePasswordProps) => {
  await axiosInstance.put("/user/password", body);
};
