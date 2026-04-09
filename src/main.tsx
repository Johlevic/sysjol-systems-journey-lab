import "./index.css";

/**
 * En desarrollo, el Service Worker y Cache API pueden servir HTML/JS antiguos
 * mezclados con Vite → dos copias de React ("Invalid hook call") y pantalla en blanco.
 * Limpia SW + cachés ANTES de importar React o montar la app.
 */
async function clearDevStaleAssets(): Promise<void> {
  if (!import.meta.env.DEV) return;
  try {
    if ("serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.unregister()));
    }
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    }
  } catch (e) {
    console.warn("[SysJoL dev] Limpieza SW/caché:", e);
  }
}

async function bootstrap(): Promise<void> {
  await clearDevStaleAssets();

  const [{ createRoot }, { default: App }, { default: CookieConsent }, { initGA }] =
    await Promise.all([
      import("react-dom/client"),
      import("./App.tsx"),
      import("./components/CookieConsent.tsx"),
      import("./lib/analytics.ts"),
    ]);

  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (GA_MEASUREMENT_ID) {
    initGA(GA_MEASUREMENT_ID);
  }

  if (import.meta.env.PROD && "serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }

  createRoot(document.getElementById("root")!).render(
    <>
      <App />
      <CookieConsent />
    </>,
  );
}

void bootstrap().catch((err) => {
  console.error("[SysJoL] Error al iniciar la app:", err);
});
