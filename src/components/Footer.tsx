import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="SysJoL Logo" className="w-8 h-8" />
            <span className="text-2xl font-display font-bold text-gradient">
              SysJoL
            </span>
            <span className="text-sm text-muted-foreground">© 2026</span>
          </div>

          {/* Tagline */}
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm text-muted-foreground text-center">
              Systems • Journey • Lab — Innovación continua
            </p>
            <Link
              to="/privacy-policy"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Twitter, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Github, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
