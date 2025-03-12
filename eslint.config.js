//const eslintrc = require('@eslint/eslintrc');
//const js = require('@eslint/js');
const globals = require('globals');

const importConfig = require('./import-order.js');
const prettierConfig = require('./prettier.js');

const mainConfig = require('./index.js');

/*
const compat = new eslintrc.FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});
*/

module.exports = [
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
];
