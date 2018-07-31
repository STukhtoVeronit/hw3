const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/scripts/initialize.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        enforce: "pre",
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: "eslint-loader",
                    },
                    {
                        loader: "babel-loader",
                        exclude: /node_modules/,
                        options: {
                            "presets": ["flow"]
                        }
                    }
                ]
            }
        ]
    }
}