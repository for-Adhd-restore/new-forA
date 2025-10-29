import { colors } from "@/constants/colors";
import { Post } from "@/types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface FeedItemProps {
  post: Post;
}

function FeedItem({ post }: FeedItemProps) {
  return (
    <View style={styles.container}>
      <Text>{post.userId}</Text>
      <Text>{post.title}</Text>
      <Text>{post.category}</Text>
      <Text>{post.createdAt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.WHITE,
  },
});

export default FeedItem;
