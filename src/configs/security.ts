import type {Linter} from 'eslint';

import {ERROR} from '../constants.js';

const securityConfig: Linter.LegacyConfig = {
    plugins: ['security-node'],
    env: {
        node: true,
    },
    rules: {
        'security-node/detect-dangerous-redirects': ERROR,
    },
};

export default securityConfig;
