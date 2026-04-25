import Link from "next/link";
import { Logo } from "./Logo";
import { CookiesButton } from "./CookiesButton";

const FOOTER_LINKS = [
  {
    heading: "Serviços",
    links: [
      { label: "Websites", href: "/#servicos" },
      { label: "Lojas Online", href: "/#servicos" },
      { label: "Landing Pages", href: "/#servicos" },
      { label: "Design", href: "/#servicos" },
    ],
  },
  {
    heading: "Empresa",
    links: [
      { label: "Trabalho", href: "/trabalho" },
      { label: "Equipa", href: "/equipa" },
      { label: "Sobre", href: "/sobre" },
    ],
  },
  {
    heading: "Redes sociais",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/upramarketing" },
      { label: "Facebook", href: "https://www.facebook.com/upramarketing" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/upramarketing" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-bg-soft border-t border-rule">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10 py-14 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16">
          {/* Logo + tagline */}
          <div className="lg:col-span-5">
            <Logo className="h-16 lg:h-20 w-auto mb-7" />
            <p className="text-ink/75 text-lg leading-relaxed max-w-sm">
              Construímos a presença digital de pequenas e médias empresas
              locais em Portugal.
            </p>
            <a
              href="mailto:upramarketing@gmail.com"
              className="mt-6 inline-block font-mono text-sm text-blue hover:text-blue-deep link-line"
            >
              upramarketing@gmail.com
            </a>
          </div>

          {/* 3 colunas de links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-8">
            {FOOTER_LINKS.map((col) => (
              <div key={col.heading}>
                <h4 className="font-display text-base font-bold text-ink mb-5">
                  {col.heading}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => {
                    const isInternal =
                      link.href.startsWith("/") &&
                      !link.href.startsWith("//");
                    const isMailto = link.href.startsWith("mailto:");
                    return (
                      <li key={link.label}>
                        {isInternal ? (
                          <Link
                            href={link.href}
                            className="text-mute hover:text-ink transition-colors"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            target={isMailto ? undefined : "_blank"}
                            rel={isMailto ? undefined : "noopener noreferrer"}
                            className="text-mute hover:text-ink transition-colors"
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-rule flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="text-xs font-mono text-mute uppercase tracking-widest">
            © 2026 UPRA · Todos os direitos reservados
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-mute">
            <Link href="#" className="hover:text-ink transition-colors">
              Política de privacidade
            </Link>
            <Link href="#" className="hover:text-ink transition-colors">
              Informações legais
            </Link>
            <CookiesButton className="hover:text-ink transition-colors text-left" />
            <a
              href="https://www.livroreclamacoes.pt/"
              className="hover:text-ink transition-colors"
            >
              Livro de reclamações
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
