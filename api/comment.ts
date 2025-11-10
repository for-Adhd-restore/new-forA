import { PostList } from "@/types";
import { axiosInstance } from "./axiosInstance";

export const getMyComments = async (pageParam: number): Promise<PostList> => {
  const { data } = await axiosInstance.get<PostList>("/comments/my-comments", {
    params: { page: pageParam },
  });
  return data;
};
