const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode:'development',

  entry:fs.readdirSync(__dirname).reduce((entries,dir)=>{
    // 将路径片段使用特定的分隔符（window：\）连接起来形成路径，并规范化生成的路径。若任意一个路径片段类型错误，会报错。
    const fullDir = path.join(__dirname,dir); 

    // 判断是否是文件夹
    if(fs.statSync(fullDir).isDirectory()){
      const entry = path.join(fullDir,'app.ts');
      
      // 判定文件是否存在
      if(fs.existsSync(entry)){
        // 热更新文件
        entries[dir] = ['webpack-hot-middleware/client', entry];
      }
    }
    console.log('entries',entries)
    return entries;
  },{}),

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader'
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            }
          }
        ]
      },
      {
        test: /\.css?$/,
        use: [
          'style-loader', 'css-loader'
        ]
      }
    ]
  },
  resolve:{
    extensions:['.ts','.tsx','.js']
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}