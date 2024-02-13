// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/gcms.js',
    output: {
        path: path.resolve(''),
        filename: 'gcms.js',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    },
                },
            },
            {
                test: /\.css$/, // Add this
                use: ['style-loader', 'css-loader'], // And this
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    externals: {
        // react: 'React',
        // 'react-dom': 'ReactDOM',
        // 'react-select': 'Select',
        // 'highcharts/highstock': 'Highcharts',
        // 'highcharts-react-official': 'HighchartsReact',
        // 'react-tooltip': 'Tooltip',
        // 'react-icons/ai': 'AiOutlineInfoCircle',
        // 'react-icons/ai': 'AiOutlineShareAlt',
        // 'axios': 'axios',
    },
};
