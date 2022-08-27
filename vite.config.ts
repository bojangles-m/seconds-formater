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
        },
        sourcemap: true,
        minify: true,
        rollupOptions: {
            output: [
                {
                    format: 'es',
                    preserveModules: true,
                    preserveModulesRoot: 'src',
                },
                {
                    format: 'umd',
                },
                {
                    format: 'cjs',
                },
            ],
        },
    },
});
