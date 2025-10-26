import { axiosInstance } from "./axiosInstance";

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
