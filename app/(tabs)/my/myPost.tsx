import InfiniteList from "@/components/common/InfiniteList";
import MyPostEmpty from "@/components/my/MyPostEmpty";
import CategoryButtonList from "@/components/post/CategoryButtonList";
import FeedItem from "@/components/post/FeedItem";
import { useGetInfiniteMyPosts } from "@/hooks/queries/useGetInfinitePosts";
import { Post, PostCategory } from "@/types";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function MyPostScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState<PostCategory>("TWENTIES");

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetInfiniteMyPosts(selectedCategory);

  // 페이지 풀기
  //TODO: 나중에 util로 빼야 하나?
  const flatPosts: Post[] =
    data?.pages.map((item) => item.postList).flat() ?? [];

  return (
    <View style={styles.container}>
      <CategoryButtonList setSelectedCategory={setSelectedCategory} />

      <InfiniteList
        data={flatPosts}
        error={error}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FeedItem post={item} />}
        ListEmptyComponent={MyPostEmpty}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 화면을 꽉 채우기 위해서
  },
});
