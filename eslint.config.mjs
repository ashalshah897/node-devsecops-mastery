import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error"
        },
        languageOptions: {
            globals: {
                process: "readonly",
                module: "writable",
                require: "readonly",
                describe: "readonly",
                it: "readonly",
                expect: "readonly"
            }
        }
    }
];
