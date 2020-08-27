module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    //별도 설정을 해주지 않을 경우 texts 폴더 밑에 테스트 파일을 생성 해야함
    '<rootDir>/src/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
};
