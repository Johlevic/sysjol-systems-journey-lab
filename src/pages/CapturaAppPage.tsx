import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CapturaAppScreenshotSlider } from "@/components/captura-app/CapturaAppScreenshotSlider";
import {
  CAPTURA_APP_BUNDLE_ID,
  CAPTURA_APP_LOGO_PNG,
  CAPTURA_APP_DOWNLOAD_URL,
  CAPTURA_APP_REPO_URL,
  CAPTURA_APP_VERSION,
} from "@/components/captura-app/constants";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Cpu,
  Download,
  FolderOpen,
  Gauge,
  Layers,
  MonitorPlay,
  Shield,
  Sparkles,
  Video,
  Webcam,
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Grabación híbrida",
    body: "Motor en Rust con pipeline de vídeo y audio integrado al escritorio.",
    accent: "text-captura-coral",
  },
  {
    icon: Layers,
    title: "Modos flexibles",
    body: "Pantalla completa, ventana concreta (lista + miniatura) o región rectangular con selector siempre visible.",
    accent: "text-captura-indigo",
  },
  {
    icon: MonitorPlay,
    title: "Overlays profesionales",
    body: "Cuenta atrás configurable (3 s por defecto), overlay a resolución de escritorio y controles compactos siempre encima.",
    accent: "text-captura-violet",
  },
  {
    icon: Webcam,
    title: "Webcam opcional",
    body: "Overlay circular por defecto, abajo a la derecha; preferencia persistente en ajustes.",
    accent: "text-captura-coral",
  },
  {
    icon: Sparkles,
    title: "Audio claro",
    body: "Elige micrófono desde la lista del sistema; opciones de micrófono y audio del sistema en la UI de grabación.",
    accent: "text-captura-indigo",
  },
  {
    icon: FolderOpen,
    title: "Galería y dashboard",
    body: "Listado desde disco, borrar, comprimir y exportar; métricas de almacenamiento y barras de los últimos 7 días.",
    accent: "text-captura-violet",
  },
];

const steps = [
  {
    n: "01",
    title: "Elige qué capturar",
    text: "Pantalla, una ventana o un rectángulo. La app te guía con vistas dedicadas sin mezclar contextos.",
  },
  {
    n: "02",
    title: "Ajusta audio y cámara",
    text: "Dispositivos reales del sistema; activa o desactiva webcam y revisa la cuenta atrás en overlay.",
  },
  {
    n: "03",
    title: "Graba o dispara PNG",
    text: "Misma lógica de área para vídeo y capturas. FPS y resolución persistentes (30 FPS, 1080p por defecto).",
  },
  {
    n: "04",
    title: "Revisa en local",
    text: "Galería integrada y dashboard con referencia visual de espacio (~2 GB en la UI). Todo en tu carpeta de salida.",
  },
];

const compareRows = [
  {
    label: "Enfoque",
    captura: "Grabar, capturar, revisar y gestionar en un solo programa compacto.",
    other: "Herramientas amplias orientadas a producción en directo o flujos muy complejos.",
  },
  {
    label: "Integración",
    captura: "Nativo Windows (Tauri/Rust): ventanas, overlays y selectores del sistema.",
    other: "Soluciones solo navegador con límites en ventanas y permisos.",
  },
  {
    label: "Interfaz",
    captura: "Barra lateral densa: Grabar, Captura, Galería, Dashboard y Ajustes.",
    other: "Interfaces más pesadas o dispersas en múltiples paneles.",
  },
];

const faqItems = [
  {
    q: "¿Dónde se guardan mis archivos?",
    a: "Por defecto en Windows: C:\\Users\\Public\\CapturaApp. Puedes cambiar la carpeta en ajustes. No hay nube obligatoria: el contenido permanece en tu equipo.",
  },
  {
    q: "¿Qué tecnologías usa CapturaApp?",
    a: "Frontend con Vite, JavaScript modular y Tailwind CSS 4; API de Tauri v2 con plugins de diálogo, shell y log. Backend en Rust (scap para pantalla, cpal para audio) con capas de dominio, casos de uso e infraestructura.",
  },
  {
    q: "¿Qué comandos expone la app?",
    a: "Entre otros: start_recording, stop_recording, take_screenshot, list_captures, delete_capture, compress_captures, export_capture, list_windows, list_audio_devices y open_output_folder.",
  },
  {
    q: "¿Cuánto ocupa la ventana principal?",
    a: "Tamaño lógico 860×560 px (mínimo 800×520), barra de título personalizada sin decoraciones nativas y transparencia. Al arranque, splash ~420×280 y luego la ventana principal centrada.",
  },
];

const CapturaAppPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative border-b border-white/5 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(235,87,87,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.12),transparent_45%)]" />
        <div className="container relative z-10 px-4 md:px-6">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#6366f1]"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>

          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="mb-6 flex items-center gap-3 rounded-full border border-white/10 bg-card/50 px-4 py-2 backdrop-blur-sm">
              <img
                src={CAPTURA_APP_LOGO_PNG}
                alt="Logotipo CapturaApp"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-captura-coral/50"
              />
              <div className="text-left">
                <h1 className="font-display text-xl font-bold md:text-2xl">
                  CapturaApp
                </h1>
                <p className="text-xs text-muted-foreground md:text-sm">
                  v{CAPTURA_APP_VERSION} · {CAPTURA_APP_BUNDLE_ID}
                </p>
              </div>
            </div>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              Una app de escritorio para equipos y creadores que necesitan clips y
              capturas rápidas, con trazabilidad local y controles que no
              estorban.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-captura-coral font-semibold text-white shadow-lg shadow-captura-coral/25 hover:bg-captura-coral/90"
                asChild
              >
                <a
                  id="descargar"
                  href={CAPTURA_APP_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Descargar CapturaApp para Windows"
                >
                  <Download className="mr-2 h-5 w-5" />
                  <span className="sm:hidden">Descargar</span>
                  <span className="hidden sm:inline">
                    Descargar para Windows
                  </span>
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/courses">Ver formación SysJoL</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Todo lo esencial,{" "}
              <span className="text-captura-indigo">sin ruido</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Diseñada para sesiones de soporte, clases y documentación técnica.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/5 bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-captura-indigo/30 hover:shadow-lg hover:shadow-captura-indigo/5"
              >
                <f.icon
                  className={`mb-4 h-10 w-10 ${f.accent} transition-transform group-hover:scale-105`}
                />
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-secondary/20 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Cómo encaja en tu flujo
              </h2>
              <p className="mt-3 text-muted-foreground">
                Cuatro pasos claros, de la selección del área a la gestión en
                disco.
              </p>
              <ul className="mt-10 space-y-8">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="font-display text-sm font-bold text-captura-coral">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="font-display font-bold">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {s.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-captura-coral/10 to-captura-violet/10 blur-2xl" />
              <CapturaAppScreenshotSlider className="relative shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Por qué una app nativa compacta
            </h2>
            <p className="mt-3 text-muted-foreground">
              Comparativa breve, sin nombres de terceros: solo enfoque y
              arquitectura.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-card/60">
                  <th className="p-4 font-display font-bold">Criterio</th>
                  <th className="p-4 font-display font-bold text-captura-coral">
                    CapturaApp
                  </th>
                  <th className="p-4 font-display font-bold text-muted-foreground">
                    Suites amplias / solo web
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-white/5 bg-card/20 last:border-0"
                  >
                    <td className="p-4 font-medium text-foreground">
                      {row.label}
                    </td>
                    <td className="p-4 text-muted-foreground">{row.captura}</td>
                    <td className="p-4 text-muted-foreground/80">
                      {row.other}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-gradient-to-b from-background to-secondary/30 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="flex gap-4 rounded-2xl border border-white/5 bg-card/40 p-6 backdrop-blur-sm">
              <Gauge className="h-10 w-10 shrink-0 text-captura-indigo" />
              <div>
                <h2 className="font-display text-xl font-bold md:text-2xl">
                  Rendimiento y ligereza
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Ventana principal relativamente pequeña; overlays y ventanas
                  auxiliares solo cuando hacen falta. Al cambiar de vista se
                  limpian ventanas extra para evitar repintados costosos y
                  ventanas fantasma.
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-white/5 bg-card/40 p-6 backdrop-blur-sm">
              <Cpu className="h-10 w-10 shrink-0 text-captura-violet" />
              <div>
                <h2 className="font-display text-xl font-bold md:text-2xl">
                  Arquitectura que inspira confianza
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-captura-coral" />
                    Dominio, casos de uso e infraestructura separados en Rust.
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-captura-coral" />
                    Catálogo en memoria, miniaturas, PNG y comandos Tauri
                    cohesionados.
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-captura-coral" />
                    Capturas de pantalla en PNG con la misma lógica de área que
                    la grabación cuando aplica.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-captura-indigo/20 bg-captura-indigo/5 p-6 lg:col-span-2">
              <Shield className="h-10 w-10 shrink-0 text-captura-indigo" />
              <div>
                <h2 className="font-display text-xl font-bold md:text-2xl">
                  Privacidad
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Tus vídeos y capturas no tienen por qué pasar por servidores
                  externos. Opción de ocultar la app al iniciar grabación para
                  reducir distracciones en pantalla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:pb-28">
        <div className="container px-4 md:px-6">
          <h2 className="mb-10 text-center font-display text-3xl font-bold md:text-4xl">
            La app en imágenes
          </h2>
          <div className="mx-auto max-w-3xl">
            <CapturaAppScreenshotSlider showCaptions />
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-20 md:py-24">
        <div className="container max-w-3xl px-4 md:px-6">
          <h2 className="mb-8 text-center font-display text-3xl font-bold">
            Preguntas frecuentes
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-white/10">
                <AccordionTrigger className="text-left font-display hover:text-captura-indigo">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="border-t border-white/10 bg-card/30 py-12">
        <div className="container flex flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left md:px-6">
          <div>
            <p className="font-display text-lg font-bold">CapturaApp</p>
            <p className="text-sm text-muted-foreground">
              Versión {CAPTURA_APP_VERSION} · Identificador{" "}
              {CAPTURA_APP_BUNDLE_ID}
            </p>
            <a
              href={CAPTURA_APP_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-captura-indigo underline-offset-4 hover:underline"
            >
              Repositorio en GitHub
            </a>
          </div>
          <Button asChild variant="hero" className="bg-captura-coral">
            <a
              href={CAPTURA_APP_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Descargar CapturaApp para Windows"
            >
              <Download className="mr-2 h-4 w-4" />
              <span className="sm:hidden">Descargar</span>
              <span className="hidden sm:inline">Obtener para Windows</span>
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CapturaAppPage;
