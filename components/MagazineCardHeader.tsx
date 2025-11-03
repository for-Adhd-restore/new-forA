import { colors } from "@/constants/colors";
import { Magazine } from "@/types";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface MagazineTitleProps {
  magazine: Magazine;
  isDetail?: boolean;
}

function MagazineCardHeader({
  magazine,
  isDetail = false,
}: MagazineTitleProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer]}>
        <Text style={[styles.chapterText, isDetail && { fontSize: 18 }]}>
          {magazine.chapter}
        </Text>
        <Text style={[styles.dateText, isDetail && { fontSize: 12 }]}>
          {magazine.date}
        </Text>
      </View>
      <View style={styles.titleContainer}>
        <View style={{ gap: 5 }}>
          <Text style={[styles.titleText, isDetail && { fontSize: 28 }]}>
            {magazine.title}
          </Text>
          <Text style={[styles.subtitleText, isDetail && { fontSize: 18 }]}>
            {magazine.subtitle}
          </Text>
        </View>
        {!isDetail && (
          <View style={styles.bookmarkButton}>
            <Feather name="bookmark" size={26} color={colors.GREEN_400} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    marginTop: 20,
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
