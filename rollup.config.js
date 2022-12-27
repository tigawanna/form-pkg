import peerDepsExternal from "rollup-plugin-peer-deps-external";


import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),

    typescript({
      useTsconfigDeclarationDir: true,
    }),
    postcss(),
    copy({
      targets: [
        {
          src: "src/index.css",
          dest: "build",
          rename: "index.css",
        },
      ],
    }),
  ],
};
