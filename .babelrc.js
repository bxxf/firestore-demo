const modules =
  process.env.BABEL_ENV === "cjs" || process.env.NODE_ENV === "test"
    ? "commonjs"
    : false;

const presets = [["es2015", { loose: true, modules }], "react"];

const plugins = ["transform-flow-strip-types"];

module.exports = { presets, plugins };
