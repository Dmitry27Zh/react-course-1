let path = require('path')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')

let conf = {
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: '/dist/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '.'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { modules: { localIdentName: '[local]__[sha1:hash:hex:7]' } } },
        ],
      },
      {
        test: /^((?!\.module).)*css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}

module.exports = (env, options) => {
  let isProd = options.mode === 'production'
  conf.devtool = isProd ? false : 'eval-cheap-module-source-map'
  return conf
}
