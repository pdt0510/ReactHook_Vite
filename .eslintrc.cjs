module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
	],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': 'warn',
<<<<<<< HEAD
		'react-hooks/rules-of-hooks': 'ignore', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
		'no-unused-vars': 'warn',
		// 'react/prop-types': 'ignore',
=======
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
		'no-unused-vars': 'warn',
		'react/prop-types': 'ignore',
>>>>>>> 77f265cfc4b25279d3eb1a3b21c55895fe186407
	},
};
