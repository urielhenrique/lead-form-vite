import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Garante que o scroll vá para o topo (0,0)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "instant" funciona melhor para reset de página
    });
  }, [pathname]);

  return null;
}
