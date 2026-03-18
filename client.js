import globals from 'globals';

import react from './react.js';

/** @type {import('eslint').Linter.Config[]} */
const clientConfig = [
    ...react,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            sourceType: 'module',
        },
    },
];

export default clientConfig;
