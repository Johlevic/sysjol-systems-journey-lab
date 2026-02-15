import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Loader2,
  FileText,
  Server,
  BookOpen,
  FlaskConical,
} from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { searchData, SearchItem } from "@/data/search-data";
import { cn } from "@/lib/utils";

// Separate functional component for the search content to maintain stability
const SearchContent = ({
  query,
  onQueryChange,
  isSearching,
  results,
  onSelect,
  isDesktop,
}: {
  query: string;
  onQueryChange: (q: string) => void;
  isSearching: boolean;
  results: SearchItem[];
  onSelect: (href: string) => void;
  isDesktop: boolean;
}) => {
  const getIcon = (category: string) => {
    switch (category) {
      case "Páginas":
        return <FileText className="mr-2 h-4 w-4 text-blue-400" />;
      case "Sistemas":
        return <Server className="mr-2 h-4 w-4 text-purple-400" />;
      case "Cursos":
        return <BookOpen className="mr-2 h-4 w-4 text-orange-400" />;
      case "Laboratorio":
        return <FlaskConical className="mr-2 h-4 w-4 text-emerald-400" />;
      default:
        return <Search className="mr-2 h-4 w-4" />;
    }
  };

  return (
    <Command
      shouldFilter={false}
      className="flex flex-col border-none bg-transparent overflow-hidden h-full justify-end"
    >
      {/* Mobile Top Header - Fixed while scrolling results */}
      <div className="md:hidden px-6 py-3 border-b border-white/5 bg-background/20 backdrop-blur-3xl sticky top-0 z-30 flex items-center justify-between shrink-0">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary/60">
          {query ? "Sistema de Búsqueda" : "Centro de Navegación"}
        </span>
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-primary/40 animate-pulse" />
          <div className="w-1 h-1 rounded-full bg-primary/40 animate-pulse delay-75" />
          <div className="w-1 h-1 rounded-full bg-primary/40 animate-pulse delay-150" />
        </div>
      </div>

      <CommandList className="w-full h-auto max-h-[calc(100%-140px)] overflow-y-auto pt-2 pb-2 scrollbar-hide">
        {isSearching ? (
          <div className="flex flex-col items-center justify-center py-12 animate-in fade-in duration-300">
            <Loader2 className="h-8 w-8 animate-spin text-primary opacity-50 mb-4" />
            <span className="text-sm text-muted-foreground font-display font-medium tracking-wide">
              Consultando base de conocimientos...
            </span>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            {query.trim() !== "" && results.length === 0 && (
              <CommandEmpty className="py-12 text-center text-muted-foreground">
                No se encontraron resultados para "{query}".
              </CommandEmpty>
            )}

            {results.length > 0 ? (
              <CommandGroup heading="Resultados de búsqueda">
                {results.map((item, idx) => (
                  <CommandItem
                    key={`${item.href}-${idx}`}
                    onSelect={() => onSelect(item.href)}
                    className="flex flex-col items-start py-4 px-4 cursor-pointer group hover:bg-white/5 mx-2 rounded-xl transition-all"
                  >
                    <div className="flex items-center w-full">
                      {getIcon(item.category)}
                      <span className="font-display font-bold text-foreground group-hover:text-primary transition-colors text-base">
                        {item.title}
                      </span>
                      <span className="ml-auto text-[10px] uppercase font-bold tracking-widest bg-muted px-2 py-0.5 rounded-lg opacity-40">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground ml-6 line-clamp-1 italic pt-1 group-hover:text-foreground/70">
                      {item.description}
                    </p>
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : query.trim() === "" ? (
              <>
                <CommandGroup heading="Sugerencias">
                  <CommandItem
                    onSelect={() => onSelect("/courses")}
                    className="cursor-pointer py-3 rounded-xl mx-2"
                  >
                    <BookOpen className="mr-3 h-5 w-5 text-orange-400" />
                    <span className="font-medium">Explorar Cursos Premium</span>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => onSelect("/lab")}
                    className="cursor-pointer py-3 rounded-xl mx-2"
                  >
                    <FlaskConical className="mr-3 h-5 w-5 text-emerald-400" />
                    <span className="font-medium">Ver Proyectos del Lab</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator className="my-2 bg-white/5" />
                <CommandGroup heading="Enlaces Rápidos">
                  <CommandItem
                    onSelect={() => onSelect("/systems")}
                    className="cursor-pointer py-3 rounded-xl mx-2"
                  >
                    <Server className="mr-3 h-5 w-5 text-purple-400" />
                    <span className="font-medium">
                      Infraestructura & Backend
                    </span>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => onSelect("/journey")}
                    className="cursor-pointer py-3 rounded-xl mx-2"
                  >
                    <FileText className="mr-3 h-5 w-5 text-blue-400" />
                    <span className="font-medium">Consultoría Digital</span>
                  </CommandItem>
                </CommandGroup>
              </>
            ) : null}
          </div>
        )}
      </CommandList>
      <div className="border-t border-white/10 bg-background/50 backdrop-blur-md z-20 shrink-0">
        <CommandInput
          placeholder="Busca servicios, cursos o proyectos..."
          value={query}
          onValueChange={onQueryChange}
          className="text-lg md:text-base h-16 md:h-12 border-none outline-none focus:ring-0"
        />
      </div>
      {isDesktop && (
        <div className="border-t border-border/10 p-3 flex justify-between items-center bg-muted/20">
          <div className="flex gap-4">
            <div className="flex items-center text-[10px] text-muted-foreground uppercase font-bold tracking-widest opacity-60">
              <kbd className="mr-1.5 rounded-lg bg-black/40 px-2 py-0.5 border border-white/10 shadow-inner">
                Enter
              </kbd>{" "}
              ir
            </div>
            <div className="flex items-center text-[10px] text-muted-foreground uppercase font-bold tracking-widest opacity-60">
              <kbd className="mr-1.5 rounded-lg bg-black/40 px-2 py-0.5 border border-white/10 shadow-inner">
                ↑↓
              </kbd>{" "}
              mover
            </div>
          </div>
          <div className="flex items-center text-[10px] text-muted-foreground uppercase font-bold tracking-widest opacity-40 italic">
            Search by{" "}
            <span className="text-primary ml-1 non-italic font-bold">
              SysJoL
            </span>
          </div>
        </div>
      )}
    </Command>
  );
};

export const SearchGlobal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  // Debounced search logic to simulate loading
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timeout = setTimeout(() => {
      const searchTerm = query.toLowerCase().trim();
      const filtered = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm) ||
          item.description.toLowerCase().includes(searchTerm) ||
          item.category.toLowerCase().includes(searchTerm),
      );
      setResults(filtered);
      setIsSearching(false);
    }, 400);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleSelect = useCallback(
    (href: string) => {
      setOpen(false);
      navigate(href);
      window.scrollTo(0, 0);
      setQuery("");
    },
    [navigate, setOpen],
  );

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) setQuery("");
  };

  if (isDesktop) {
    return (
      <CommandDialog
        open={open}
        onOpenChange={handleOpenChange}
        className="top-24 translate-y-0 max-w-2xl border-white/10 shadow-2xl backdrop-blur-3xl bg-background/90"
      >
        <SearchContent
          query={query}
          onQueryChange={setQuery}
          isSearching={isSearching}
          results={results}
          onSelect={handleSelect}
          isDesktop={isDesktop}
        />
      </CommandDialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={handleOpenChange} shouldScaleBackground>
      <DrawerContent className="bg-background/95 backdrop-blur-3xl border-white/10 h-[96dvh] rounded-t-[32px] overflow-hidden">
        <div className="px-1 pt-2 h-full flex flex-col overflow-hidden">
          <div className="mx-auto my-2 h-1.5 w-12 rounded-full bg-white/10 shrink-0" />
          <div className="flex-1 overflow-hidden flex flex-col">
            <SearchContent
              query={query}
              onQueryChange={setQuery}
              isSearching={isSearching}
              results={results}
              onSelect={handleSelect}
              isDesktop={isDesktop}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
