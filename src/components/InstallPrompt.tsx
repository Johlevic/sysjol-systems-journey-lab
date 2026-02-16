import { useState, useEffect, useRef } from "react";
import { X, Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const location = useLocation();
  const routeChangeCount = useRef(0);

  useEffect(() => {
    routeChangeCount.current += 1;
    checkPromptEligibility();
  }, [location]);

  const checkPromptEligibility = () => {
    // 1. Check if already dismissed or installed
    const dismissed = localStorage.getItem("pwa-install-dismissed");
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)",
    ).matches;

    if (dismissed || isStandalone) {
      setShowPrompt(false);
      return;
    }

    // 2. Check cookie consent
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      // If no decision on cookies yet, don't show PWA prompt
      setShowPrompt(false);
      return;
    }

    // 3. Check navigation count (wait for 3rd page view)
    if (routeChangeCount.current < 3) {
      setShowPrompt(false);
      return;
    }

    // If we have a deferred prompt and all conditions met, show it
    if (deferredPrompt) {
      setShowPrompt(true);
    }
  };

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // We don't show it immediately here, we wait for the route/cookie checks
      // checkPromptEligibility() will be called by the location effect or we can call it here too
      // but deferredPrompt state update will trigger a re-render, so let's use an effect on deferredPrompt
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  // When deferredPrompt is set, re-check eligibility
  useEffect(() => {
    if (deferredPrompt) {
      checkPromptEligibility();
    }
  }, [deferredPrompt]);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    localStorage.setItem("pwa-install-dismissed", "true");
    setShowPrompt(false);
  };

  if (!showPrompt || !deferredPrompt) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] md:hidden animate-in slide-in-from-bottom duration-500">
      <div className="mx-4 mb-4 p-4 rounded-2xl bg-gradient-to-br from-primary/20 via-background/95 to-background/95 backdrop-blur-xl border border-primary/20 shadow-2xl">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-4 pr-8">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
            <Smartphone className="w-6 h-6 text-primary" />
          </div>

          <div className="flex-1 space-y-3">
            <div>
              <h3 className="font-display font-bold text-lg text-foreground">
                Instala SysJoL
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Accede más rápido desde tu pantalla de inicio
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleInstall}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                size="sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Instalar App
              </Button>
              <Button
                onClick={handleDismiss}
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
                size="sm"
              >
                Ahora no
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
