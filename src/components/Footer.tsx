import { Github, Mail, Phone, MapPin, ChevronRight, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card/30 border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/favicon.png"
                alt="SysJoL Logo"
                className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-3xl font-display font-bold text-gradient">
                SysJoL
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed italic">
              Transformación Digital y Sistemas de Alto Rendimiento. Elevamos tu
              visión corporativa a través de la excelencia tecnológica.
            </p>
            <div className="flex items-center gap-4">
              {[
                {
                  icon: Phone,
                  href: "https://wa.me/51980609176",
                  label: "WhatsApp",
                },
                {
                  icon: Mail,
                  href: "mailto:sysjol@outlook.es",
                  label: "Email",
                },
                {
                  icon: Github,
                  href: "https://github.com/Johlevic?tab=repositories",
                  label: "GitHub",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-background/50 border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Explora
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Sistemas (Systems)", href: "/systems" },
                { name: "Estrategia (Journey)", href: "/journey" },
                { name: "Laboratorio (Lab)", href: "/lab" },
                { name: "Cursos Educativos", href: "/courses" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary flex items-center gap-2 group transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              Contacto
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm italic">
                  Sede Principal: Lima, Perú - Conexión Global
                </span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm italic">
                  sysjol@outlook.es
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm italic">
                  +51 980 609 176
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Call to Action Mini */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-6 italic text-gradient">
              Únete a la Vanguardia
            </h4>
            <p className="text-sm text-muted-foreground">
              Suscríbete para recibir noticias sobre nuevas tecnologías y
              automatizaciones.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Tu email..."
                className="w-full bg-background/50 border border-white/10 rounded-2xl py-3 px-4 outline-none focus:border-primary/50 transition-all italic text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary hover:bg-primary transition-all hover:text-white">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground font-medium uppercase tracking-[0.2em]">
          <p>
            © {currentYear} <span className="text-primary">SysJoL</span>. Todos
            los derechos reservados.
          </p>
          <div className="flex gap-8">
            <Link
              to="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link to="/" className="hover:text-primary transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
