import MagazineCardHeader from "@/components/MagazineCardHeader";
import MagazineNavHeader from "@/components/MagazineNavHeader";
import { useGetMagazine } from "@/hooks/queries/useMagazine";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

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
