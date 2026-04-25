"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  const isActive = (matches: string[]) => {
    return matches.some((m) => {
      if (m === "/") return pathname === "/";
      return pathname === m || pathname.startsWith(m + "/");
    });
  };

  return (
    <header className="bg-bg-soft border-b border-rule">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 h-[88px] flex items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="UPRA Marketing · Início"
          className="flex items-center gap-3 group"
        >
          <Logo className="h-14 lg:h-[88px] w-auto" />
        </Link>

        <nav className="flex items-center gap-1 text-sm">
          {NAV.map((item) => {
            const active = isActive(item.match);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`hidden md:inline-block px-4 py-2 transition-colors ${
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
      </div>
    </header>
  );
}
