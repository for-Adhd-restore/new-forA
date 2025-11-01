import { getPosts } from "@/api/post";
import { queryKeys } from "@/constants/queryKeys";
import { PostCategory } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useGetInfinitePosts(category: PostCategory) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => getPosts({ pageParam, category }),
    queryKey: [queryKeys.POST, queryKeys.GET_POSTS, category], // category 값이 변경될 때마다 React Query가 이를 "새로운 쿼리"로 인식하고 해당 카테고리의 데이터를 자동으로 다시 가져온다.
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.paging.isLast) return undefined;
      return allPages.length;
    },
  });
}
