import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import {OFF, WARNING} from './constants.js';

export default [
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
        files: ['**/*.ts', '**/*.tsx'],
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
