import { useState, useEffect } from "react";
import { Cookie, X, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after 1 second
      setTimeout(() => setShowBanner(true), 1000);
    } else if (consent === "accepted") {
      // Initialize Google Analytics if consent was given
      initializeAnalytics();
    }
  }, []);

  const initializeAnalytics = () => {
    // This function will be called when user accepts cookies
    // Google Analytics will be initialized here
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted");
    initializeAnalytics();
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    if (analyticsEnabled) {
      localStorage.setItem("cookie-consent", "accepted");
      initializeAnalytics();
    } else {
      localStorage.setItem("cookie-consent", "declined");
    }
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[250] p-4 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-background/98 via-background/95 to-primary/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-6">
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>

          <div className="space-y-5 pr-8">
            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Configuración de Cookies
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Elige qué cookies deseas aceptar para mejorar tu experiencia
                </p>
              </div>
            </div>

            {/* Cookie Categories */}
            <div className="space-y-3">
              {/* Essential Cookies */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-background/40 border border-white/5">
                <Shield className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">
                      Cookies Esenciales
                    </h4>
                    <span className="text-xs text-green-500 font-medium px-2 py-1 rounded-full bg-green-500/10">
                      Siempre activas
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Necesarias para el funcionamiento básico del sitio (sesión,
                    preferencias, seguridad)
                  </p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-background/40 border border-white/5">
                <BarChart3 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">
                      Cookies de Análisis
                    </h4>
                    <Switch
                      checked={analyticsEnabled}
                      onCheckedChange={setAnalyticsEnabled}
                      className="data-[state=checked]:bg-primary"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Nos ayudan a entender cómo usas el sitio para mejorar tu
                    experiencia (Google Analytics)
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Policy Link */}
            <p className="text-xs text-muted-foreground text-center">
              Para más información, consulta nuestra{" "}
              <a
                href="/privacy-policy"
                className="text-primary hover:underline font-medium"
              >
                Política de Privacidad
              </a>
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAcceptAll}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              >
                Aceptar todas
              </Button>
              <Button
                onClick={handleSavePreferences}
                variant="outline"
                className="flex-1 border-white/10 hover:bg-white/5 font-medium"
              >
                Guardar preferencias
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
