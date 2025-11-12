import { colors } from "@/constants/colors";
import { useUser } from "@/store/authStore";
import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function SettingScreen() {
  const user = useUser();

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
      <View style={styles.footerContainer}></View>
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
  footerContainer: {
    flex: 1,
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
});
