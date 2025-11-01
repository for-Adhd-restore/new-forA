import { colors } from "@/constants/colors";
import { Post } from "@/types";
import { unixToUTCString } from "@/utils/date";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface FeedItemProps {
  post: Post;
}

function FeedItem({ post }: FeedItemProps) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => router.push(`/post/${post.id}`)}
    >
      <Text>닉네임 : {post.nickname}</Text>
      <Text>제목 : {post.title}</Text>
      <Text>프로필 이미지 : {post.profileImage}</Text>
      <Text>카테고리 : {post.category}</Text>
      <Text>첨부 이미지 : {post.images}</Text>
      <Text>생성 일자 : {unixToUTCString(post.createdAt)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.WHITE,
  },
});

export default FeedItem;
