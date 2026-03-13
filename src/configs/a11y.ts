import type {Linter} from 'eslint';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

const a11yConfig: Linter.Config[] = [
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
