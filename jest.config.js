
module.exports = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts', 'vue'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  "transform": {
    "\\.[jt]sx?$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ],
};
