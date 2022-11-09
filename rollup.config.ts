import { defineConfig } from "rollup";

import json from "@rollup/plugin-json";
import run from "@rollup/plugin-run";

import { terser } from "rollup-plugin-terser";
import tsConfigPaths from "rollup-plugin-ts-paths";
import typescript from "rollup-plugin-typescript2";

const dev = process.env.ROLLUP_WATCH === "true";

export default defineConfig({
	input: "src/index.ts",
	output: {
		dir: "dist",
		format: "cjs"
	},
	external: [],
	plugins: [dev && run(), json(), typescript(), tsConfigPaths(), terser()]
});
