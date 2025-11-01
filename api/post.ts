import { Post, PostCategory, PostList } from "@/types";
import { axiosInstance } from "./axiosInstance";

interface PostRequest {
  category: PostCategory;
  pageParam: number;
}

export const getPosts = async ({
  pageParam = 0,
  category,
}: PostRequest): Promise<PostList> => {
  const { data } = await axiosInstance.get<PostList>(
    `/posts/category?category=${category}&page=${pageParam}&sortOption=NEWEST_FIRST`,
  );
  return data;
};

export const createPost = async (
  body: Pick<Post, "title" | "content" | "images" | "anonymous" | "category">,
): Promise<Post> => {
  const { data } = await axiosInstance.post("/posts", body);
  return data;
};
