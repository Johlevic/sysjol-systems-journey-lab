import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Search } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { openGlobalSearch } from "@/hooks/use-search";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-bg pt-24 md:pt-32 pb-5">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      {/* Grid lines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Hero Search Bar (Command Center) */}
          <div className="w-full max-w-xl animate-fade-up">
            <button
              onClick={() => openGlobalSearch()}
              className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-muted-foreground hover:text-white hover:bg-white/10 hover:border-primary/50 transition-all duration-500 group shadow-2xl shadow-primary/5"
            >
              <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Search className="w-5 h-5" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs font-display font-bold tracking-wide uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                  Centro de Comandos
                </span>
                <span className="text-sm font-medium">
                  ¿Qué deseas aprender hoy?
                </span>
              </div>
              <div className="ml-auto flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-all">
                <kbd className="hidden sm:inline-flex h-6 items-center gap-1 rounded-lg border border-white/20 bg-white/5 px-2 font-mono text-[11px] font-medium">
                  Ctrl K
                </kbd>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* Badge */}
          <div className="animate-fade-up-delay-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-python-blue/10 border border-python-blue/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-python-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-python-yellow"></span>
              </span>
              <span className="text-sm font-medium text-python-blue md:text-python-yellow">
                Inscripciones Abiertas
              </span>
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4 animate-fade-up-delay-1">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
              Inscríbete en la clase de{" "}
              <span className="text-python-blue">Python</span>
            </h1>
            <p className="text-xl md:text-2xl font-body font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Domina uno de los lenguajes más demandados. Desde fundamentos
              hasta{" "}
              <span className="text-python-yellow font-medium">
                herramientas avanzadas
              </span>{" "}
              y <span className="text-python-yellow font-medium">POO</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-fade-up-delay-2 justify-center w-full max-w-sm sm:max-w-none mx-auto">
            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all font-semibold"
              onClick={() => window.open("https://wa.me/51980609176", "_blank")}
            >
              <FaWhatsapp className="w-5 h-5 mr-2 shrink-0" />
              <span className=" text-xs flex gap-1">
                <p className="hidden md:block">Contactar por </p>{" "}
                <p> WhatsApp</p>
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-python-blue text-python-blue hover:bg-python-blue/10 shadow-lg shadow-python-blue/10 backdrop-blur-sm"
              onClick={() => (window.location.href = "/python-course")}
            >
              Ver Detalles del Curso
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 animate-fade-up-delay-3 w-full max-w-4xl">
            {[
              { value: "18 Feb", label: "Inicio" },
              { value: "4 Semanas", label: "Duración" },
              { value: "100% Práctico", label: "Metodología" },
              { value: "Online", label: "Modalidad" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-white/5 hover:border-python-blue/30 transition-colors flex flex-col items-center justify-center"
              >
                <div className="text-xl md:text-3xl font-display font-bold text-white mb-1 ">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium ">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
