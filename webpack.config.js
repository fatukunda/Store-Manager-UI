const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
      index: './src/js/index.js',
      attendants: './src/js/attendants.js',
      products: './src/js/products.js',
      sales: './src/js/sales.js',
      main: './src/style/main.css',
      attendantProfile: './src/js/attendantProfile.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
   },
   plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
        filename: 'admin.html',
        template: './src/admin.html'
    }),
    new HtmlWebpackPlugin({
        filename: 'attendant.html',
        template: './src/attendant.html'
    })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]},
                {
                    test: /\.(png|jp(e*)g|svg)$/,  
                    use: [{
                        loader: 'url-loader',
                        options: { 
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'images/[hash]-[name].[ext]'
                        } 
                    }]
                }
        ]
    }
};