import InfiniteList from "@/components/common/InfiniteList";
import CategoryButtonList from "@/components/post/CategoryButtonList";
import FeedItem from "@/components/post/FeedItem";
import { useGetInfinitePosts } from "@/hooks/queries/useGetInfinitePosts";
import { Post, PostCategory } from "@/types";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

export default function TodayScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState<PostCategory>("TWENTIES");
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetInfinitePosts(selectedCategory);
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
      />
      <Link href={"/post/write"} asChild>
        <Pressable style={styles.writeButton}>
          <Image
            source={require("@/assets/images/write.png")}
            style={styles.writeImg}
          />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  writeButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 70,
    height: 70,

    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  writeImg: {
    width: 100, // 예시 크기
    height: 100, // 예시 크기
  },
});
