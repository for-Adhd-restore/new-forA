import { createPost } from "@/api/post";
import { queryClient } from "@/api/queryClient";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";

export function useCreatePost() {
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      router.replace("/(tabs)/today");
      queryClient.invalidateQueries({
        queryKey: ["posts", "getPosts"],
      });
    },
  });
}
