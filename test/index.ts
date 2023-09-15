/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */

// eslint-disable-next-line import/no-duplicates
import {test} from './file';
// eslint-disable-next-line import/no-duplicates
import {test2} from './file';
import type {test4 as Test4} from './file';
// eslint-disable-next-line import/no-duplicates
import {test3} from './file.js';

import {test4} from './file.js?mod2';
import {test5} from './file?mod';

// eslint-disable-next-line import/no-extraneous-dependencies
import {parse} from 'json5';
// eslint-disable-next-line import/no-extraneous-dependencies
import type {stringify} from 'json5';
