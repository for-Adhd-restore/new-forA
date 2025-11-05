import MagazineCardHeader from "@/components/MagazineCardHeader";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

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
