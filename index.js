import init from 'previewed';
import pdf from '@previewed/plugin-pdf';
import watch from '@previewed/plugin-watch';
import { resolve } from 'node:path';

init({
    dir: resolve('dist'),
    plugins: [pdf(), watch({ filetypes: ['pdf'] })],
});
