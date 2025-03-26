import client from '../../client.js';
import importConfig from '../../import-order.js';
import mainConfig from '../../index.js';
import prettierConfig from '../../prettier.js';

export default [
    ...mainConfig,
    ...client,
    importConfig,
    prettierConfig,
    {
        rules: {
            'react-hooks/exhaustive-deps': 'error',
        },
    },
];
