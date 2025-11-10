import InfiniteList from "@/components/common/InfiniteList";
import MyCommentEmpty from "@/components/my/MyCommentEmpty";
import FeedItem from "@/components/post/FeedItem";
import { useGetInfiniteMyComments } from "@/hooks/queries/useGetInfiniteComments";
import { Post } from "@/types";
import { StyleSheet, View } from "react-native";

export default function MyCommentScreen() {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetInfiniteMyComments();

  // 페이지 풀기
  const flatPosts: Post[] =
    data?.pages.map((item) => item.postList).flat() ?? [];

  return (
    <View style={styles.constainer}>
      <InfiniteList
        data={flatPosts}
        error={error}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FeedItem post={item} />}
        ListEmptyComponent={MyCommentEmpty}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
});
