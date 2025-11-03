import * as ImagePicker from "expo-image-picker";

export interface User {
  email: string;
  nickname: string;
  profileImage: string | null;
  userBirth: string;
  userRole: "USER" | "ADMIN";
  forAdhdType: "FOR_MY_ADHD" | "FOR_CHILDREN_ADHD" | "FOR_AROUND_ADHD";
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

//오늘

export type PostCategory =
  | "TEENS"
  | "TWENTIES"
  | "THIRTIES_AND_ABOVE"
  | "PARENTS"
  | "NOTICE";

export interface Paging {
  page: number;
  size: number;
  totalPages: number;
  numberOfElements: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
  isEmpty: boolean;
}

export interface Post {
  id: number;
  userId: string;
  title: string;
  content: string;
  anonymous: boolean;
  images: string[] | null;
  isLiked?: boolean;
  isScrapped?: boolean;
  likeCount: number;
  commentCount: number;
  scrapCount: number;
  viewCount: number;
  category: PostCategory;
  nickname: string | null;
  profileImage: string | null;
  createdAt: number;
  lastModifiedAt: number;
  isAuthor?: boolean;
}

export type Comment = {
  id: number;
  content: string;
  userId: string;
  postId: number;
  anonymous: boolean;
  likeCount: number;
  createdAt: number;
  lastModifiedAt: number;
  parentCommentId: number | null;
  children: Comment[];
  isLiked: boolean;
  nickname: string;
  isCommentAuthor: boolean;
  isBlocked: boolean;
  profileImage: string;
};

export type PostDetail = {
  id: number;
  userId: string;
  title: string;
  content: string;
  anonymous: boolean;
  images: string[] | null;
  isLiked?: boolean;
  isScrapped?: boolean;
  likeCount: number;
  commentCount: number;
  scrapCount: number;
  viewCount: number;
  category: string;
  comments: Comment[];
  nickname: string | null;
  profileImage: string | null;
  createdAt: number;
  lastModifiedAt: number;
  isAuthor?: boolean;
  isBlocked?: boolean;
};

export interface PostList {
  postList: Post[];
  paging: Paging;
}

export type ImageData = Pick<
  ImagePicker.ImagePickerAsset,
  "uri" | "fileName" | "mimeType"
>;

// 매거진 타입

export interface Magazine {
  id: number;
  chapter: string;
  date: string;
  title: string;
  subtitle: string;
  thumbnails: string[];
  type: "type1" | "type4" | "type5";
}

export type MagazineDetail = Omit<Magazine, "thumbnails"> & {
  author: string;
  contents: string;
};
