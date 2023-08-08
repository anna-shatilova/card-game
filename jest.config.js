/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '\\.css$': 'jest-transform-css',
    },
    transformIgnorePatterns: [`/node_modules/`],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
    },
}
