import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";
const { babel } = require("@rollup/plugin-babel");
const packageJson = require("./package.json");
const less = require("less");

const isProd = process.env.NODE_ENV === "production";

const babelOptions = {
  presets: ["@babel/preset-env"],
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
  exclude: "**/node_modules/**"
};

const processLess = function(context, payload) {
  return new Promise((resolve, reject) => {
    less.render(
      {
        file: context
      },
      function(err, result) {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
    less.render(context, {}).then(
      function(output) {
        if (output && output.css) {
          resolve(output.css);
        } else {
          reject({});
        }
      },
      function(err) {
        reject(err);
      }
    );
  });
};

export default {
  input: "packages/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs"
    },
    {
      file: packageJson.module,
      format: "es"
    }
  ],
  plugins: [
    peerDepsExternal({ includeDependencies: !isProd }),
    resolve(),
    commonjs({ sourceMap: !isProd }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: true,
      process: processLess
    }),
    babel(babelOptions),
    json()
  ],
};
