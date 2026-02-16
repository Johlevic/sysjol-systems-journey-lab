import { useState, useEffect } from "react";
import { toast } from "sonner";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export const UpdatePrompt = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [registration, setRegistration] =
    useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    // Check if service workers are supported
    if (!("serviceWorker" in navigator)) {
      return;
    }

    // Register service worker and listen for updates
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => {
        setRegistration(reg);

        // Check for updates every 60 seconds
        setInterval(() => {
          reg.update();
        }, 60000);

        // Listen for new service worker waiting
        reg.addEventListener("updatefound", () => {
          const newWorker = reg.installing;
          if (!newWorker) return;

          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              // New service worker is installed and ready
              setUpdateAvailable(true);
              showUpdateToast();
            }
          });
        });
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });

    // Listen for controller change (when new SW takes over)
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      // Reload the page to load new content
      window.location.reload();
    });
  }, []);

  const showUpdateToast = () => {
    toast(
      <div className="flex items-center gap-3">
        <RefreshCw className="w-5 h-5 text-primary" />
        <div className="flex-1">
          <p className="font-display font-semibold text-sm">
            Nueva versión disponible
          </p>
          <p className="text-xs text-muted-foreground">
            Actualiza para obtener las últimas mejoras
          </p>
        </div>
      </div>,
      {
        duration: Infinity,
        action: {
          label: "Actualizar",
          onClick: handleUpdate,
        },
        className: "bg-card border-primary/20",
      },
    );
  };

  const handleUpdate = () => {
    if (!registration || !registration.waiting) return;

    // Tell the waiting service worker to skip waiting and become active
    registration.waiting.postMessage({ type: "SKIP_WAITING" });
  };

  return null; // This component doesn't render anything, it just manages the toast
};
