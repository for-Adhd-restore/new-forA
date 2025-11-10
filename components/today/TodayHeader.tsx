import { colors } from "@/constants/colors";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function TodayHeader() {
  const inset = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginTop: inset.top + 10 }]}>
      <View style={styles.leftContainer}>
        <Image source={require("@/assets/images/forA-text-logo.png")} />
      </View>
      <View style={styles.rightContainer}>
        <Pressable onPress={() => router.push("/(tabs)/today/search")}>
          <Feather name="search" size={28} color={colors.BLACK} />
        </Pressable>
        <Pressable onPress={() => router.push("/(tabs)/today/notification")}>
          <MaterialIcons
            name="notifications-none"
            size={28}
            color={colors.BLACK}
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
    backgroundColor: colors.WHITE,
  },
  leftContainer: {},
  rightContainer: {
    flexDirection: "row",
    gap: 12,
  },
});

export default TodayHeader;
