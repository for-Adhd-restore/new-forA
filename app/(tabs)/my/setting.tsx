import Separator from "@/components/common/Separator";
import ConfirmModal from "@/components/my/ConfirmModal";
import { colors } from "@/constants/colors";
import { useDeleteUser, useLogout } from "@/hooks/queries/useAuth";
import { useUser } from "@/store/authStore";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export type ModalType = {
  visible: boolean;
  content: string;
  handleModalEvent: (() => void) | null;
};

export default function SettingScreen() {
  const user = useUser();
  const logoutMutation = useLogout();
  const deleteUserMutation = useDeleteUser();

  const [modalState, setModalState] = useState<ModalType>({
    visible: false,
    content: "",
    handleModalEvent: null,
  });

  // 로그아웃 모달
  const openLogoutModal = () => {
    setModalState({
      visible: true,
      content: "정말 로그아웃하시겠습니까?",
      handleModalEvent: handleLogout,
    });
  };

  // 회원탈퇴 모달
  const openWithdrawModal = () => {
    setModalState({
      visible: true,
      content: `회원탈퇴 시 계정 복구가 불가합니다. \n 그래도 삭제하시겠습니까?`,
      handleModalEvent: handleWithdraw,
    });
  };

  // 모달 닫기
  const closeModal = () => {
    setModalState({
      visible: false,
      content: "",
      handleModalEvent: null,
    });
  };

  //로그아웃 핸들러
  const handleLogout = () => {
    logoutMutation.mutate();
  };

  //회원탈퇴 핸들러
  const handleWithdraw = () => {
    deleteUserMutation.mutate();
  };

  return (
    <View style={styles.container}>
      <View style={styles.myProfileContainer}>
        <View>
          <Text style={styles.titleText}>내 정보</Text>
          <Text
            style={styles.profileText}
          >{`닉네임:   ${user?.nickname}`}</Text>
          <Text
            style={styles.profileText}
          >{`생년월일:   ${user?.userBirth}`}</Text>
          <Text style={styles.profileText}>{`이메일:   ${user?.email}`}</Text>
        </View>
        <View>
          <View style={styles.imageContainer}>
            {user?.profileImage && (
              <Image
                style={styles.profileImage}
                source={{ uri: user?.profileImage }}
              />
            )}
          </View>
        </View>
      </View>

      <View style={styles.accountContainer}>
        <Text style={styles.accountText}>계정</Text>
        <Pressable
          style={styles.accountButton}
          onPress={() => router.push("/(tabs)/my/changePassword")}
        >
          <Text style={styles.changePasswordText}>비밀번호 변경</Text>
        </Pressable>
      </View>

      <View style={styles.footerContainer}>
        <Pressable onPress={openLogoutModal}>
          <Text style={styles.logoutText}>로그아웃</Text>
        </Pressable>
        <Separator />
        <Pressable onPress={openWithdrawModal}>
          <Text style={styles.withdrawText}>회원탈퇴</Text>
        </Pressable>
      </View>
      <ConfirmModal
        content={modalState.content}
        handleCloseModal={closeModal}
        visible={modalState.visible}
        handleModalEvent={modalState.handleModalEvent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
  },
  myProfileContainer: {
    flex: 2,
    backgroundColor: colors.WHITE,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    paddingHorizontal: 18,

    alignItems: "center",
    justifyContent: "space-between",
  },
  titleText: {
    fontWeight: "600",
    fontSize: 20,
    color: colors.BLACK,
    paddingVertical: 8,
  },
  profileText: {
    fontSize: 16,
    color: colors.GRAY[500],
    paddingVertical: 6,
  },
  accountContainer: {
    flex: 5,
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    padding: 18,
    gap: 12,
  },
  imageContainer: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.GRAY[300],
    width: 90,
    height: 90,
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  accountText: {
    fontSize: 20,
    color: colors.BLACK,
    fontWeight: "600",
  },
  changePasswordText: {
    fontSize: 20,
    padding: 5,
    color: colors.BLACK,
  },
  accountButton: {
    borderBottomWidth: 1,
    padding: 4,
  },
  footerContainer: {
    flex: 1,
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  logoutText: {
    borderBottomWidth: 1,
    color: colors.RED[400],
    borderBottomColor: colors.RED[400],
    fontWeight: "600",
    fontSize: 14,
  },
  withdrawText: {
    fontSize: 14,
    color: colors.GRAY[300],
  },
});
