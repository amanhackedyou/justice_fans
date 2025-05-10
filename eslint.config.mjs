import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    "rules": {
      // Disable unused variable warnings
      "@typescript-eslint/no-unused-vars": "off",

      // Disable unsafe function type warnings
      "@typescript-eslint/no-unsafe-function": "off",

      // Disable unused expressions
      "@typescript-eslint/no-unused-expressions": "off",

      // Disable no-unsafe-function warnings
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",

      // Disable warning for img elements
      "@next/next/no-img-element": "off",

      // Disable ts-expect-error requirement
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unsafe-function-type": "off"
    }
  }
];

export default eslintConfig;
