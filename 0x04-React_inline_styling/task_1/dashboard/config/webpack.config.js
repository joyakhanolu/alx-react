const path = require('path');

module.exports = {
  // APP ENTRY POINT
  entry: './src/index.js',

  // OUTPUT DIRECTORY
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
  },

	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							disable: true,
							bypassOnDebug: true
						},
					},
				],
			},
			{
				test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
			}
		]
	},

  // DEV SERVER ENTRY POINT
  devServer: {
		hot: true,
		compress: true,
		static: path.resolve('./dist'),
		historyApiFallback: true
  },
};
