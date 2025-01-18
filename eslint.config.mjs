import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  {
    files: ["packages/**/*.js"],

  },
  {
    ignores: ["**/public/**/*", "**/build/*"],
  },
  {
    rules: {
      "no-undef": "off",
      "no-redeclare": "off",
      "no-case-declarations": "off",
    },
  },
];
