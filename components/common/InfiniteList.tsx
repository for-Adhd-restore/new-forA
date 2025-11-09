import { colors } from "@/constants/colors";
import React from "react";
import { FlatList, FlatListProps, StyleSheet } from "react-native";

interface InfiniteListProps<T> {
  data: T[];
  renderItem: FlatListProps<T>["renderItem"];
  keyExtractor: (item: T) => string;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isLoading: boolean;
  error: Error | null;
  ListEmptyComponent?: FlatListProps<T>["ListEmptyComponent"];
}

function InfiniteList<T>({
  data,
  renderItem,
  keyExtractor,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  error,
  ListEmptyComponent,
}: InfiniteListProps<T>) {
  if (error) {
    //TODO: 피드 조회 에러 상태
  }

  if (isLoading) {
    //TODO: 초기 로딩 스켈레톤 UI 추가
  }

  //TODO 로딩 인디케이터 추가

  //다음 페이지 가져오는 로직
  const handleEndReached = () => {
    // 다음 페이지가 있으면서 + 다음 페이지를 가져오는 중이 아닐 때만 실행한다.
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.contentContainer} // FlatList 스타일
      renderItem={renderItem} // data 배열 요소를 하나씩 FeedItem에 넣음
      keyExtractor={keyExtractor}
      onEndReached={handleEndReached} // 스크롤 기반 로딩 트리거
      onEndReachedThreshold={0.5} // 스크롤이 리스트 끝에 도달했을 때 호출되는 임계값 (0~1 사이)
      // ListFooterComponent={renderFooter}  //리스트 하단 로딩 인디케이터
      // contentContainerStyle={styles.listContainer}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: colors.WHITE,
    gap: 12,
    flexGrow: 1, //  Empty일 때 내부가 남는 높이를 채움
    paddingHorizontal: 16,
  },
});

export default InfiniteList;
