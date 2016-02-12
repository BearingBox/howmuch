import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    plugins: [
        babel({
            sourceMap: true,
            exclude: 'node_modules/**',
            babelrc: false,
            presets: ['es2015-rollup']
        }),
        json(),
        nodeResolve()
    ]
};
