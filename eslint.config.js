const globals = require('globals');

const importConfig = require('./import-order.js');
const prettierConfig = require('./prettier.js');

const mainConfig = require('./index.js');

module.exports = [
    ...mainConfig,
    importConfig,
    prettierConfig,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
];
