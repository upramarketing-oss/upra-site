import Link from "next/link";
import type { Metadata } from "next";
import { WA_MEETING } from "../lib/contact";

export const metadata: Metadata = {
  title: "Preços",
  description:
    "Investimento em websites para PMEs portuguesas: landing pages, sites institucionais e lojas online. Valores a partir de, com orçamento personalizado em 48 horas.",
  alternates: { canonical: "https://upra.pt/precos" },
};

const TIERS = [
  {
    title: "Landing Page",
    tagline: "Página única, focada em converter.",
    price: "390",
    timeline: "2–5 dias",
    features: [
      "Página única (Hero + CTA + Provas)",
      "Formulário de captação",
      "Pixel Meta + Google Ads",
      "Mobile-first, carregamento rápido",
      "SEO básico (title, meta, OG)",
      "Painel para editar texto/imagens",
    ],
    featured: false,
  },
  {
    title: "Site Institucional",
    tagline: "A casa do seu negócio na web.",
    price: "890",
    timeline: "1–2 semanas",
    features: [
      "Páginas: Home, Sobre, Serviços, Contacto",
      "Blog ou área de notícias",
      "Galeria ou portefólio",
      "Google Maps + Reviews",
      "SEO local + sitemap submetido",
      "Painel para editar tudo",
      "Suporte 30 dias após lançamento",
    ],
    featured: true,
  },
  {
    title: "Loja Online",
    tagline: "Vender online sem complicações.",
    price: "1.490",
    timeline: "1–3 semanas",
    features: [
      "Tudo o que vem no Site Institucional",
      "Catálogo de produtos com variações",
      "Carrinho + checkout",
      "MB Way, Multibanco, Visa/Mastercard",
      "Apple Pay & Google Pay",
      "Gestão de stock + cupões",
      "Painel completo de encomendas",
    ],
    featured: false,
  },
];

const ASSUMPTIONS = [
  "Número de páginas ou produtos finais",
  "Conteúdo a integrar (texto, fotografia profissional)",
  "Integrações específicas (Calendly, CRM, ERP, etc.)",
  "Identidade visual existente ou a criar",
];

export default function PrecosPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-6 lg:px-10 pt-10 lg:pt-24 pb-12 lg:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="label mb-8">Preços</div>
          <h1 className="display-tight text-[clamp(44px,9vw,140px)] leading-[1.05] max-w-[14ch]">
            Preço claro,{" "}
            <span className="text-blue">desde o início.</span>
          </h1>
          <p className="mt-8 lg:mt-10 text-lg lg:text-2xl text-ink/80 leading-relaxed max-w-2xl">
            Três pontos de partida para qualquer negócio. O orçamento final é
            sempre personalizado e entregue até 48 horas após o seu pedido.
          </p>
        </div>
      </section>

      {/* TIERS */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-10 py-16 lg:py-24 bg-bg-soft">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {TIERS.map((tier) => (
              <article
                key={tier.title}
                className={`relative rounded-2xl p-7 lg:p-9 flex flex-col ${
                  tier.featured
                    ? "bg-ink text-bg-bright border-2 border-blue"
                    : "bg-bg-bright border border-rule"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-7 lg:left-9">
                    <span className="inline-block bg-blue text-bg-bright text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full">
                      ★ Mais escolhido
                    </span>
                  </div>
                )}

                <h3 className="display-tight text-2xl lg:text-3xl mb-2">
                  {tier.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-7 ${
                    tier.featured ? "text-bg-bright/70" : "text-mute"
                  }`}
                >
                  {tier.tagline}
                </p>

                <div className="mb-2">
                  <div
                    className={`label mb-2 ${
                      tier.featured ? "!text-bg-bright/55" : ""
                    }`}
                  >
                    A partir de
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="display-tight text-5xl lg:text-6xl font-bold">
                      €{tier.price}
                    </span>
                  </div>
                </div>
                <div
                  className={`text-sm font-mono mb-8 ${
                    tier.featured ? "text-bg-bright/60" : "text-mute"
                  }`}
                >
                  Lançamento em {tier.timeline}
                </div>

                <ul
                  className={`space-y-2.5 text-[15px] mb-8 flex-1 ${
                    tier.featured ? "text-bg-bright/85" : "text-ink/85"
                  }`}
                >
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span
                        className={`shrink-0 mt-1 ${
                          tier.featured ? "text-blue" : "text-blue"
                        }`}
                      >
                        →
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WA_MEETING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium transition-colors with-arrow ${
                    tier.featured
                      ? "bg-blue text-bg-bright hover:bg-blue-deep"
                      : "bg-ink text-bg-bright hover:bg-blue"
                  }`}
                >
                  Pedir orçamento <span className="arrow">→</span>
                </a>
              </article>
            ))}
          </div>

          {/* Notas sobre orçamento */}
          <div className="mt-10 lg:mt-14 bg-bg-bright border border-rule rounded-2xl p-7 sm:p-8 lg:p-12">
            {/* Intro */}
            <div className="max-w-3xl mb-10 lg:mb-14">
              <div className="label mb-3">O que faz variar o orçamento</div>
              <h2 className="display-tight text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
                &quot;A partir de&quot; é o{" "}
                <span className="text-blue">ponto de entrada.</span>
              </h2>
              <p className="text-ink/75 text-lg leading-relaxed">
                O valor final do projeto depende destes 4 fatores:
              </p>
            </div>

            {/* 4 fatores numerados em linha */}
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7">
              {ASSUMPTIONS.map((a, i) => (
                <li key={a} className="border-l-2 border-blue pl-5">
                  <div className="display text-2xl lg:text-3xl text-blue mb-2 font-bold leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-ink/85 leading-snug text-[15px] lg:text-base">
                    {a}
                  </p>
                </li>
              ))}
            </ol>

            {/* 48h promise */}
            <div className="mt-10 lg:mt-14 pt-6 border-t border-rule flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
              <p className="text-ink font-medium text-lg">
                Receberá o orçamento personalizado e por escrito em{" "}
                <span className="text-blue">até 48 horas</span>.
              </p>
              <span className="font-mono text-xs text-mute uppercase tracking-widest shrink-0">
                Sem compromisso
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-10 py-16 lg:py-24 bg-ink text-bg-bright">
        <div className="mx-auto max-w-[1320px] grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="label !text-bg-bright/55 mb-4">
              Não encontra o que procura?
            </div>
            <h2 className="display-tight text-3xl md:text-5xl lg:text-6xl leading-[0.95]">
              Cada projeto é{" "}
              <span className="text-blue">único.</span>
            </h2>
            <p className="mt-5 text-lg text-bg-bright/70 max-w-xl leading-relaxed">
              Conte-nos sobre o seu negócio e devolvemos uma proposta clara em
              48 horas, sem compromisso.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end flex flex-wrap gap-3">
            <a
              href={WA_MEETING}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 bg-blue text-bg-bright rounded-full font-medium hover:bg-blue-deep transition-colors with-arrow"
            >
              Pedir orçamento <span className="arrow">→</span>
            </a>
            <Link
              href="/#formulario"
              className="inline-flex items-center gap-2 px-6 py-4 border border-bg-bright/30 text-bg-bright rounded-full hover:bg-bg-bright hover:text-ink transition-colors"
            >
              Formulário
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
