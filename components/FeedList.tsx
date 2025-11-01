import { colors } from "@/constants/colors";
import { useGetInfinitePosts } from "@/hooks/queries/useGetInfinitePosts";
import { PostCategory } from "@/types";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import FeedItem from "./FeedItem";

interface FeedListProps {
  selectedCategory: PostCategory;
}

function FeedList({ selectedCategory }: FeedListProps) {
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetInfinitePosts(selectedCategory);

  if (error) {
    //TODO: 피드 조회 에러 상태
  }

  if (isLoading) {
    //TODO: 초기 로딩 스켈레톤 UI 추가
  }

  //다음 페이지 가져오는 로직
  const handleEndReached = () => {
    // 다음 페이지가 있으면서 + 다음 페이지를 가져오는 중이 아닐 때만 실행한다.
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <FlatList
      data={posts?.pages.map((item) => item.postList).flat()}
      contentContainerStyle={styles.contentContainer} // FlatList 스타일
      renderItem={({ item }) => <FeedItem post={item} />} // data 배열 요소를 하나씩 FeedItem에 넣음
      keyExtractor={(item) => String(item.id)}
      onEndReached={handleEndReached} // 스크롤 기반 로딩 트리거
      onEndReachedThreshold={0.5} // 스크롤이 리스트 끝에 도달했을 때 호출되는 임계값 (0~1 사이)
      // ListFooterComponent={renderFooter}  //리스트 하단 로딩 인디케이터
      // contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 12,
    backgroundColor: colors.GRAY_200,
    gap: 12,
  },
});

export default FeedList;
