import MagazineCard from "@/components/MagazineCard";
import { colors } from "@/constants/colors";
import { Magazine } from "@/types";
import Feather from "@expo/vector-icons/Feather";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
