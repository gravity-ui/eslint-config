import type {Linter} from 'eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import {OFF, WARNING} from '../constants.js';

const reactConfig: Linter.Config[] = [
    reactPlugin.configs.flat.recommended,
    reactHooksPlugin.configs['recommended-latest'],
    {
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                babelOptions: {
                    presets: ['@babel/preset-react'],
                },
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx', '**/*.mtsx', '**/*.ctsx'],
        rules: {
            'react/prop-types': OFF,
            'react/sort-comp': [
                WARNING,
                {
                    order: [
                        'static-variables',
                        'static-methods',
                        'instance-variables',
                        'lifecycle',
                        'render',
                        'everything-else',
                    ],
                },
            ],
        },
    },
];

export default reactConfig;
