import {
  getMagazine,
  getMagazineList,
  postMagazineBookmark,
} from "@/api/magazine";
import { queryClient } from "@/api/queryClient";
import { queryKeys } from "@/constants/queryKeys";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetMagazineList() {
  return useQuery({
    queryFn: getMagazineList,
    queryKey: [queryKeys.MAGAZINE, queryKeys.GET_MAGAZINELIST],
    staleTime: 12 * 60 * 60 * 1000, // 12h 동안 fresh → 리마운트해도 리패치 X
    gcTime: 48 * 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}

export function useGetMagazine(magazineId: number) {
  return useQuery({
    queryFn: () => getMagazine(magazineId),
    queryKey: [queryKeys.MAGAZINE, queryKeys.GET_MAGAZINE, magazineId],
    staleTime: 12 * 60 * 60 * 1000, // 24h 동안 fresh → 리마운트해도 리패치 X
    gcTime: 48 * 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}

export function useMagazineBookmark(magazineId: number) {
  return useMutation({
    mutationFn: () => postMagazineBookmark(magazineId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.MAGAZINE, queryKeys.GET_MAGAZINELIST],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.MAGAZINE, queryKeys.GET_MAGAZINE, magazineId],
      });
    },
  });
}
