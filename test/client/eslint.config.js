import a11yConfig from '../../a11y.js';
import client from '../../client.js';
import importConfig from '../../import-order.js';
import mainConfig from '../../index.js';
import prettierConfig from '../../prettier.js';

export default [
    ...mainConfig,
    ...client,
    a11yConfig,
    importConfig,
    prettierConfig,
    {
        rules: {
            'react-hooks/exhaustive-deps': 'error',
        },
    },
];
