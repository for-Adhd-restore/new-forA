import { colors } from "@/constants/colors";
import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface ConfirmModalProps {
  visible: boolean;
  content: string;
  handleModalEvent?: (() => void) | null;
  handleCloseModal: () => void;
}

function ConfirmModal({
  visible,
  content,
  handleModalEvent,
  handleCloseModal,
}: ConfirmModalProps) {
  return (
    <Modal
      animationType="none"
      visible={visible}
      transparent={true}
      onRequestClose={handleCloseModal} // [안드로이드 필수] 뒤로가기 버튼 눌렀을 때 닫기
      // onDismiss={}  모달이 사라지는 애니메이션이 완료된 후에 호출되는 콜백 함수. 데이터 새로고침 시 유용하다.
    >
      <View style={styles.background}>
        <View style={styles.modalContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>{content}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.yesButton} onPress={handleModalEvent}>
              <Text style={styles.yesText}>예</Text>
            </Pressable>
            <Pressable onPress={handleCloseModal} style={styles.noButton}>
              <Text style={styles.noText}>아니오</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: 15,
  },
  contentContainer: {
    paddingHorizontal: 60,
    paddingVertical: 32,
  },
  contentText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  yesButton: {
    backgroundColor: colors.GRAY[200],
    flex: 1,
    borderBottomLeftRadius: 15,
    paddingVertical: 15,
  },
  yesText: {
    color: colors.BLACK,
    textAlign: "center",
    fontSize: 16,
  },
  noButton: {
    backgroundColor: colors.GREEN[400],
    flex: 1,
    borderBottomRightRadius: 15,
    paddingVertical: 15,
  },
  noText: {
    color: colors.WHITE,
    textAlign: "center",
    fontSize: 16,
  },
});

export default ConfirmModal;
