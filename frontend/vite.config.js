import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // Proxy all requests starting with "/api"
        target: "http://localhost:3000/", // Backend server URL
        // changeOrigin: true,
        // secure: false, // Set to true if using HTTPS
        // rewrite: (path) => path.replace(/^\/api/, ""), // Optional: Remove "/api" prefix
      },
    },
  },
});
