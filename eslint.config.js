import globals from 'globals';

import importConfig from './import-order.js';
import prettierConfig from './prettier.js';

import mainConfig from './index.js';

export default [
    ...mainConfig,
    ...importConfig,
    ...prettierConfig,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
    {
        files: ['*.ts', '*.tsx'],
        rules: {
            '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        },
    },
];
