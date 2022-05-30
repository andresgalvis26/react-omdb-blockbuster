const HTMLWebpackPlugin = require('html-webpack-plugin');
const DotEnv = require('dotenv-webpack');

const htmlPlugin = new HTMLWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
})

const ESLintPlugin = require('eslint-webpack-plugin');

const myEslintOptions = {
  extensions: [`js`, `jsx`, `ts`],
  exclude: [`node_modules`],
};

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }  
        ]
    },
    plugins: [htmlPlugin, new ESLintPlugin(myEslintOptions), new DotEnv()]
}