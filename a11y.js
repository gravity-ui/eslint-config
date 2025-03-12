const jsxA11y = require('eslint-plugin-jsx-a11y');

module.exports = {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    plugins: {
        'jsx-a11y': jsxA11y,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
};
