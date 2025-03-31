module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Detect open redirect',
        },
        fixable: null,
    },
    create(context) {
        const redirectParents = ['res', 'response'];
        return {
            CallExpression: function (node) {
                if (
                    redirectParents.includes(node.callee?.object?.name) &&
                    node.callee?.property?.name === 'redirect'
                ) {
                    context.report({
                        node,
                        message: "Open redirect detected. Make sure it's safe",
                    });
                }
            },
        };
    },
};
