import { useGetPost } from "@/hooks/queries/usePost";
import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams();
  const { data: post, isPending, isError } = useGetPost(Number(id));
  return (
    <View>
      <Text>디테일 페이지</Text>
      <Text>{post?.id} 번 게시물</Text>
      <Text>{post?.title}</Text>
      <Text>{post?.content}</Text>
      <Text>{post?.createdAt}</Text>
      <Text>{post?.nickname}</Text>
      {post?.images?.map((image) => (
        <Image key={image} source={{ uri: image }} style={styles.image} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
  },
});
