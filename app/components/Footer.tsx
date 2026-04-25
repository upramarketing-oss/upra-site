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
      <div className="mx-auto max-w-[1320px] px-6 sm:px-6 lg:px-10 py-14 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Bloco da marca — centrado em mobile, alinhado à esquerda em desktop */}
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            <Logo className="h-20 lg:h-20 w-auto mb-6" />
            <p className="text-ink/75 text-base lg:text-lg leading-relaxed max-w-sm">
              Construímos a presença digital de pequenas e médias empresas
              locais em Portugal.
            </p>
            <a
              href="mailto:upramarketing@gmail.com"
              className="mt-5 inline-block font-mono text-sm text-blue hover:text-blue-deep link-line"
            >
              upramarketing@gmail.com
            </a>
          </div>

          {/* Linha divisória só em mobile, entre marca e colunas */}
          <div className="lg:hidden h-px bg-rule -my-2" />

          {/* Colunas de links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 lg:gap-8">
            {FOOTER_LINKS.map((col) => (
              <div key={col.heading} className={col.heading === "Redes sociais" ? "col-span-2 md:col-span-1" : ""}>
                <h4 className="font-display text-sm lg:text-base font-bold text-ink mb-4 lg:mb-5 uppercase tracking-wide lg:tracking-normal lg:normal-case">
                  {col.heading}
                </h4>
                <ul className="space-y-2.5 lg:space-y-3">
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
                            className="text-mute hover:text-ink transition-colors text-[15px] lg:text-base"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            target={isMailto ? undefined : "_blank"}
                            rel={isMailto ? undefined : "noopener noreferrer"}
                            className="text-mute hover:text-ink transition-colors text-[15px] lg:text-base"
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
        <div className="mt-12 lg:mt-20 pt-7 lg:pt-8 border-t border-rule flex flex-col md:flex-row gap-5 md:items-center md:justify-between text-center md:text-left">
          <p className="text-[11px] lg:text-xs font-mono text-mute uppercase tracking-widest order-2 md:order-1">
            © 2026 UPRA · Todos os direitos reservados
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2 text-sm text-mute order-1 md:order-2">
            <Link href="#" className="hover:text-ink transition-colors">
              Política de privacidade
            </Link>
            <Link href="#" className="hover:text-ink transition-colors">
              Informações legais
            </Link>
            <CookiesButton className="hover:text-ink transition-colors" />
            <a
              href="https://www.livroreclamacoes.pt/"
              target="_blank"
              rel="noopener noreferrer"
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
