import MagazineCardHeader from "@/components/MagazineCardHeader";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

//TODO: 더미
const magazine = {
  id: 2,
  chapter: "chapter 02",
  date: "2025-11-03",
  title: "기술의 발전",
  subtitle: "최신 기술 트렌드를 탐구합니다.",
  thumbnails: ["https://picsum.photos/id/1035/800/600"],
};

export default function MagazineDetailScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <MagazineCardHeader magazine={magazine} isDetail />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
