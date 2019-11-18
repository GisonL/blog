const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isPro = process.env.NODE_ENV === 'production'

// 本地开发服务器配置
const devServer = {
  open: false, // 自动打开页面
  hot: true, // 开启模块热替换
  // TODO: 服务器获取资源的路径
  // contentBase: path.join(__dirname, './src'),
  port: 9000 //端口号
  // compress: true
}

const config = {
  context: path.resolve(__dirname, 'src'), // 指定从哪个目录查找entry配置的入口文件，为''表示默认从当前目录查找，可以不添加这个参数
  // entry: './main.js', // 应用程序的起点入口，可以为array或object，表示多入口，最终会打包出对应数量的chunk
  entry: {
    // 可以为array或object，表示多入口，最终会打包出对应数量的chunk
    bundle: './app.jsx'
  },
  output: {
    // filename: 'bundle.js', // 打包后输出的文件名，多入口可以试array，用模板字符串区分不同chunk
    filename: '[name].js', // 多入口可以试array，用模板字符串区分不同chunk
    path: path.join(__dirname, './dist/'), // 打包文件的输出路径
    chunkFilename: '[name].min.js' // 没有包含在入口文件的依赖，如动态引入的依赖的输出名
    // publicPath: isPro //
    //   ? '/js/'
    //   : '/' // TODO: ？？？
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx/,
        exclude: /^node_modules$/,
        use: ['babel-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules|antd\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './static/index.html')
    })
  ],
  devServer,
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@common': path.resolve(__dirname, 'src/common'),
      '@commonStyles': path.resolve(__dirname, 'src/common/styles'),
      '@Gnui': path.resolve(__dirname, 'src/common/@Gnui'),
      '@views': path.resolve(__dirname, 'src/views')
    }
  }
  // watch: true,
}

if (isPro) config.plugins.push(new CleanWebpackPlugin()) // 本地开发环境不使用清除旧打包资源

module.exports = config
