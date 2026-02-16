import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import InstallPrompt from "./components/InstallPrompt.tsx";
import CookieConsent from "./components/CookieConsent.tsx";
import { initGA } from "./lib/analytics.ts";
import "./index.css";

// Initialize Google Analytics
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
if (GA_MEASUREMENT_ID) {
  initGA(GA_MEASUREMENT_ID);
}

// Register Service Worker for PWA
if ("serviceWorker" in navigator) {
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
    <InstallPrompt />
    <CookieConsent />
  </>,
);
