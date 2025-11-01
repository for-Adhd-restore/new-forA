// 서버에서 주는 타임스탬프 변환 유틸 함수
export function unixToUTCString(t: number) {
  const sec = Number(t);
  const d = new Date(String(sec).length === 10 ? sec * 1000 : sec);
  return d.toISOString().slice(0, 19).replace("T", " ");
  // "YYYY-MM-DD HH:mm:ss" (UTC)
}
