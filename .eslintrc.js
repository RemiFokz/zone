module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    extends: ["eslint:recommended", "plugin:vue/base"],
    plugins: ["vue"],
    rules: {
        "arrow-parens": ["error", "as-needed"],
        "no-unused-vars": 0,
        "no-undef": 0,
        "no-console": 0,
        "no-empty": 0,
        "comma-dangle": ["error", "never"],
        semi: [2, "never"],
        "semi-spacing": "error",
        "space-before-function-paren": [
            "error",
            { anonymous: "never", named: "never", asyncArrow: "always" }
        ]
    }
};
