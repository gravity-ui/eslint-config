const {WARNING, ERROR} = require('./constants');

module.exports = {
    plugins: ['security'],
    env: {
        node: true,
    },
    rules: {
        'global-require': WARNING,
        'security/detect-buffer-noassert': ERROR,
        'security/detect-child-process': ERROR,
        'security/detect-disable-mustache-escape': ERROR,
        'security/detect-eval-with-expression': ERROR,
        'security/detect-new-buffer': ERROR,
        'security/detect-no-csrf-before-method-override': ERROR,
        'security/detect-non-literal-regexp': ERROR,
        'security/detect-non-literal-require': ERROR,
        'security/detect-possible-timing-attacks': ERROR,
        'security/detect-pseudoRandomBytes': ERROR,
        'security/detect-unsafe-regex': ERROR,
    },
};
