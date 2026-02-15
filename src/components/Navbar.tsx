import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  ChevronDown,
  Server,
  Compass,
  FlaskConical,
  MessageSquare,
  BookOpen,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hola SysJoL, me gustaría solicitar información sobre sus servicios y asesoría tecnológica.",
    );
    window.open(`https://wa.me/51980609176?text=${message}`, "_blank");
  };

  const pillars = [
    {
      title: "Systems",
      description: "Infraestructura, Backend y APIs escalables.",
      icon: Server,
      href: "/systems",
    },
    {
      title: "Journey",
      description: "Transformación Digital y Estrategia.",
      icon: Compass,
      href: "/journey",
    },
    {
      title: "Lab",
      description: "Innovación y Experimentación Tecnológica.",
      icon: FlaskConical,
      href: "/lab",
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <img
                src="/favicon.png"
                alt="SysJoL Logo"
                className="relative w-8 h-8 md:w-9 md:h-9"
              />
            </div>
            <span className="text-xl md:text-2xl font-display font-bold text-gradient tracking-tight">
              SysJoL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 data-[state=open]:bg-white/5 transition-colors">
                    Pilares
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] bg-card/95 backdrop-blur-xl border border-white/10">
                      {pillars.map((pillar) => (
                        <li key={pillar.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={pillar.href}
                              className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                            >
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/20 transition-colors">
                                  <pillar.icon className="w-5 h-5" />
                                </div>
                                <div>
                                  <div className="text-sm font-bold leading-none mb-1">
                                    {pillar.title}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {pillar.description}
                                  </p>
                                </div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/courses"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-white/5 transition-colors flex items-center gap-2",
                    )}
                  >
                    <BookOpen className="w-4 h-4" />
                    Cursos
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button
              variant="glow"
              size="sm"
              className="px-6 font-bold flex items-center gap-2"
              onClick={handleWhatsAppContact}
            >
              <MessageSquare className="w-4 h-4" />
              Contacto
            </Button>
          </div>

          {/* Mobile Menu (Sheet) */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-card/95 backdrop-blur-2xl border-l border-white/10 p-0 flex flex-col h-[100dvh]"
              >
                <SheetHeader className="p-6 border-b border-white/5 flex-shrink-0">
                  <SheetTitle className="text-left font-display font-bold text-gradient">
                    Menú
                  </SheetTitle>
                </SheetHeader>

                <ScrollArea className="flex-grow">
                  <div className="flex flex-col py-6">
                    <nav className="flex flex-col gap-2 px-4">
                      <p className="px-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                        Empresa
                      </p>
                      {pillars.map((pillar) => (
                        <a
                          key={pillar.title}
                          href={pillar.href}
                          className="flex items-center gap-4 px-3 py-4 rounded-xl hover:bg-white/5 transition-colors group"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/20 transition-colors">
                            <pillar.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-bold text-sm">{pillar.title}</p>
                            <p className="text-xs text-muted-foreground">
                              {pillar.description}
                            </p>
                          </div>
                        </a>
                      ))}

                      <div className="h-px bg-white/5 my-4" />

                      <p className="px-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                        Educación
                      </p>
                      <Link
                        to="/courses"
                        className="flex items-center gap-4 px-3 py-4 rounded-xl hover:bg-white/5 transition-colors group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="p-2 rounded-lg bg-accent/5 group-hover:bg-accent/20 transition-colors">
                          <BookOpen className="w-5 h-5 text-accent" />
                        </div>
                        <p className="font-bold text-sm text-foreground">
                          Explorar Cursos
                        </p>
                      </Link>
                    </nav>
                  </div>
                </ScrollArea>

                <div className="p-4 border-t border-white/5 bg-background/50 flex-shrink-0">
                  <Button
                    variant="glow"
                    className="w-full font-bold flex items-center justify-center gap-2"
                    size="lg"
                    onClick={() => {
                      handleWhatsAppContact();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <MessageSquare className="w-5 h-5" />
                    Contactar por WhatsApp
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
