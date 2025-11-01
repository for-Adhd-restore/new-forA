import { createPost } from "@/api/post";
import { queryClient } from "@/api/queryClient";
import { queryKeys } from "@/constants/queryKeys";
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
