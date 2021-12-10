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
	rules: {
		'react/jsx-filename-extension': [1, {extensions: ['.tsx', '.jsx']}],
		'import/extensions': [0],
		'import/no-unresolved': [0],
		'react/jsx-no-constructed-context-values': [0],
	},
};
