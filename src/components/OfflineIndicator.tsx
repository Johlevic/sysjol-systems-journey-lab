import { useState, useEffect } from "react";
import { WifiOff, Wifi } from "lucide-react";

export const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowReconnected(true);
      // Hide "reconnected" message after 3 seconds
      setTimeout(() => setShowReconnected(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowReconnected(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Don't render anything if online and not showing reconnected message
  if (isOnline && !showReconnected) return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[50000] px-4 py-3 text-center font-body font-medium text-sm transition-all duration-300 ${
        isOnline
          ? "bg-green-600 text-white animate-in slide-in-from-top"
          : "bg-destructive text-destructive-foreground animate-in slide-in-from-top"
      }`}
      style={{
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto">
        {isOnline ? (
          <>
            <Wifi className="w-4 h-4" />
            <span>Conexión restaurada</span>
          </>
        ) : (
          <>
            <WifiOff className="w-4 h-4" />
            <span>
              Sin conexión a internet. Algunas funciones pueden no estar
              disponibles.
            </span>
          </>
        )}
      </div>
    </div>
  );
};
