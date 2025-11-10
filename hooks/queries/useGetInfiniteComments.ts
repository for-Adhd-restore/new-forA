import { getMyComments } from "@/api/comment";
import { queryKeys } from "@/constants/queryKeys";
import { useInfiniteQuery } from "@tanstack/react-query";

// 마이페이지 - 내 댓글
export function useGetInfiniteMyComments() {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => getMyComments(pageParam),
    queryKey: [queryKeys.COMMENT, queryKeys.GET_MY_COMMENTS],
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.paging.isLast) return undefined;
      return allPages.length;
    },
  });
}
