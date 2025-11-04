import { colors } from "@/constants/colors";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function MagazineNavHeader() {
  const inset = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginTop: inset.top }]}>
      <Pressable style={styles.leftContainer} onPress={() => router.back()}>
        <Feather name="arrow-left" size={24} color={colors.BLACK} />
      </Pressable>
      <View style={styles.rightContainer}>
        <Pressable>
          <Feather name="upload" size={24} color={colors.GRAY_400} />
        </Pressable>
        <Pressable>
          <Feather name="bookmark" size={24} color={colors.GRAY_400} />
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
