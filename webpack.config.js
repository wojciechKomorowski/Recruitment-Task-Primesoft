const path = require("path");
module.exports = {
    entry: "./src/js/app.js",
    output: { path: path.resolve("dist"), filename: "./js/out.js" },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    watch: true,
    module: {
        loaders: [ 
            {
                test: /\.js$/, exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015'] }
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader', 'postcss-loader']
            }  
        ] 
    }
}