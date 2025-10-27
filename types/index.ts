export interface User {
  email: string;
  nickname: string;
  profileImage: string | null;
  userBirth: string;
  userRole: "USER" | "ADMIN";
  forAdhdType: "FOR_MY_ADHD" | "FOR_CHILDREN_ADHD" | "FOR_AROUND_ADHD";
}
