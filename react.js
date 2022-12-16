const {OFF, WARNING, ERROR} = require('./constants');

const assetFiles = '*.{svg,png,jpg,jpeg,webp,json}';
const styleFiles = '*.{css,sass,scss,less,styl}';

module.exports = {
    extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
    plugins: ['react', 'react-hooks', 'import'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        babelOptions: {
            presets: ['@babel/preset-react'],
        },
    },
    rules: {
        'react/prop-types': WARNING,
        'react/sort-comp': WARNING,

        // Additional Plugins
        'import/order': [
            ERROR,
            {
                'alphabetize': {
                    order: 'asc'
                },
                'newlines-between': 'always',
                'groups': [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index'
                ],
                'pathGroups': [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before'
                    },
                    {
                        pattern: assetFiles,
                        patternOptions: {
                            dot: true,
                            nocomment: true,
                            matchBase: true
                        },
                        group: 'type',
                        position: 'after'
                    },
                    {
                        pattern: styleFiles,
                        patternOptions: {
                            dot: true,
                            nocomment: true,
                            matchBase: true
                        },
                        group: 'type',
                        position: 'after'
                    }
                ],
                'pathGroupsExcludedImportTypes': [
                    assetFiles,
                    styleFiles,
                    'react'
                ],
                'warnOnUnassignedImports': true
            }
        ]
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    overrides: [{
        files: ['*.ts', '*.tsx'],
        rules: {
            'react/prop-types': OFF,
            'react/sort-comp': [WARNING, {
                'order': [
                    'static-variables',
                    'static-methods',
                    'instance-variables',
                    'lifecycle',
                    'render',
                    'everything-else'
                ]
            }]
        }
    }]
};
