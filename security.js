import {ERROR} from './constants.js';

/** @type {import('eslint').Linter.LegacyConfig} */
const securityConfig = {
    plugins: ['security-node'],
    env: {
        node: true,
    },
    rules: {
        'security-node/detect-dangerous-redirects': ERROR,
    },
};

export default securityConfig;
