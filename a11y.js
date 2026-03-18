import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

/** @type {import('eslint').Linter.Config[]} */
const a11yConfig = [
    {
        ...jsxA11yPlugin.flatConfigs.recommended,
        languageOptions: {
            ...jsxA11yPlugin.flatConfigs.recommended.languageOptions,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
];

export default a11yConfig;
