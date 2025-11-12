import { colors } from "@/constants/colors";
import React from "react";
import { StyleSheet, View } from "react-native";

function Separator() {
  return <View style={styles.seperate}></View>;
}

const styles = StyleSheet.create({
  seperate: {
    borderWidth: 1,
    height: 17,
    borderColor: colors.GRAY[300],
  },
});

export default Separator;
