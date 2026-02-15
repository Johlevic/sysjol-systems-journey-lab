import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-bg">
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
          {/* Badge */}
          <div className="animate-fade-up">
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
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-up-delay-2 justify-center">
            <Button
              variant="hero"
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none"
              onClick={() => window.open("https://wa.me/51980609176", "_blank")}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Contactar por WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-python-blue text-python-blue hover:bg-python-blue/10"
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
                className="text-center p-4 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-white/5 hover:border-python-blue/30 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
