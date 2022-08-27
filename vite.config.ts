/* (c) Copyright Bojan Mazej, all rights reserved. */

import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [dts({ insertTypesEntry: true })],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            fileName: (format: string) => `[name].${format}.js`,
            name: 'seconds-formatter',
            formats: ['es', 'umd', 'cjs'],
        },
        sourcemap: true,
        minify: true,
    },
});
