const babelParser = require('@babel/eslint-parser');
const eslint = require('@eslint/js');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const importPlugin = require('eslint-plugin-import');
const jsdoc = require('eslint-plugin-jsdoc');
const globals = require('globals');

const {OFF, WARNING, ERROR} = require('./constants');

const baseConfig = [
    eslint.configs.recommended,
    {
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                ecmaVersion: 2019,
                requireConfigFile: false,
            },
            globals: {
                ...globals.es2015,
                ...globals['shared-node-browser'],
            },
        },
        plugins: {
            import: importPlugin,
            jsdoc,
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
            'jsdoc/require-param-description': WARNING,
            'jsdoc/require-returns-description': WARNING,

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
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: typescriptParser,
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
            import: importPlugin,
            jsdoc,
        },
        rules: {
            // TypeScript compiler handles these on its own
            strict: OFF,
            'no-undef': OFF,
            'no-dupe-class-members': OFF,

            // jsdoc
            'jsdoc/require-returns-type': WARNING,
            'jsdoc/require-param-type': WARNING,
            'jsdoc/require-param-description': WARNING,
            'jsdoc/require-returns-description': WARNING,

            // TypeScript-specific extension rules
            'no-array-constructor': OFF,
            'no-loop-func': OFF,
            'no-redeclare': OFF,
            'no-shadow': OFF,
            'no-unused-expressions': OFF,
            'no-unused-vars': OFF,
            'no-use-before-define': OFF,
            'no-useless-constructor': OFF,
            '@typescript-eslint/no-array-constructor': WARNING,
            '@typescript-eslint/no-loop-func': ERROR,
            '@typescript-eslint/no-redeclare': ERROR,
            '@typescript-eslint/no-shadow': WARNING,
            '@typescript-eslint/no-unused-expressions': ERROR,
            '@typescript-eslint/no-unused-vars': [
                ERROR,
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-use-before-define': [WARNING, {functions: false}],
            '@typescript-eslint/no-useless-constructor': ERROR,

            '@typescript-eslint/naming-convention': [
                ERROR,
                {
                    selector: 'typeLike',
                    format: ['PascalCase'],
                    leadingUnderscore: 'forbid',
                },
            ],
            '@typescript-eslint/member-delimiter-style': ERROR,
            '@typescript-eslint/member-ordering': [
                ERROR,
                {
                    default: [
                        'public-static-field',
                        'protected-static-field',
                        'private-static-field',

                        'public-static-method',
                        'protected-static-method',
                        'private-static-method',

                        'public-instance-field',
                        'protected-instance-field',
                        'private-instance-field',

                        'constructor',

                        'public-instance-method',
                        'protected-instance-method',
                        'private-instance-method',
                    ],
                },
            ],
            '@typescript-eslint/explicit-member-accessibility': [
                ERROR,
                {accessibility: 'no-public'},
            ],
            '@typescript-eslint/consistent-type-assertions': ERROR,
            '@typescript-eslint/no-explicit-any': WARNING,
            '@typescript-eslint/no-inferrable-types': ERROR,
            '@typescript-eslint/no-namespace': ERROR,
            '@typescript-eslint/no-non-null-assertion': WARNING,
            '@typescript-eslint/parameter-properties': ERROR,
            '@typescript-eslint/triple-slash-reference': ERROR,
            '@typescript-eslint/prefer-namespace-keyword': ERROR,
            '@typescript-eslint/type-annotation-spacing': [
                ERROR,
                {
                    before: true,
                    after: true,
                    overrides: {
                        colon: {
                            before: false,
                        },
                    },
                },
            ],
        },
    },
    {
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
            },
            'import/resolver': {
                typescript: true,
                node: true,
            },
        },
    },
];

module.exports = baseConfig;
