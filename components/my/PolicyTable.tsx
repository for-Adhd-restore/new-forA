import { PrivacyRow } from "@/constants/privacyTable";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

interface PolicyTableProps {
  rows: PrivacyRow[];
}

// 가독성을 위해 가로 스크롤 허용 + 고정 컬럼 폭
const COL_W = { item: 110, feature: 260, retention: 150, destroy: 130 };

export default function PolicyTable({ rows }: PolicyTableProps) {
  return (
    <ScrollView horizontal bounces showsHorizontalScrollIndicator>
      <View>
        {/* 헤더 */}
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.th, { width: COL_W.item }]}>수집 항목</Text>
          <Text style={[styles.th, { width: COL_W.feature }]}>특징</Text>
          <Text style={[styles.th, { width: COL_W.retention }]}>
            수집 보유 기간
          </Text>
          <Text style={[styles.th, { width: COL_W.destroy }]}>파기 방법</Text>
        </View>
        {/* 바디 */}
        {rows.map((r, i) => (
          <View key={i} style={[styles.row, i % 2 === 1 && styles.zebra]}>
            <Text style={[styles.td, { width: COL_W.item }]}>{r.item}</Text>
            <Text style={[styles.td, { width: COL_W.feature }]}>
              {r.feature || "-"}
            </Text>
            <Text style={[styles.td, { width: COL_W.retention }]}>
              {r.retention || "-"}
            </Text>
            <Text style={[styles.td, { width: COL_W.destroy }]}>
              {r.destroy || "-"}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#E5E5E5",
  },
  headerRow: {
    backgroundColor: "#111",
  },
  th: {
    color: "#fff",
    fontWeight: "700",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  td: {
    color: "#111",
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexWrap: "wrap",
    lineHeight: 19,
  },
  zebra: {
    backgroundColor: "#FAFAFA",
  },
});
