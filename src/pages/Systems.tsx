import {
  Server,
  Cpu,
  Cloud,
  Database,
  ShieldCheck,
  Zap,
  Layers,
  Code2,
  ArrowRight,
  Home,
  MessageSquare,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SystemsSkeleton = () => (
  <div className="min-h-screen bg-background">
    {/* Hero Skeleton */}
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex justify-center mb-8">
          <Skeleton className="w-40 h-10 rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Skeleton className="w-full h-16 md:h-24 mx-auto" />
          <Skeleton className="w-3/4 h-10 mx-auto" />
          <div className="flex justify-center pt-4">
            <Skeleton className="w-48 h-14 rounded-full" />
          </div>
        </div>
      </div>
    </section>

    {/* Capabilities Skeleton */}
    <section className="py-24 bg-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-white/5 bg-card/50 p-8 space-y-4"
            >
              <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                <Skeleton className="w-16 h-16 rounded-2xl" />
                <Skeleton className="w-48 h-8" />
              </div>
              <Skeleton className="w-full h-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const Systems = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const capabilities = [
    {
      title: "Backend Moderno",
      description:
        "Desarrollamos motores de software robustos usando Node.js, Python y .NET Core, enfocados en escalabilidad y rendimiento extremo.",
      icon: Code2,
      color: "text-white",
      bg: "bg-gray-500/30",
    },
    {
      title: "Infraestructura Cloud",
      description:
        "Despliegue y orquestación masiva en AWS, Azure y Google Cloud con Docker y Kubernetes para disponibilidad del 99.9%.",
      icon: Cloud,
      color: "text-white",
      bg: "bg-gray-500/30",
    },
    {
      title: "IA & Machine Learning",
      description:
        "Integración de modelos LLM (OpenAI, Anthropic) y visión artificial para automatizar procesos complejos con inteligencia real.",
      icon: Cpu,
      color: "text-white",
      bg: "bg-gray-500/30",
    },
    {
      title: "Arquitectura de Datos",
      description:
        "Diseño de bases de datos de alta velocidad con PostgreSQL, MongoDB y Redis para servicios que nunca se detienen.",
      icon: Database,
      color: "text-white",
      bg: "bg-gray-500/30",
    },
  ];

  const handleContact = () => {
    const message = encodeURIComponent(
      "Hola, me gustaría conocer más sobre sus servicios de Systems (Sistemas, Backend e Infraestructura).",
    );
    window.open(`https://wa.me/51980609176?text=${message}`, "_blank");
  };
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <SystemsSkeleton />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background z-10" />
          <ImageWithSkeleton
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop"
            alt="Infraestructura Background"
            className="w-full h-full object-cover brightness-[0.2]"
            containerClassName="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,149,255,0.1),transparent_70%)] z-10" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex justify-center mb-8">
            <Breadcrumb className="bg-background/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      to="/"
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Home className="w-3.5 h-3.5" />
                      <span>Inicio</span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary font-medium tracking-wide">
                    Systems
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold mb-8 animate-fade-up">
              Potencia tu <span className="text-gradient">Infraestructura</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed animate-fade-up [animation-delay:200ms]">
              Construimos los sistemas invisibles que hacen posible lo
              extraordinario en el mundo digital.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:400ms]">
              <Button
                size="lg"
                className="rounded-full px-8 h-14 text-lg font-bold bg-primary hover:scale-105 transition-transform"
                onClick={handleContact}
              >
                Solicitar Asesoría
                <Zap className="ml-2 w-5 h-5 fill-current" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-secondary/5 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {capabilities.map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
              >
                <CardHeader className="flex flex-row items-center gap-4 p-4  justify-center bg-gradient-to-r from-primary to-accent">
                  <div
                    className={`p-4  rounded-2xl ${item.bg} group-hover:scale-110 transition-transform duration-500`}
                  >
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-display leading-tight ">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-muted-foreground text-lg leading-relaxed italic">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Visual Section */}
      <section className="py-24 border-y border-white/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                Arquitectura <br />
                <span className="text-primary">Limpia y Escalable</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Seguridad por Diseño
                    </h3>
                    <p className="text-muted-foreground italic">
                      Cifrado de extremo a extremo y cumplimiento de los más
                      altos estándares de protección de datos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Layers className="w-8 h-8 text-secondary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Diseño Modular</h3>
                    <p className="text-muted-foreground italic">
                      Sistemas desacoplados que permiten crecer sin fricciones
                      ni tiempos de inactividad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <div className="relative p-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl backdrop-blur-xl">
                <div className="bg-background/80 rounded-[calc(1.5rem-2px)] p-8 border border-white/10 shadow-2xl">
                  <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                    <span className="text-sm font-mono text-primary font-bold">
                      system.status_check()
                    </span>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <pre className="font-mono text-sm overflow-x-auto text-primary/80">
                    <code>{`
{
  "performance": "Optimized",
  "security": "Enforced",
  "cloud": "Multi-region",
  "deployment": "Automated",
  "uptime": "99.98%"
}
                    `}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10 text-center flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-5xl font-display font-bold mb-8 italic">
            ¿Listo para escalar al siguiente nivel?
          </h2>
          <Button
            size="lg"
            className="rounded-full px-10 h-14 text-xl font-bold bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all"
            onClick={handleContact}
          >
            Hablemos por WhatsApp
            <FaWhatsapp className="ml-3 w-10 h-10" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      <Footer />
    </div>
  );
};

export default Systems;
