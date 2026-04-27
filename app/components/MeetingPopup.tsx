"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { WA_MEETING } from "../lib/contact";

const STORAGE_KEY = "upra-meeting-popup-dismissed";
const DELAY_MS = 30_000; // 30 segundos
const PATHS_TO_SKIP = ["/contacto"];

export function MeetingPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Não mostrar nas páginas onde já estamos a converter directamente
    if (PATHS_TO_SKIP.includes(pathname)) return;

    // Não mostrar se já foi dispensado nesta sessão
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem(STORAGE_KEY) === "1"
    ) {
      return;
    }

    const timer = setTimeout(() => {
      setVisible(true);
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, [pathname]);

  const dismiss = () => {
    setClosing(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
    // Espera a animação de saída antes de remover do DOM
    setTimeout(() => setVisible(false), 250);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Marcar reunião com a UPRA"
      className={`fixed bottom-5 left-5 lg:bottom-8 lg:left-8 z-[80] max-w-[360px] w-[calc(100%-2.5rem)] bg-ink text-bg-bright rounded-2xl shadow-2xl shadow-ink/40 p-6 lg:p-7 transition-all duration-300 ${
        closing
          ? "opacity-0 translate-y-4 scale-95"
          : "opacity-100 translate-y-0 scale-100 animate-meeting-pop"
      }`}
    >
      {/* Botão fechar */}
      <button
        type="button"
        onClick={dismiss}
        aria-label="Fechar"
        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-bg-bright/55 hover:text-bg-bright hover:bg-bg-bright/10 transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M1 1L13 13M13 1L1 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="label !text-blue mb-3">★ Pronto para arrancar?</div>
      <h3 className="display-tight text-2xl lg:text-[28px] mb-3 leading-[1.1]">
        Vamos falar do{" "}
        <span className="text-blue">seu futuro site.</span>
      </h3>
      <p className="text-bg-bright/75 text-[14px] lg:text-[15px] leading-relaxed mb-5">
        20 minutos. Sem compromisso. Em português, sem jargão técnico.
      </p>
      <a
        href={WA_MEETING}
        target="_blank"
        rel="noopener noreferrer"
        onClick={dismiss}
        className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-blue text-bg-bright rounded-full font-medium hover:bg-blue-deep transition-colors with-arrow"
      >
        Marcar reunião <span className="arrow">→</span>
      </a>
    </div>
  );
}
