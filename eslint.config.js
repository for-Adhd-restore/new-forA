// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const prettier = require("eslint-config-prettier");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*", ".expo/*", "node_modules/"],
  },
  {
    // ts, js, tsx, jsx에 이 블록 적용
    files: ["**/*.{js,jsx,ts,tsx}"],

    // JavaScript 환경을 설정하는 옵션.
    languageOptions: {},

    // ESLint 규칙 설정. 상세 린팅 규칙
    rules: {},

    // 플러그인 추가
    plugins: {},

    settings: {},
  },
  prettier, //  스타일성 규칙 OFF (Prettier와 충돌 제거)
]);
