const {OFF, WARNING, ERROR} = require('./constants');

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
                        pattern: '*.{svg,png,jpg,jpeg,json}',
                        patternOptions: {
                            dot: true,
                            nocomment: true,
                            matchBase: true
                        },
                        group: 'type',
                        position: 'after'
                    },
                    {
                        pattern: '*.{css,sass,scss,less,styl}',
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
                    '*.{css,scss}',
                    '*.{svg,png,jpg,jpeg,json}',
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
