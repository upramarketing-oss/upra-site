"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { WA_MEETING } from "../lib/contact";

const NAV = [
  { href: "/#servicos", label: "Serviços", match: ["/"] },
  { href: "/trabalho", label: "Trabalho", match: ["/trabalho"] },
  { href: "/equipa", label: "Equipa", match: ["/equipa"] },
  { href: "/sobre", label: "Sobre", match: ["/sobre"] },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha o menu mobile quando muda de página
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Bloqueia scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (matches: string[]) => {
    return matches.some((m) => {
      if (m === "/") return pathname === "/";
      return pathname === m || pathname.startsWith(m + "/");
    });
  };

  return (
    <header className="bg-bg-soft border-b border-rule relative z-40">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10 h-[72px] md:h-[88px] flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="UPRA · Início"
          className="flex items-center gap-3 group"
        >
          <Logo className="h-12 md:h-14 lg:h-[88px] w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {NAV.map((item) => {
            const active = isActive(item.match);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`px-4 py-2 transition-colors ${
                  active
                    ? "text-blue font-semibold"
                    : "text-ink/85 hover:text-blue"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={WA_MEETING}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors with-arrow bg-ink text-bg hover:bg-blue"
          >
            Marcar reunião <span className="arrow">→</span>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col items-center justify-center w-11 h-11 -mr-2 group"
        >
          <span
            className={`block w-6 h-0.5 bg-ink transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink mt-1.5 transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu — full overlay */}
      <div
        className={`md:hidden fixed inset-x-0 top-[72px] bottom-0 bg-bg-soft transition-all duration-300 ease-out z-30 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col h-full px-6 py-8">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => {
              const active = isActive(item.match);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`py-4 text-2xl font-display font-bold border-b border-rule transition-colors ${
                    active ? "text-blue" : "text-ink hover:text-blue"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto pt-8">
            <a
              href={WA_MEETING}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-ink text-bg rounded-full font-medium with-arrow"
            >
              Marcar reunião <span className="arrow">→</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
