import MagazineCardHeader from "@/components/magazine/MagazineCardHeader";
import MagazineNavHeader from "@/components/magazine/MagazineNavHeader";
import { colors } from "@/constants/colors";
import { useGetMagazine } from "@/hooks/queries/useMagazine";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Markdown, { ASTNode } from "react-native-markdown-display";

// 마크다운 이미지 규칙
const rules = {
  image: (node: ASTNode) => {
    return (
      <Image
        key={node.key}
        source={{ uri: node.attributes.src }}
        style={{
          width: "100%",
          height: 200,
          resizeMode: "contain",
          marginVertical: 12,
        }}
      />
    );
  },
};
export default function MagazineDetailScreen() {
  const { id } = useLocalSearchParams();
  const { data: magazine, isLoading, error } = useGetMagazine(Number(id));
  const navigation = useNavigation();

  useEffect(() => {
    if (!magazine) return;
    navigation.setOptions({
      header: () => <MagazineNavHeader magazine={magazine} />,
    });
  }, [navigation, magazine]);

  if (isLoading) return null;
  if (error) return null;
  if (!magazine) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MagazineCardHeader magazine={magazine} isDetail />
      <View style={styles.authorContainer}>
        <Text>글</Text>
        <Text style={styles.authorText}>{magazine.contentAuthor}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Markdown style={markdownDisplayStyles} rules={rules}>
          {magazine.contentHtml}
        </Markdown>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    gap: 24,
  },
  authorContainer: {
    flexDirection: "row",
    gap: 10,
  },
  authorText: {
    color: colors.GREEN[400],
    fontWeight: "600",
    textDecorationLine: "underline", // 밑줄

    textDecorationColor: colors.GREEN[400], // 밑줄 색상 (보통 글자 색 따라감)
  },
  contentContainer: {
    paddingHorizontal: 6,
    paddingVertical: 10,
    marginBottom: 30,
  },
});

// 마크다운 스타일
const markdownDisplayStyles = StyleSheet.create({
  // --- 기본 텍스트 스타일 ---
  body: {
    fontSize: 16,
    color: "#333333",
  },
  // ✅ 여기가 핵심: 단락(paragraph)의 줄간격을 조절합니다.
  paragraph: {
    fontSize: 16,
    lineHeight: 26, // 👈 숫자를 조절해 줄간격을 변경하세요.
    marginTop: 8,
    marginBottom: 12,
  },

  // --- 제목(Heading) 스타일 ---
  heading2: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 12,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  heading3: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
  },

  // --- 인용구(Blockquote) 스타일 ---
  blockquote: {
    backgroundColor: "#F8F8F8",
    borderLeftColor: "#DDDDDD",
    borderLeftWidth: 5,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 10,
    borderRadius: 4,
  },

  // --- 기타 스타일 ---
  link: {
    color: "#007AFF", // 링크 색상
    textDecorationLine: "underline",
  },
  strong: {
    fontWeight: "bold", // 굵은 글씨
  },
  list_item: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 4,
  },
});
