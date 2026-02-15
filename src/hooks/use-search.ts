import { useState, useEffect } from "react";

export function useSearchState() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenSearch = () => setIsOpen(true);
    window.addEventListener("open-global-search", handleOpenSearch);
    return () =>
      window.removeEventListener("open-global-search", handleOpenSearch);
  }, []);

  return { isOpen, setIsOpen };
}

export function openGlobalSearch() {
  window.dispatchEvent(new CustomEvent("open-global-search"));
}
