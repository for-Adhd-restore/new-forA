import { colors } from "@/constants/colors";
import { useMagazineBookmark } from "@/hooks/queries/useMagazine";
import { Magazine } from "@/types";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface MagazineNavHeaderProps {
  magazine: Pick<Magazine, "id" | "isScrapped">;
}

function MagazineNavHeader({ magazine }: MagazineNavHeaderProps) {
  const inset = useSafeAreaInsets();
  const bookmarkMutation = useMagazineBookmark(magazine.id);

  const handleBookmark = () => {
    bookmarkMutation.mutate();
  };

  return (
    <View style={[styles.container, { marginTop: inset.top }]}>
      <Pressable style={styles.leftContainer} onPress={() => router.back()}>
        <Feather name="arrow-left" size={24} color={colors.BLACK} />
      </Pressable>
      <View style={styles.rightContainer}>
        <Pressable>
          <Feather name="upload" size={24} color={colors.GRAY_400} />
        </Pressable>
        <Pressable onPress={handleBookmark}>
          <Ionicons
            name={magazine.isScrapped ? "bookmark" : "bookmark-outline"}
            size={26}
            color={colors.GREEN_400}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  leftContainer: {},
  rightContainer: {
    flexDirection: "row",
    gap: 12,
  },
});

export default MagazineNavHeader;
