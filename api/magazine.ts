import { Magazine, MagazineDetail } from "@/types";
import { axiosInstance } from "./axiosInstance";

export const getMagazineList = async (): Promise<Magazine[]> => {
  const { data } = await axiosInstance.get("/magazines/all");
  return data;
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
