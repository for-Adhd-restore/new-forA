import { Magazine, MagazineDetail } from "@/types";
import { axiosInstance } from "./axiosInstance";

export const getMagazineList = async (): Promise<Magazine[]> => {
  const { data } = await axiosInstance.get("/magazines/all", {
    params: { page: 0, size: 20, sortOption: "NEWEST_FIRST" }, // 추후 페이지네이션 및 정렬 확장 가능
  });
  const { magazines } = data;
  return magazines;
};

export const getMagazine = async (
  magazineId: number,
): Promise<MagazineDetail> => {
  const { data } = await axiosInstance.get(`/magazines/${magazineId}`);
  return data;
};

export const postMagazineBookmark = async (
  magizineId: number,
): Promise<void> => {
  const { data } = await axiosInstance.post(
    `/magazines/${magizineId}/bookmark`,
  );
  return data;
};
