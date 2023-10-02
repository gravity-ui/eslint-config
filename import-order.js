const {ERROR} = require('./constants');

const assetFiles = '*.{svg,png,jpg,jpeg,webp,json}';
const styleFiles = '*.{css,sass,scss,less,styl}';

module.exports = {
    rules: {
        'import/order': [
            ERROR,
            {
                alphabetize: {
                    order: 'asc',
                },
                'newlines-between': 'always',
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: assetFiles,
                        patternOptions: {
                            dot: true,
                            nocomment: true,
                            matchBase: true,
                        },
                        group: 'type',
                        position: 'after',
                    },
                    {
                        pattern: styleFiles,
                        patternOptions: {
                            dot: true,
                            nocomment: true,
                            matchBase: true,
                        },
                        group: 'type',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: [assetFiles, styleFiles, 'react'],
                warnOnUnassignedImports: true,
            },
        ],
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                fixStyle: 'inline-type-imports',
                disallowTypeAnnotations: false,
            },
        ],
        '@typescript-eslint/no-import-type-side-effects': 'error',
    },
};
