import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "xmldom/lib/dom-parser.js",
  output: {
    file: "dist/xmldom.js",
    format: "cjs",
  },
  plugins: [commonjs()],
};
