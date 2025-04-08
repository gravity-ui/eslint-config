const {ERROR} = require('./constants');

module.exports = {
    plugins: ['security-node'],
    env: {
        node: true,
    },
    rules: {
        'security-node/detect-dangerous-redirects': ERROR,
    },
};
