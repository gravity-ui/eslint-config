const {OFF, WARNING} = require('./constants');

module.exports = {
    extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
    plugins: ['react', 'react-hooks'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        babelOptions: {
            presets: ['@babel/preset-react'],
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
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
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
    ],
};
