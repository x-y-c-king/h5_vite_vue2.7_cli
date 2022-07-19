// module.exports = {
//   plugins: {
//     autoprefixer: {},
//   },
// }

module.exports = ({ file }) => ({
	parser: file.extname === '.sss' ? 'sugarss' : false,
	ident: 'postcss',
	plugins: {
		autoprefixer: {
			browsers: ['Android >= 4.0', 'iOS >= 8']
		},
		precss: {}
	}
});