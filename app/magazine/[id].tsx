import MagazineCardHeader from "@/components/MagazineCardHeader";
import { useGetMagazine } from "@/hooks/queries/useMagazine";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function MagazineDetailScreen() {
  const { id } = useLocalSearchParams();
  const { data: magazine, isLoading, error } = useGetMagazine(Number(id));

  if (isLoading) return null;
  if (error) return null;
  if (!magazine) return null;

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
