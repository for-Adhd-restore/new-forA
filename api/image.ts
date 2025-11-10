import { ImageData } from "@/types";
import { axiosInstance } from "../lib/axiosInstance";

export const uploadImages = async (
  imageUris: ImageData[],
): Promise<string[]> => {
  const formData = new FormData();

  imageUris.forEach((image) => {
    formData.append("imageFileList", {
      uri: image.uri,
      name: image.fileName,
      type: image.mimeType,
    } as any); // RN FormData 타입 이슈로 as any 필요
  });

  formData.append(
    "request",
    JSON.stringify({ imagePathPrefix: "DEFAULT_IMAGE" }),
  );
  const { data } = await axiosInstance.post("/files/images", formData);
  // 반환 예시 data -> {"imagePathList": ["image/6bf768e5c7c844d28202d22214f4a87c_3000x2002.jpg"]}

  const newImagePathList = data.imagePathList.map(
    (imagePath: string) =>
      process.env.EXPO_PUBLIC_CDN_CLOUDFRONT_URL + "/" + imagePath,
  );
  return newImagePathList; // uri배열
};
