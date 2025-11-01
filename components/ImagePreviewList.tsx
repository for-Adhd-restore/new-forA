import { colors } from "@/constants/colors";
import { ImageData } from "@/types";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";

interface ImagePreviewListProps {
  imageData: ImageData[];
  handlePickImage: () => void;
  handleDeleteImage: (uri: string) => void;
}

function ImagePreviewList({
  imageData,
  handlePickImage,
  handleDeleteImage,
}: ImagePreviewListProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false} // 스크롤 바 보이지 않게
      contentContainerStyle={styles.scrollContainer}
    >
      <Pressable style={styles.addImageContainer} onPress={handlePickImage}>
        <Feather name="plus" size={24} color="black" />
      </Pressable>
      {imageData.map((image) => (
        <View key={image.uri}>
          <Image source={{ uri: image.uri }} style={styles.image} />
          <Pressable
            style={styles.deleteContainer}
            onPress={() => handleDeleteImage(image.uri)}
          >
            <MaterialCommunityIcons
              name="close"
              size={20}
              color={colors.WHITE}
            />
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    borderWidth: 1,
    flexGrow: 1,
  },
  addImageContainer: {
    borderWidth: 1,
    padding: 20,
  },
  imageContainer: {},
  image: {
    width: 70,
    height: 70,
  },
  deleteContainer: {
    backgroundColor: colors.BLACK,
    position: "absolute",
    top: 0,
    right: 0,
  },
});

export default ImagePreviewList;
