import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { openGlobalSearch } from "@/hooks/use-search";
import { CapturaAppScreenshotSlider } from "@/components/captura-app/CapturaAppScreenshotSlider";
import {
  CAPTURA_APP_LOGO_PNG,
  CAPTURA_APP_DOWNLOAD_URL,
  CAPTURA_APP_VERSION,
} from "@/components/captura-app/constants";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden geometric-bg pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#eb5757]/15 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#6366f1]/20 blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:grid lg:grid-cols-[1fr_min(46%,420px)] lg:items-center lg:gap-14">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-full max-w-xl animate-fade-up">
              <button
                type="button"
                onClick={() => openGlobalSearch()}
                className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-left text-muted-foreground shadow-2xl shadow-primary/5 backdrop-blur-md transition-all duration-500 hover:border-[#6366f1]/40 hover:bg-white/10 hover:text-white"
              >
                <div className="rounded-xl bg-[#6366f1]/15 p-2 text-[#a855f7] transition-all duration-500 group-hover:bg-[#6366f1] group-hover:text-white">
                  <Search className="h-5 w-5" />
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100">
                    Centro de comandos
                  </span>
                  <span className="truncate text-sm font-medium">
                    Busca en SysJoL o salta a CapturaApp…
                  </span>
                </div>
                <kbd className="ml-auto hidden h-6 shrink-0 items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-2 font-mono text-[11px] font-medium sm:inline-flex">
                  Ctrl K
                </kbd>
              </button>
            </div>

            <div className="mt-8 flex animate-fade-up-delay-1 flex-col items-center gap-6 lg:items-start">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-card/60 px-3 py-2 pr-4 backdrop-blur-md">
                <img
                  src={CAPTURA_APP_LOGO_PNG}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-[#eb5757]/40"
                />
                <div className="text-left">
                  <p className="font-display text-sm font-bold tracking-tight text-foreground">
                    CapturaApp
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Escritorio Windows · v{CAPTURA_APP_VERSION}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-[3.25rem] lg:leading-tight">
                  Graba, captura y{" "}
                  <span className="bg-gradient-to-r from-[#eb5757] via-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                    organiza
                  </span>{" "}
                  sin salir de una sola app
                </h1>
                <p className="max-w-xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
                  Aplicación nativa con Tauri 2 y Rust: pantalla completa,
                  ventana o región, cuenta atrás, overlay, webcam circular,
                  audio del sistema y galería local. Tus archivos se quedan en
                  tu PC.
                </p>
              </div>

              <div className="flex w-full max-w-md flex-col gap-3 pt-2 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full border-none bg-[#eb5757] font-semibold text-white shadow-lg shadow-[#eb5757]/25 hover:bg-[#eb5757]/90 hover:shadow-[#eb5757]/40 sm:w-auto"
                  asChild
                >
                  <a
                    href={CAPTURA_APP_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5 shrink-0" />
                    Descargar para Windows
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-[#6366f1]/50 text-[#a855f7] hover:bg-[#6366f1]/10 sm:w-auto"
                  asChild
                >
                  <Link to="/capturaapp">
                    Ver la ficha completa
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <dl className="grid w-full max-w-xl grid-cols-2 gap-3 pt-4 sm:grid-cols-4 lg:max-w-none">
                {[
                  { k: "Ventana", v: "860×560 px" },
                  { k: "Salida", v: "1080p · 30 FPS" },
                  { k: "Stack", v: "Tauri 2 + Rust" },
                  { k: "Privacidad", v: "Sin nube" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="rounded-2xl border border-white/5 bg-secondary/30 p-3 text-center backdrop-blur-sm transition-colors hover:border-[#6366f1]/25 lg:text-left"
                  >
                    <dt className="text-[10px] font-display font-bold uppercase tracking-wider text-muted-foreground">
                      {row.k}
                    </dt>
                    <dd className="mt-1 font-display text-sm font-bold text-foreground md:text-base">
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="animate-fade-up-delay-2 mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#eb5757]/20 via-[#6366f1]/15 to-[#a855f7]/20 opacity-80 blur-2xl"
                aria-hidden
              />
              <div className="relative rounded-2xl border border-white/10 bg-card/40 p-3 shadow-2xl backdrop-blur-md">
                <div className="mb-2 flex items-center justify-between gap-2 px-1">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#eb5757]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/70" />
                  </div>
                  <span className="truncate font-mono text-[10px] text-muted-foreground">
                    CapturaApp — vista previa
                  </span>
                </div>
                <CapturaAppScreenshotSlider showCaptions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
