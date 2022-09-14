import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    roots: ['<rootDir>/'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/tests/.*|(\\.|/)(tests|spec))\\.[jt]sx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    verbose: true
}

export default config