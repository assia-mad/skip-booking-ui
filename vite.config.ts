import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@types": "/src/types",
      "@utils": "/src/utils",
      "@api": "/src/api",
      "@features": "/src/features",
      "@services": "/src/services",
      "@assets": "/src/assets",
    },
  },
});
