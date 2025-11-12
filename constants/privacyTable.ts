export type PrivacyRow = {
  item: string; // 수집 항목
  feature: string; // 특징
  retention: string; // 수집 보유 기간
  destroy: string; // 파기 방법
};

export const PRIVACY_ROWS: PrivacyRow[] = [
  {
    item: "이름",
    feature: "실명 확인 없음",
    retention: "탈퇴 시 삭제",
    destroy: "빈 문자열로 초기화",
  },
  {
    item: "생년월일",
    feature: "검증 없음",
    retention: "탈퇴 시 삭제",
    destroy: "1970년 1월 1일로 초기화",
  },
  {
    item: "성별",
    feature: "검증 없음",
    retention: "탈퇴 시 삭제",
    destroy: "알 수 없음(unknown)으로 초기화",
  },
  {
    item: "이메일",
    feature: "이메일 회원가입으로 인증 번호를 받아옴.",
    retention: "탈퇴 시 삭제",
    destroy: "삭제",
  },
  {
    item: "ADHD 타입",
    feature:
      "’본인’이 ADHD 의심이 되거나 앓고 있는 경우/ ‘자녀’가 ADHD 의심이 되거나 앓고 있는 경우/ ‘주변’에서 ADHD를 앓고 있는 경우 중 한가지 선택",
    retention: "유지 (포에이 앱 사용자의 ADHD타입 비율을 추적하기 위함.)",
    destroy: "-",
  },
  {
    item: "소셜 로그인 정보",
    feature:
      "제공자 타입(Naver, Google, Apple), 제공자 식별 ID(ex. 네이버 유저 ID)",
    retention: "탈퇴 시 삭제",
    destroy: "삭제",
  },
  {
    item: "이용약관 동의 여부",
    feature: "",
    retention: "탈퇴 시 삭제",
    destroy: "삭제",
  },
  {
    item: "푸시알림 동의 여부",
    feature: "",
    retention: "탈퇴 시 삭제",
    destroy: "삭제",
  },
  {
    item: "디바이스 정보",
    feature: "모델명, 디바이스 ID, 디바이스 토큰, OS타입, OS버전 정보",
    retention: "탈퇴 시 삭제",
    destroy: "삭제",
  },
  {
    item: "서비스 이용기록",
    feature: "IP 주소, 로그인 시간 및 서비스 이용 기록",
    retention: "탈퇴 30일 후 삭제",
    destroy: "삭제",
  },
  {
    item: "위도, 경도, 도로명 주소",
    feature: "앱 사용 중 일시적으로 수집, 서버 저장 없음",
    retention: "앱 종료 시 즉시 삭제",
    destroy: "삭제",
  },
];
