import { colors } from "@/constants/colors";
import { Magazine } from "@/types";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import MagazineCardHeader from "./MagazineCardHeader";

interface MagazineCardProps {
  magazine: Magazine;
}

function MagazineCard({ magazine }: MagazineCardProps) {
  const handlePressMagazine = () => {
    router.push(`/magazine/${magazine.id}`);
  };

  return (
    <Pressable style={styles.container} onPress={handlePressMagazine}>
      <MagazineCardHeader magazine={magazine} />
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
