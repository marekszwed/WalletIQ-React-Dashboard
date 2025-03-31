import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": "/src/components",
			"@common": "/src/components/common",
			"@constants": "/src/constants",
			"@context": "/src/context",
			"@helpers": "/src/helpers",
			"@locales": "/src/locales",
			"@pages": "/src/pages",
			"@routes": "/src/routes",
			"@Store": "/src/Store",
			"@styles": "/src/styles",
		},
	},
});
