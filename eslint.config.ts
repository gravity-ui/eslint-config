import globals from 'globals';

import importConfig from './src/configs/import-order.js';
import prettierConfig from './src/configs/prettier.js';
import mainConfig from './src/index.js';

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
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        },
    },
];
