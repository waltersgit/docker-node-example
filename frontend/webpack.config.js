module.exports = {
    entry: './src/assets/js/app.js',
    output: {
        filename: './build/app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel'
            }
        ]
    },
    babel: {
        presets: ['es2015']
    },
    devServer: {
        compress: true,
        disableHostCheck: true
    }
};
