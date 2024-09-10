import globals from "globals";
import tseslint from "typescript-eslint";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
];

// export default [
//   {
//       rules: {
//           "no-unused-vars": "error",
//           "no-undef": "warn"
//       }
//   }
// ];

// import js from "@eslint/js";

// export default [
//     js.configs.recommended,

//     {
//         rules: {
//             "no-unused-vars": "warn",
//             "no-undef": "warn"
//         }
//     }
// ];