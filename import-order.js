import {ERROR} from './constants.js';

const assetFiles = '*.{svg,png,jpg,jpeg,webp,json}';
const styleFiles = '*.{css,sass,scss,less,styl}';

export default {
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
    },
};
