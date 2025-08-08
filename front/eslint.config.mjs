import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginTs from "@typescript-eslint/eslint-plugin"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "@typescript-eslint": pluginTs, // ✅ Usar objeto en vez de string
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "no-explicit-any": "off",
    },
  },
];


export default eslintConfig;
