import { colors } from "@/constants/colors";
import {
  POLICY_CONTENTS,
  POLICY_TITLE,
  PolicyKey,
  PRIVACY_TEXT_AFTER_TABLE,
  PRIVACY_TEXT_BEFORE_TABLE,
} from "@/constants/policies";
import { PRIVACY_ROWS } from "@/constants/privacyTable";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PolicyTable from "./PolicyTable";

interface PolicyModalProps {
  visible: boolean;
  polickyKey: PolicyKey | null;
  onClose: () => void;
  children?: React.ReactNode;
}

function PolicyModal({
  visible,
  polickyKey,
  onClose,
  children,
}: PolicyModalProps) {
  if (!visible || !polickyKey) return null;

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.background}>
        <View style={styles.modalContainer}>
          <View style={styles.headerContainer}>
            <Pressable onPress={onClose}>
              <AntDesign name="close" size={20} color={colors.BLACK} />
            </Pressable>
          </View>
          <ScrollView>
            <Text style={styles.title}>{POLICY_TITLE[polickyKey]}</Text>
            {children ? (
              children
            ) : (
              <Text style={{ color: colors.BLACK }}>
                {POLICY_CONTENTS[polickyKey]}
              </Text>
            )}
            {polickyKey === "privacy" ? (
              <View style={{ gap: 14 }}>
                <Text style={{ color: "#333", lineHeight: 20 }}>
                  {PRIVACY_TEXT_BEFORE_TABLE}
                </Text>
                <PolicyTable rows={PRIVACY_ROWS} />
                <Text style={{ color: "#333", lineHeight: 20 }}>
                  {PRIVACY_TEXT_AFTER_TABLE}
                </Text>
              </View>
            ) : (
              <Text style={{ color: "#333", lineHeight: 20 }}>
                {POLICY_CONTENTS[polickyKey!]}
              </Text>
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    gap: 10,
    marginVertical: 120,
    marginHorizontal: 40,
    borderRadius: 15,
  },
  headerContainer: {
    alignItems: "flex-end",
  },
  headerText: {
    color: colors.BLACK,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "600",
  },
});

export default PolicyModal;
