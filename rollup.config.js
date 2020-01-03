import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default [
    // ESM build to be used with webpack/rollup.
    {
        input: 'src/index.js',
        output: {
            format: 'esm',
            file: pkg.module
        },
        plugins: [
            resolve(),
            commonjs(),
            babel({
                exclude: "node_modules/**",
                "presets": [
                    ["@babel/preset-env", {
                        "targets": "> 0.25%, not dead, ie >= 10"
                    }]
                ]
            }),
        ],
        external: ['vue', 'cookie', 'dotprop']
    },
    {
        input: 'src/index.js',
        output: {
            format: 'cjs',
            file: pkg.main
        },
        plugins: [
            resolve(),
            commonjs(),
            babel({
                exclude: "node_modules/**",
                "presets": [
                    ["@babel/preset-env", {
                        "targets": "> 0.25%, not dead, ie >= 10"
                    }]
                ]
            }),
        ],
        external: ['vue', 'cookie', 'dotprop']
    },
]
