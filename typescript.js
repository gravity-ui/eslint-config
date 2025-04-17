import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsdocPlugin from 'eslint-plugin-jsdoc';

import {ERROR, OFF, WARNING} from './constants.js';

export default [
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: typescriptParser,
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
            import: importPlugin,
            jsdoc: jsdocPlugin,
        },
        rules: {
            // TypeScript compiler handles these on its own
            strict: OFF,
            'no-undef': OFF,
            'no-dupe-class-members': OFF,

            // jsdoc
            'jsdoc/require-jsdoc': OFF,
            'jsdoc/require-returns-type': OFF,
            'jsdoc/require-param-type': OFF,
            'jsdoc/require-param-description': OFF,
            'jsdoc/require-returns-description': OFF,

            // TypeScript-specific extension rules
            'no-array-constructor': OFF,
            'no-loop-func': OFF,
            'no-redeclare': OFF,
            'no-shadow': OFF,
            'no-unused-expressions': OFF,
            'no-unused-vars': OFF,
            'no-use-before-define': OFF,
            'no-useless-constructor': OFF,
            '@typescript-eslint/no-array-constructor': WARNING,
            '@typescript-eslint/no-loop-func': ERROR,
            '@typescript-eslint/no-redeclare': ERROR,
            '@typescript-eslint/no-shadow': WARNING,
            '@typescript-eslint/no-unused-expressions': ERROR,
            '@typescript-eslint/no-unused-vars': [
                ERROR,
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-use-before-define': [WARNING, {functions: false}],
            '@typescript-eslint/no-useless-constructor': ERROR,

            '@typescript-eslint/naming-convention': [
                ERROR,
                {
                    selector: 'typeLike',
                    format: ['PascalCase'],
                    leadingUnderscore: 'forbid',
                },
            ],
            '@typescript-eslint/member-delimiter-style': ERROR,
            '@typescript-eslint/member-ordering': [
                ERROR,
                {
                    default: [
                        'public-static-field',
                        'protected-static-field',
                        'private-static-field',

                        'public-static-method',
                        'protected-static-method',
                        'private-static-method',

                        'public-instance-field',
                        'protected-instance-field',
                        'private-instance-field',

                        'constructor',

                        'public-instance-method',
                        'protected-instance-method',
                        'private-instance-method',
                    ],
                },
            ],
            '@typescript-eslint/explicit-member-accessibility': [
                ERROR,
                {accessibility: 'no-public'},
            ],
            '@typescript-eslint/consistent-type-assertions': ERROR,
            '@typescript-eslint/no-explicit-any': WARNING,
            '@typescript-eslint/no-inferrable-types': ERROR,
            '@typescript-eslint/no-namespace': ERROR,
            '@typescript-eslint/no-non-null-assertion': WARNING,
            '@typescript-eslint/parameter-properties': ERROR,
            '@typescript-eslint/triple-slash-reference': ERROR,
            '@typescript-eslint/prefer-namespace-keyword': ERROR,
            '@typescript-eslint/type-annotation-spacing': [
                ERROR,
                {
                    before: true,
                    after: true,
                    overrides: {
                        colon: {
                            before: false,
                        },
                    },
                },
            ],
        },
    },
    {
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
            },
            'import/resolver': {
                typescript: true,
                node: true,
            },
        },
    },
];
