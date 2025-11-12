import Separator from "@/components/common/Separator";
import PolicyModal from "@/components/my/PolicyModal";
import { colors } from "@/constants/colors";
import { PolicyKey } from "@/constants/policies";
import { useUser } from "@/store/authStore";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function MyScreen() {
  const insets = useSafeAreaInsets();
  const user = useUser();
  const [policyModal, setPolicyModal] = useState<{
    visible: boolean;
    key: PolicyKey | null;
  }>({
    visible: false,
    key: null,
  });

  // 모달 여는 핸들러
  const openPolicyModal = (key: PolicyKey) => {
    setPolicyModal({ visible: true, key: key });
  };

  // 모달 닫는 핸들러
  const closePolicyMoal = () => {
    setPolicyModal({ visible: false, key: null });
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { paddingBottom: insets.bottom },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.topContainer}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={require("@/assets/images/react-logo.png")}
            resizeMode="contain"
          />
          <Text style={styles.nameText}>{`${user?.nickname} 님`}</Text>
          <Text style={styles.emailText}>{user?.email}</Text>
        </View>
      </View>

      <View style={styles.myButtonContainer}>
        <Pressable
          style={styles.buttonBox}
          onPress={() => router.push("/(tabs)/my/myPost")}
        >
          <Image
            style={styles.buttonImage}
            source={require("@/assets/images/forA-mypage-mywrite.png")}
          />
          <Text style={styles.buttonText}>나의 글</Text>
        </Pressable>
        <Pressable
          style={styles.buttonBox}
          onPress={() => router.push("/(tabs)/my/myComment")}
        >
          <Image
            style={styles.buttonImage}
            source={require("@/assets/images/forA-mypage-mycomment.png")}
          />
          <Text style={styles.buttonText}>나의 댓글</Text>
        </Pressable>
        <Pressable style={styles.buttonBox}>
          <Image
            style={styles.buttonImage}
            source={require("@/assets/images/forA-mypage-mydrug.png")}
          />
          <Text style={styles.buttonText}>나의 약</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.settingContainer}
        onPress={() => router.push("/(tabs)/my/setting")}
      >
        <Text style={styles.settingText}>계정 설정</Text>
      </Pressable>

      <View style={styles.legalContainer}>
        <Pressable onPress={() => openPolicyModal("tos")}>
          <Text style={styles.legalText}>이용약관</Text>
        </Pressable>
        <Separator />
        <Pressable onPress={() => openPolicyModal("privacy")}>
          <Text style={styles.legalText}>개인정보처리방침</Text>
        </Pressable>
      </View>
      <View style={styles.footerContainer}>
        <Image source={require("@/assets/images/forA-mypage-footer.png")} />
        <Text style={styles.footerText}>
          사업자: 포에이 | 대표자: 박세진{"\n"}
          주소: 서울특별시 용산구 청파로47길 90 B201{"\n"}
          제휴문의: foradhd2024@gmail.com{"\n"}
          이용문의/요청: foradhd2024@gmail.com{"\n\n"}
          <Text style={{ fontWeight: "bold" }}>
            © 2024 forA, Inc. All rights reserved.
          </Text>
          {"\n\n"}
          자사 사이트에 게시된 모든 콘텐츠 등 저작권은 포에이에 있습니다.{"\n"}
          자사의 사이트의 무단적인 수집을 엄격히 금합니다.
        </Text>
      </View>
      <PolicyModal
        visible={policyModal.visible}
        polickyKey={policyModal.key}
        onClose={closePolicyMoal}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topContainer: {
    backgroundColor: colors.WHITE,
    alignItems: "center",
    paddingBottom: 80,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileContainer: {
    alignItems: "center",
    gap: 8,
  },
  nameText: {
    fontSize: 25,
    fontWeight: "600",
  },
  emailText: {
    color: colors.GRAY[300],
    fontSize: 16,
  },
  profileImage: {
    borderWidth: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderColor: colors.GRAY[200],
  },
  myButtonContainer: {
    backgroundColor: colors.WHITE,
    marginHorizontal: 16,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 15,
    marginTop: -45, // 겹치기
    zIndex: 10,

    // ios
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0, //  그림자의 가로 이동량(+는 오른쪽, -는 왼쪽)
      height: 0, // 그림자의 세로 이동량(+는 아래, -는 위)
    },
    shadowOpacity: 0.1, // 그림자 투명도(0~1). 값이 클수록 진하게
    shadowRadius: 10, // 그림자 번짐(블러) 정도. 값이 클수록 부드럽고 넓게 퍼짐

    // android
    elevation: 12,
  },

  buttonImage: {
    width: 30,
    height: 30,
  },
  buttonText: {
    fontSize: 16,
  },
  buttonBox: {
    alignItems: "center",
    paddingVertical: 8,
    gap: 10,
  },
  settingContainer: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: 18,
    paddingVertical: 20,
    margin: 16,
    borderRadius: 15,
    justifyContent: "center",
  },
  settingText: {
    fontSize: 16,
  },
  legalContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  legalText: {
    color: colors.GRAY[400],
    fontWeight: "400",
    fontSize: 13,
  },
  footerContainer: {
    marginTop: 40,
    paddingHorizontal: 16,
    gap: 30,
  },
  footerText: {
    color: colors.GRAY[400],
    fontSize: 12,
    lineHeight: 15,
  },
});
