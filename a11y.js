import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

export default {
    ...jsxA11yPlugin.flatConfigs.recommended,
    languageOptions: {
        ...jsxA11yPlugin.flatConfigs.recommended.languageOptions,
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },
};
