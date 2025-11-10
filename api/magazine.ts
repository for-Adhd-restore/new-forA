import { Magazine, MagazineDetail } from "@/types";
import { axiosInstance } from "../lib/axiosInstance";

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
  magazineId: number,
): Promise<boolean> => {
  const { data } = await axiosInstance.post(`/magazines/${magazineId}/scrap`);
  return data;
};
