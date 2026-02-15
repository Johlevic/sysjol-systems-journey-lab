import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center relative overflow-hidden geometric-bg px-4 pt-32 pb-20">
        {/* Background Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

        <div className="text-center space-y-8 max-w-lg animate-fade-up">
          <div className="flex flex-col items-center gap-6">
            <Link to="/" className="group">
              <img
                src="/favicon.png"
                alt="SysJoL Logo"
                className="w-20 h-20 md:w-24 md:h-24 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(0,149,255,0.3)]"
              />
            </Link>
            <div className="space-y-2">
              <h1 className="text-8xl md:text-9xl font-display font-black text-white opacity-20">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient -mt-12 relative z-10">
                Página no encontrada
              </h2>
            </div>
          </div>

          <p className="text-muted-foreground text-lg italic leading-relaxed">
            Parece que el sistema de navegación ha encontrado un callejón sin
            salida electrónico. La página que buscas no existe o ha sido movida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-primary hover:scale-105 transition-all glow-primary"
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Ir al Inicio
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-white/10 hover:bg-white/5"
              onClick={() => window.history.back()}
            >
              <button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver atrás
              </button>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
