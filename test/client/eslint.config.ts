import a11yConfig from '../../src/configs/a11y.js';
import client from '../../src/configs/client.js';
import importConfig from '../../src/configs/import-order.js';
import prettierConfig from '../../src/configs/prettier.js';
import mainConfig from '../../src/index.js';

export default [
    ...mainConfig,
    ...client,
    ...a11yConfig,
    ...importConfig,
    ...prettierConfig,
    {
        rules: {
            'react-hooks/exhaustive-deps': 'error',
        },
    },
];
