import { colors } from "@/constants/colors";
import { Magazine } from "@/types";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface MagazineCardProps {
  magazine: Magazine;
}

function MagazineCard({ magazine }: MagazineCardProps) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.chapterText}>{magazine.chapter}</Text>
        <Text style={styles.dateText}>{magazine.date}</Text>
      </View>
      <View style={styles.titleContainer}>
        <View style={{ gap: 5 }}>
          <Text style={styles.titleText}>{magazine.title}</Text>
          <Text style={styles.subtitleText}>{magazine.subtitle}</Text>
        </View>
        <Pressable style={styles.bookmarkButton}>
          <Feather name="bookmark" size={26} color="black" />
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        {magazine.thumbnails.map((image) => (
          <Image
            key={image}
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
        ))}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    padding: 10,
    borderRadius: 10,
    gap: 10,

    //그림자
    shadowColor: colors.BLACK,
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 4,
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
  },
  bookmarkButton: {},
  imageContainer: {
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 12,
    borderRadius: 10,
    flex: 1,
  },
});

export default MagazineCard;
