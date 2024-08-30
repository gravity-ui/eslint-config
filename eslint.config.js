// .eslintrc
// {
//     "extends": ["./index.js",  "./import-order.js", "./prettier.js"],
//     "root": true,
//     "env": {
//         "node": true
//     }
// }
const globals = require('globals');

const index = require('./index');
const importOrder = require('./import-order');
const prettier = require('./prettier');
// import path from 'node:path';
// import {fileURLToPath} from 'node:url';
// import js from '@eslint/js';
// import {FlatCompat} from '@eslint/eslintrc';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//     baseDirectory: __dirname,
//     recommendedConfig: js.configs.recommended,
//     allConfig: js.configs.all,
// });

module.exports = [
    // ...compat.extends('./index.js', './import-order.js', './prettier.js'),
    ...index,
    importOrder,
    ...prettier,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
];
