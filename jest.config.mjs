
// jest.config.mjs
import nextJest from 'next/jest.js'

//jest.mock('next/router', () => require('next-router-mock'));


const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  //setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^@/components/(.*)$": "<rootDir>/src/components/$1",

    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/services/(.*)$": "<rootDir>/src/services/$1",
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)

 