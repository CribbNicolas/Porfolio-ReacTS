import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/(shared)/components"),
      "@services": path.resolve(__dirname, "./src/(shared)/services"),
      "@types": path.resolve(__dirname, "./src/(shared)/types"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});

