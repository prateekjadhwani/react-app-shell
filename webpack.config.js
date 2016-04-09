module.exports = {
    entry : './index.js',
    output : {
        filename : 'bundle.js',
        path : './build'
    },
    module : {
        loaders : [
            {
                test: /\.jsx?/,
                exclude: '/(node_modules|bower_components)/',
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    devtool: 'inline-source-map'
};