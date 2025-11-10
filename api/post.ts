import { Post, PostCategory, PostList } from "@/types";
import { axiosInstance } from "../lib/axiosInstance";

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

export const getPost = async (id: number): Promise<Post> => {
  const { data } = await axiosInstance.get(`/posts/${id}`);
  return data;
};

// 마이페이지 나의 글 불러오기
export const getMyPosts = async ({
  pageParam = 0,
  category,
}: PostRequest): Promise<PostList> => {
  const { data } = await axiosInstance.get<PostList>("/posts/my-posts", {
    params: { category: category, sortOption: "NEWEST_FIRST", page: pageParam },
  });
  return data;
};
