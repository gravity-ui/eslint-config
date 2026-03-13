import {register} from 'node:module';

register('./ts-extension-override.js', import.meta.url);
