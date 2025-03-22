import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": "/src/components",
			"@locales": "/src/locales",
			"@pages": "/src/pages",
			"@routes": "/src/routes",
			"@styles": "/src/styles",
		},
	},
});
