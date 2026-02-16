import {
  ArrowLeft,
  ShieldCheck,
  Info,
  CreditCard,
  Clock,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-32 pb-16 max-w-4xl space-y-8">
        {/* Modern Breadcrumb */}
        <div className="flex justify-start mb-4">
          <Breadcrumb className="bg-background/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-lg">
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
                <BreadcrumbPage className="text-primary font-medium">
                  Términos de Servicio
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground">
            Términos de <span className="text-primary">Servicio</span>
          </h1>
          <p className="text-muted-foreground italic">
            Última actualización:{" "}
            {new Date().toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <Card className="border-white/5 bg-card/30 backdrop-blur-xl shadow-2xl">
          <CardHeader className="border-b border-white/5 pb-6">
            <CardTitle className="text-2xl font-display flex items-center gap-3">
              <ShieldCheck className="text-primary w-6 h-6" />
              Acuerdo de Usuario
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section className="space-y-3">
                <div className="flex items-center gap-3 text-foreground font-display font-bold text-lg">
                  <Info className="w-5 h-5 text-primary" />
                  <h3>1. Modalidad del Servicio</h3>
                </div>
                <p>
                  SysJoL Systems Journey Lab es una plataforma de formación
                  técnica. Todos nuestros servicios, cursos y mentorías se
                  imparten exclusivamente en <strong>modalidad virtual</strong>{" "}
                  (online), ya sea a través de sesiones en vivo o contenido
                  pre-grabado según se especifique en la descripción del
                  programa.
                </p>
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-3 text-foreground font-display font-bold text-lg">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <h3>2. Política de No Reembolso</h3>
                </div>
                <p>
                  Debido a la naturaleza digital e inmediata de acceso a
                  nuestros servicios,{" "}
                  <strong>
                    una vez realizado el pago y/o confirmada la inscripción, no
                    se realizarán devoluciones ni reembolsos de dinero
                  </strong>{" "}
                  bajo ninguna circunstancia. El usuario acepta este término al
                  momento de completar su transacción.
                </p>
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-3 text-foreground font-display font-bold text-lg">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3>3. Precios y Descuentos</h3>
                </div>
                <p>
                  Cada curso tiene un costo base estipulado. SysJoL puede
                  ofrecer descuentos promocionales por tiempo limitado. Una vez
                  finalizado el periodo de oferta comunicado (mediante
                  cronómetros o fechas límite),{" "}
                  <strong>
                    el curso volverá automáticamente a su costo inicial
                  </strong>{" "}
                  sin previo aviso. Es responsabilidad del usuario aprovechar la
                  oferta en el tiempo vigente.
                </p>
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-3 text-foreground font-display font-bold text-lg">
                  <Lock className="w-5 h-5 text-primary" />
                  <h3>4. Propiedad Intelectual</h3>
                </div>
                <p>
                  Todo el material (videos, PDF, código, metodologías) es
                  propiedad intelectual de SysJoL. Está{" "}
                  <strong>
                    estrictamente prohibida su reproducción, distribución, venta
                    o grabación
                  </strong>{" "}
                  sin consentimiento previo por escrito. El acceso es personal e
                  intransferible; el incumplimiento de esta norma causará la
                  baja inmediata del servicio sin derecho a reclamo y las
                  acciones legales pertinentes.
                </p>
              </section>

              <section className="space-y-3">
                <div className="flex items-center gap-3 text-foreground font-display font-bold text-lg">
                  <h3>5. Responsabilidad del Usuario</h3>
                </div>
                <p>
                  Es responsabilidad del alumno contar con una conexión a
                  internet estable y el equipo técnico necesario para seguir los
                  cursos. SysJoL no se hace responsable por fallas externas
                  ajenas a nuestra infraestructura técnica.
                </p>
              </section>

              <section className="pt-8 border-t border-white/5">
                <p className="text-sm italic">
                  Al utilizar nuestro sitio o adquirir nuestros cursos, usted
                  acepta automáticamente estos términos en su totalidad.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
