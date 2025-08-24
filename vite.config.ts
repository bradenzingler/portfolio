import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), cloudflare()],
	build: {
		target: "es2020",
		minify: "terser",
		sourcemap: false,
		reportCompressedSize: true,
		terserOptions: {
            compress: true,
            mangle: true,
		},
	},
});
