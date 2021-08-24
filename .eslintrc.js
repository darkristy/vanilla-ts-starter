module.exports = {
	extends: ["darkristy"],
	rules: {
		"import/no-extraneous-dependencies": 0,
		indent: 0,
		"react/destructuring-assignment": 0,
		"class-methods-use-this": 0,
		"lines-between-class-members": 0,
		"no-restricted-globals": 0,
	},
	settings: {
		react: {
			version: "detect",
		},
		"import/parsers": {
			[require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
		},
		"import/resolver": {
			[require.resolve("eslint-import-resolver-node")]: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
			typescript: {},
		},
	},
};
