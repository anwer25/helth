module.exports = {
	env: {
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'prettier',
		'@react-native-community',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {},
};
