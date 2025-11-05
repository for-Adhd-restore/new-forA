import { colors } from "@/constants/colors";
import { Magazine } from "@/types";
import { logOnDev } from "@/utils/logOnDev";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface MagazineTitleProps {
  magazine: Pick<
    Magazine,
    "chapterName" | "createdAt" | "mainTitle" | "subTitle" | "id" | "isScrapped"
  >;
  isDetail?: boolean;
}

function MagazineCardHeader({
  magazine,
  isDetail = false,
}: MagazineTitleProps) {
  return (
    <View style={[styles.container, isDetail && { marginTop: 20 }]}>
      <View style={[styles.headerContainer]}>
        <Text style={[styles.chapterText, isDetail && { fontSize: 18 }]}>
          {magazine.chapterName}
        </Text>
        <Text style={[styles.dateText, isDetail && { fontSize: 12 }]}>
          {magazine.createdAt}
        </Text>
      </View>
      <View style={styles.titleContainer}>
        <View style={{ gap: 5 }}>
          <Text style={[styles.titleText, isDetail && { fontSize: 28 }]}>
            {magazine.mainTitle}
          </Text>
          <Text style={[styles.subtitleText, isDetail && { fontSize: 18 }]}>
            {magazine.subTitle}
          </Text>
        </View>
        {!isDetail && (
          <Pressable
            style={styles.bookmarkButton}
            onPress={() => logOnDev("북마크 클릭")}
          >
            <Feather name="bookmark" size={26} color={colors.GREEN_400} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  chapterText: {
    fontSize: 14,
    color: colors.GREEN_400,
    fontWeight: "bold",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateText: {
    fontSize: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 20,
    color: colors.BLACK,
    fontWeight: "bold",
  },
  subtitleText: {
    fontSize: 14,
    color: colors.GRAY_400,
  },
  bookmarkButton: {},
});

export default MagazineCardHeader;
