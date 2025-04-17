import globals from 'globals';

import react from './react.js';

export default [
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
