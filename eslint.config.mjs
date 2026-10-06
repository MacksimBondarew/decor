import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,

    globalIgnores([".next/**", "out/**", "build/**", "coverage/**", "next-env.d.ts"]),
    {
        plugins: {
            "simple-import-sort": simpleImportSort,
            "unused-imports": unusedImports,
        },
        rules: {
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            "unused-imports/no-unused-imports": "error",
            "@typescript-eslint/no-unused-vars": "off",
            "unused-imports/no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    varsIgnorePattern: "^_",
                    args: "after-used",
                    argsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],
            eqeqeq: ["error", "always", { null: "ignore" }],
            "prefer-const": "error",
            "no-var": "error",
            "object-shorthand": "error",
            "prefer-template": "warn",
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-nested-ternary": "warn",
            "react/self-closing-comp": "error",
            "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
            "react/jsx-boolean-value": ["error", "never"],
            "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
            "react/function-component-definition": [
                "warn",
                { namedComponents: "function-declaration", unnamedComponents: "arrow-function" },
            ],
            "react-hooks/exhaustive-deps": "error",
        },
    },
    {
        files: ["**/*.{ts,tsx,mts,cts}"],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/no-misused-promises": [
                "error",
                { checksVoidReturn: { attributes: false } },
            ],
            "@typescript-eslint/await-thenable": "error",
            "@typescript-eslint/require-await": "warn",
            "@typescript-eslint/consistent-type-imports": [
                "error",
                { prefer: "type-imports", fixStyle: "inline-type-imports" },
            ],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-non-null-assertion": "warn",
            "@typescript-eslint/prefer-nullish-coalescing": "warn",
            "@typescript-eslint/prefer-optional-chain": "error",
            "@typescript-eslint/no-unnecessary-condition": "warn",
            "@typescript-eslint/switch-exhaustiveness-check": "error",
        },
    },
    {
        files: ["**/*.{js,mjs,cjs}"],
        rules: {
            "@typescript-eslint/no-require-imports": "off",
        },
    },
    prettier,
]);

export default eslintConfig;