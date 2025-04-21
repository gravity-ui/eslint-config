import babelParser from '@babel/eslint-parser';
import eslintPlugin from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import globals from 'globals';

import {ERROR, OFF, WARNING} from './constants.js';

export default [
    eslintPlugin.configs.recommended,
    {
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                ecmaVersion: 2022,
                requireConfigFile: false,
            },
            globals: {
                ...globals.es2017,
                ...globals['shared-node-browser'],
            },
        },
        plugins: {
            import: importPlugin,
            jsdoc: jsdocPlugin,
        },
        settings: {
            'import/resolver': {
                node: true,
            },
        },
        rules: {
            // Possible Errors
            'no-empty': OFF, // eslint:recommended

            // jsdoc
            'jsdoc/require-jsdoc': OFF,
            'jsdoc/require-param-description': OFF,
            'jsdoc/require-returns-description': OFF,

            // Best Practices
            'array-callback-return': ERROR,
            'block-scoped-var': WARNING,
            complexity: WARNING,
            'consistent-return': WARNING,
            curly: ERROR,
            'dot-location': [ERROR, 'property'],
            eqeqeq: [WARNING, 'always'],
            'guard-for-in': ERROR,
            'no-caller': ERROR,
            'no-console': [ERROR, {allow: ['info', 'warn', 'error']}],
            'no-div-regex': WARNING,
            'no-eq-null': ERROR,
            'no-eval': WARNING,
            'no-extend-native': ERROR,
            'no-extra-bind': WARNING,
            'no-extra-label': ERROR,
            'no-floating-decimal': ERROR,
            'no-global-assign': WARNING, // eslint:recommended
            'no-implicit-coercion': WARNING,
            'no-implicit-globals': WARNING,
            'no-implied-eval': WARNING,
            'no-iterator': ERROR,
            'no-labels': ERROR,
            'no-loop-func': ERROR,
            'no-new': ERROR,
            'no-new-func': WARNING,
            'no-new-wrappers': ERROR,
            'no-octal-escape': ERROR,
            'no-param-reassign': [WARNING, {props: true}],
            'no-proto': ERROR,
            'no-return-assign': [ERROR, 'always'],
            'no-script-url': ERROR,
            'no-self-compare': ERROR,
            'no-sequences': ERROR,
            'no-throw-literal': WARNING,
            'no-unmodified-loop-condition': ERROR,
            'no-unused-expressions': ERROR,
            'no-useless-call': ERROR,
            'no-useless-concat': ERROR,
            'no-void': ERROR,
            'no-with': ERROR,
            radix: WARNING,
            'wrap-iife': [ERROR, 'inside'],

            // Variables
            'no-label-var': ERROR,
            'no-shadow': WARNING,
            'no-shadow-restricted-names': ERROR,
            'no-undef-init': ERROR,
            'no-use-before-define': [WARNING, {functions: false}],

            // Node.js and CommonJS
            'callback-return': WARNING,
            'handle-callback-err': WARNING,
            'no-new-require': ERROR,
            'no-path-concat': WARNING,

            // Stylistic Issues
            camelcase: [ERROR, {properties: 'never'}],
            'comma-style': [ERROR, 'last'],
            'max-depth': [WARNING, {maximum: 5}],
            'new-cap': ERROR,
            'new-parens': ERROR,
            'no-array-constructor': WARNING,
            'no-bitwise': ERROR,
            'no-lonely-if': WARNING,
            'no-negated-condition': WARNING,
            'no-nested-ternary': WARNING,
            'no-new-object': WARNING,
            'no-restricted-syntax': [ERROR, 'WithStatement'],
            'no-unneeded-ternary': ERROR,
            'sort-imports': [
                ERROR,
                {
                    ignoreDeclarationSort: true,
                },
            ],

            // ECMAStrict 6
            'no-useless-constructor': ERROR,
            'no-var': ERROR,
            'prefer-arrow-callback': [WARNING, {allowNamedFunctions: true}],
            'prefer-const': ERROR,
            'prefer-rest-params': ERROR,
            'prefer-spread': ERROR,
            'require-atomic-updates': OFF, // eslint:recommended
            'require-yield': WARNING, // eslint:recommended

            // Import plugin
            'import/no-duplicates': [ERROR, {considerQueryString: true}],
            'import/no-extraneous-dependencies': [ERROR, {includeTypes: true}],
        },
    },
];
