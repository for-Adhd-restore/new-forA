import { createPost, getPost } from "@/api/post";
import { queryClient } from "@/api/queryClient";
import { queryKeys } from "@/constants/queryKeys";
import { useMutation, useQuery } from "@tanstack/react-query";
import { router } from "expo-router";

export function useCreatePost() {
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      router.replace("/(tabs)/today");
      queryClient.invalidateQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_POSTS],
      });
    },
  });
}

export function useGetPost(id: number) {
  return useQuery({
    queryFn: () => getPost(id),
    queryKey: [queryKeys.POST, queryKeys.GET_POST, id],
    enabled: !isNaN(id), // id가 NaN이 아닐 때만 실행. id 값이 유효해질 때, 즉, URL 파라미터가 제대로 들어올 때 API 요청
  });
}
