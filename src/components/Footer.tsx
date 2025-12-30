import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-display font-bold text-gradient">SysJoL</span>
            <span className="text-sm text-muted-foreground">© 2024</span>
          </div>
          
          {/* Tagline */}
          <p className="text-sm text-muted-foreground text-center">
            Systems • Journey • Lab — Innovación continua
          </p>
          
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
