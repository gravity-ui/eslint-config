const globals = require('globals');

const react = require('./react');

module.exports = [
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
