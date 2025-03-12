const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');

const {OFF, WARNING} = require('./constants');

module.exports = [
    react.configs.flat.recommended,
    reactHooks.configs['recommended-latest'],
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
        rules: {
            'react/prop-types': WARNING,
            'react/sort-comp': WARNING,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        files: ['*.ts', '*.tsx'],
        plugins: {
            react,
        },
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
