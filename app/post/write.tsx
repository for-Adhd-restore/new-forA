import ImagePreviewList from "@/components/post/ImagePreviewList";
import { colors } from "@/constants/colors";
import { ImageData } from "@/types";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function WriteScreen() {
  const [imageData, setImageData] = useState<ImageData[]>([]);

  // 이미지 추가 핸들러
  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsMultipleSelection: true, // 여러 장 선택 가능
      quality: 0.7,
    });

    //취소를 눌렀을 때
    if (result.canceled) {
      return;
    }

    // 이미지 개수 제한
    if (imageData.length + result.assets.length > 5) {
      Alert.alert("이미지는 최대 5장 입니다."); // TODO: 토스트 메시지로 변경?
      return;
    }

    // 이미지 추가
    setImageData((prev) => [
      ...prev,
      ...result.assets.map((asset) => ({
        uri: asset.uri,
        fileName: asset.fileName,
        mimeType: asset.mimeType,
      })),
    ]);
  };

  //이미지 삭제 핸들러
  const handleDeleteImage = (uri: string) => {
    const newImageData = imageData.filter((image) => image.uri !== uri);
    setImageData(newImageData);
  };

  //글쓰기 요청 핸들러
  const handleSubmitPost = async () => {};

  return (
    <View style={styles.container}>
      <Text>글쓰기</Text>
      <ImagePreviewList
        imageData={imageData}
        handlePickImage={handlePickImage}
        handleDeleteImage={handleDeleteImage}
      />

      {/* TODO: 제출 버튼은 헤더 오른쪽에 추가 */}
      <Pressable
        onPress={handleSubmitPost}
        style={{ padding: 10, backgroundColor: colors.GRAY_200 }}
      >
        <Text>제출</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
