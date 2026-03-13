import type {Linter} from 'eslint';
import globals from 'globals';

import react from './react.js';

const clientConfig: Linter.Config[] = [
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
