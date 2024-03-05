import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "LoadingProvider",
      fileName: "react-loading-provider",
      formats: ["es", "umd", "cjs"],
    },
  },
  plugins: [react()],
});
