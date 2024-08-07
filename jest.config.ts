import nextJest from "next/jest.js";

const createJestConfig = nextJest({
	dir: "./",
});

const customJestConfig = {
	testEnvironment: "jest-environment-jsdom",
	moduleNameMapper: {
		"^@/components/(.*)$": "<rootDir>/components/$1",
		"^@/utils/(.*)$": "<rootDir>/utils/$1",
		"^@/context/(.*)$": "<rootDir>/context/$1",
		"^@/hooks/(.*)$": "<rootDir>/hooks/$1",
		"^@/styles/(.*)$": "<rootDir>/styles/$1",
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default createJestConfig(customJestConfig);
