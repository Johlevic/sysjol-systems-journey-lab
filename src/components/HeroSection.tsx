import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-bg">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Grid lines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-primary/20 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Systems • Journey • Lab</span>
            </div>
          </div>
          
          {/* Main heading */}
          <div className="space-y-4 animate-fade-up-delay-1">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight">
              <span className="text-gradient">SysJoL</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-body font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Un laboratorio de sistemas y automatización que guía a las empresas en su viaje hacia{" "}
              <span className="text-foreground font-medium">soluciones inteligentes</span> y{" "}
              <span className="text-foreground font-medium">escalables</span>.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-up-delay-2">
            <Button variant="hero" size="lg">
              Comenzar Ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="glow" size="lg">
              Conocer Más
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 pt-12 animate-fade-up-delay-3">
            {[
              { value: "99.9%", label: "Uptime" },
              { value: "+50", label: "Proyectos" },
              { value: "24/7", label: "Soporte" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
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
