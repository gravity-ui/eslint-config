const {ERROR} = require('./constants');

module.exports = {
    plugins: ['code-security'],
    env: {
        node: true,
    },
    rules: {
        'code-security/no-open-redirect': ERROR,
    },
};
