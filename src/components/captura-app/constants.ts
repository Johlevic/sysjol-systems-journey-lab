/** Public URLs (Vite serves /public at root). Filename has spaces and parens — encode for reliable fetch. */
export const CAPTURA_APP_LOGO_PNG = encodeURI("/logo-app/webcam-redonda (2).png");

export const CAPTURA_APP_ICO = "/logo-app/webcam-redonda-_2_.ico";

export const CAPTURA_APP_VERSION = "0.1.0";

export const CAPTURA_APP_BUNDLE_ID = "com.capturaapp.dev";

export const CAPTURA_APP_SLIDES = [
  {
    src: "/app-capture/grabar-image-app.png",
    alt: "CapturaApp: vista Grabar",
    caption: "Grabar",
  },
  {
    src: "/app-capture/captura-image-app.png",
    alt: "CapturaApp: capturas de pantalla",
    caption: "Captura",
  },
  {
    src: "/app-capture/galeria-image-app.png",
    alt: "CapturaApp: galería",
    caption: "Galería",
  },
  {
    src: "/app-capture/dashboard-image-app.png",
    alt: "CapturaApp: panel y métricas",
    caption: "Dashboard",
  },
  {
    src: "/app-capture/ajustes-image-app.png",
    alt: "CapturaApp: ajustes",
    caption: "Ajustes",
  },
] as const;

/** Repositorio oficial (código, Issues, README). */
export const CAPTURA_APP_REPO_URL = "https://github.com/Johlevic/captura-app";

/**
 * Instalador publicado en la rama `main` (descarga directa del `.exe`).
 * Vista en GitHub: https://github.com/Johlevic/captura-app/blob/main/CapturaApp-0.1.0-Setup.exe
 */
export const CAPTURA_APP_DOWNLOAD_URL =
  "https://github.com/Johlevic/captura-app/raw/main/CapturaApp-0.1.0-Setup.exe";

/**
 * JSON estático en `public/` (misma raíz que el sitio, no bajo `/capturaapp/`).
 * Mantener `version` y `downloadUrl` alineados con las constantes de arriba en cada release.
 */
export const CAPTURA_APP_LATEST_JSON_PATH = "/capturaapp-latest.json";
