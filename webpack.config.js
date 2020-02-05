module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.bundle.js',
		path: __dirname + '/public/dist'
	},
	mode: 'development',
	module: {
		rules: [{
			test: /\.html$/,
			use: ['html-loader']
		}, {
			test: /\.less$/,
			use: ["style-loader", "css-loader", "less-loader"]
		}]
	}
}