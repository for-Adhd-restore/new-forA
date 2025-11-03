import MagazineCard from "@/components/MagazineCard";
import { colors } from "@/constants/colors";
import { Magazine } from "@/types";
import Feather from "@expo/vector-icons/Feather";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const mockMagazines: Magazine[] = [
  {
    id: 1,
    chapter: "chapter 01",
    date: "2025-11-01",
    title: "첫 번째 매거진: 시작",
    subtitle: "새로운 여정의 시작을 알리며",
    thumbnails: [
      "https://picsum.photos/id/1003/800/600",
      "https://picsum.photos/id/1011/800/600",
    ],
    type: "type1",
  },
  {
    id: 2,
    chapter: "chapter 02",
    date: "2025-11-03",
    title: "기술의 발전",
    subtitle: "최신 기술 트렌드를 탐구합니다.",
    thumbnails: ["https://picsum.photos/id/1035/800/600"],
    type: "type4",
  },
  {
    id: 3,
    chapter: "chapter 03",
    date: "2025-11-05",
    title: "디자인 이야기",
    subtitle: "사용자 경험(UX)의 중요성",
    thumbnails: [
      "https://picsum.photos/id/1043/800/600",
      "https://picsum.photos/id/1050/800/600",
    ],
    type: "type4",
  },
  {
    id: 4,
    chapter: "chapter 04",
    date: "2025-11-10",
    title: "도시의 숨겨진 명소",
    subtitle: "우리가 몰랐던 도시의 매력",
    thumbnails: ["https://picsum.photos/id/1069/800/600"],
    type: "type4",
  },
  {
    id: 5,
    chapter: "chapter 05",
    date: "2025-11-15",
    title: "미래를 향한 준비",
    subtitle: "다음 10년을 위한 로드맵",
    thumbnails: [
      "https://picsum.photos/id/1074/800/600",
      "https://picsum.photos/id/1084/800/600",
    ],
    type: "type4",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.textContainer}>
        <Text style={[styles.titleText, { color: colors.GREEN_400 }]}>
          난 왜 이렇게 행동할까
        </Text>
        <Text style={styles.titleText}>포에이 매거진</Text>
        <View style={styles.descriptionContainer}>
          <Feather name="alert-circle" size={11} color={colors.GRAY_500} />
          <Text style={styles.descriptionText}>
            이유를 몰라서 자책했던 순간들, 이젠 우리 뇌의 방식으로 이해해요.
            {"\n"}
            포에이 매거진은 뇌과학과 심리학 기반의 실용적인 ADHD 생존팁을
            전합니다.{"\n"}우리 ADHD와 함께 잘 살아봐요!
          </Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {mockMagazines.map((item) => (
          <MagazineCard key={item.id} magazine={item} />
        ))}
        <View style={styles.footerContainer}>
          <Text
            style={[
              styles.footerText,
              { color: colors.GRAY_500, fontWeight: "bold" },
            ]}
          >
            © 2025 forA, Inc. All rights reserved.
          </Text>
          <Text style={styles.footerText}>
            자사 서비스에 게시된 모든 콘텐츠의 저작권은 포에이에 있습니다.{"\n"}
            포에이™에 게시된 모든 정보의 무단 수집을 엄격히 금합니다.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  textContainer: {
    gap: 5,
    marginBottom: 30,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  descriptionContainer: {
    flexDirection: "row",
    marginTop: 10,
    gap: 5,
  },
  descriptionText: {
    fontSize: 11,
    color: colors.GRAY_500,
  },
  scrollContainer: {
    gap: 15,
  },
  footerContainer: {
    gap: 15,
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 12,
    color: colors.GRAY_400,
  },
});
