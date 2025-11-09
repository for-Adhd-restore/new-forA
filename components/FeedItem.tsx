import { colors } from "@/constants/colors";
import { Post } from "@/types";
import { unixToUTCString } from "@/utils/date";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

dayjs.extend(relativeTime); // "몇 시간 전" 을 표시하기 위한 fromNow 기능 추가
dayjs.locale("ko"); // 한국어 버전

interface FeedItemProps {
  post: Post;
}

function FeedItem({ post }: FeedItemProps) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => router.push(`/post/${post.id}`)}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>{post.title}</Text>

        <View style={styles.iconConatiner}>
          <View style={styles.iconBox}>
            <Ionicons name="eye-outline" size={16} color={colors.GRAY_500} />
            <Text>{post.viewCount}</Text>
          </View>
          <View style={styles.iconBox}>
            <Feather name="thumbs-up" size={16} color={colors.GRAY_500} />
            <Text>{post.likeCount}</Text>
          </View>
          <View style={styles.iconBox}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={16}
              color={colors.GRAY_500}
            />
            <Text>{post.commentCount}</Text>
          </View>
        </View>
        <Text style={styles.createAt}>
          {dayjs(unixToUTCString(post.createdAt)).fromNow()}
        </Text>
      </View>

      {post.images && (
        <Image style={styles.feedImage} source={{ uri: post.images[0] }} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY_300,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: {
    justifyContent: "center",
    gap: 8,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "600",
  },
  iconConatiner: {
    flexDirection: "row",
    gap: 10,
  },
  iconBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  imageContainer: {},
  feedImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  createAt: {
    color: colors.GRAY_400,
  },
});

export default FeedItem;
