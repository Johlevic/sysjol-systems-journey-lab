import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  /**
   * Cursor / reenvío de puertos: el navegador usa localhost:8081 pero Vite escucha en 8080.
   * Sin esto, el WebSocket de HMR apunta al puerto equivocado y falla.
   *
   * - Por defecto: HMR cliente en 8081 (túnel típico).
   * - Accedes solo a http://localhost:8080: VITE_HMR_DIRECT=true npm run dev
   * - Otro puerto: VITE_HMR_CLIENT_PORT=5173 npm run dev
   */
  const hmrDirect = process.env.VITE_HMR_DIRECT === "true";
  const hmrClientPortEnv = process.env.VITE_HMR_CLIENT_PORT
    ? Number(process.env.VITE_HMR_CLIENT_PORT)
    : undefined;

  const hmr = hmrDirect
    ? true
    : {
        protocol: "ws" as const,
        host: "localhost",
        port: 8080,
        clientPort: hmrClientPortEnv ?? 8081,
      };

  return {
    server: {
      host: true,
      port: 8080,
      hmr,
    },
    plugins: [react()].filter(Boolean),
    resolve: {
      dedupe: ["react", "react-dom"],
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    optimizeDeps: {
      include: ["react", "react-dom"],
    },
  };
});
