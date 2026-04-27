"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { WA_MEETING } from "../lib/contact";

const STORAGE_KEY = "upra-meeting-popup-dismissed";
const DELAY_MS = 30_000; // 30 segundos
const PATHS_TO_SKIP = ["/contacto"];

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "MISSING_WEB3FORMS_KEY";

type Status = "idle" | "sending" | "success" | "error";

export function MeetingPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Timer para mostrar o popup ao fim de 30s
  useEffect(() => {
    if (PATHS_TO_SKIP.includes(pathname)) return;
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem(STORAGE_KEY) === "1"
    ) {
      return;
    }
    const timer = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Bloquear scroll do body quando o modal está aberto
  useEffect(() => {
    if (visible && !closing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible, closing]);

  // Esc fecha
  useEffect(() => {
    if (!visible) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const dismiss = () => {
    setClosing(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
      setStatus("idle");
    }, 250);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string) || "";

    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", `[Popup UPRA] Pedido de contacto · ${name}`);
    formData.append("from_name", name || "Site UPRA — Popup");
    formData.append("botcheck", ""); // honeypot anti-spam

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        if (typeof window !== "undefined") {
          sessionStorage.setItem(STORAGE_KEY, "1");
        }
        // Fechar automaticamente 4s após o sucesso
        setTimeout(() => dismiss(), 4000);
      } else {
        setStatus("error");
        setErrorMessage(
          data.message || "Não foi possível enviar a mensagem."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Erro de ligação. Tente novamente.");
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Pedido de contacto UPRA"
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-6 transition-opacity duration-300 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Fechar"
        onClick={dismiss}
        className="absolute inset-0 bg-ink/70 backdrop-blur-[2px] cursor-default"
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-[480px] bg-bg-bright rounded-3xl shadow-2xl shadow-ink/40 p-7 lg:p-9 transition-all duration-300 ${
          closing
            ? "translate-y-3 scale-95"
            : "translate-y-0 scale-100 animate-meeting-pop"
        }`}
      >
        {/* Botão fechar (canto sup. dir.) */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Fechar"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full text-mute hover:text-ink hover:bg-bg-soft transition-colors"
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

        {/* Estado de sucesso */}
        {status === "success" ? (
          <div className="text-center py-2">
            <div className="w-14 h-14 rounded-full bg-blue text-bg-bright mx-auto flex items-center justify-center mb-5 text-2xl">
              ✓
            </div>
            <h3 className="display-tight text-2xl lg:text-3xl mb-3 leading-tight">
              Pedido <span className="text-blue">recebido.</span>
            </h3>
            <p className="text-mute leading-relaxed text-[15px]">
              Obrigado. Entraremos em contacto consigo em breve, normalmente
              em menos de 24 horas.
            </p>
          </div>
        ) : (
          <>
            <div className="label !text-blue mb-3">
              ★ Pronto para arrancar?
            </div>
            <h3 className="display-tight text-2xl lg:text-[28px] mb-3 leading-[1.1]">
              Quer um site para o{" "}
              <span className="text-blue">seu negócio?</span>
            </h3>
            <p className="text-mute text-[14px] lg:text-[15px] leading-relaxed mb-6">
              Deixe os seus contactos e nós ligamos. Sem compromisso.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Honeypot escondido */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <input
                type="text"
                name="name"
                placeholder="Nome *"
                required
                className="w-full px-4 py-3.5 bg-bg-soft border border-rule rounded-xl text-ink placeholder:text-mute focus:outline-none focus:border-blue focus:bg-bg-bright transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                className="w-full px-4 py-3.5 bg-bg-soft border border-rule rounded-xl text-ink placeholder:text-mute focus:outline-none focus:border-blue focus:bg-bg-bright transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefone (opcional)"
                className="w-full px-4 py-3.5 bg-bg-soft border border-rule rounded-xl text-ink placeholder:text-mute focus:outline-none focus:border-blue focus:bg-bg-bright transition-colors"
              />

              {status === "error" && (
                <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-blue text-bg-bright rounded-full font-medium hover:bg-blue-deep transition-colors disabled:opacity-50 disabled:cursor-not-allowed with-arrow"
              >
                {status === "sending"
                  ? "A enviar..."
                  : "Quero ser contactado"}{" "}
                <span className="arrow">→</span>
              </button>
            </form>

            {/* Separador */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-rule" />
              <span className="text-xs font-mono text-mute uppercase tracking-widest">
                ou
              </span>
              <div className="flex-1 h-px bg-rule" />
            </div>

            <a
              href={WA_MEETING}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 border border-ink/15 text-ink rounded-full font-medium hover:bg-ink hover:text-bg-bright transition-colors text-[15px]"
            >
              Falar agora no WhatsApp
            </a>
          </>
        )}
      </div>
    </div>
  );
}
