import Link from "next/link";
import type { Metadata } from "next";
import { WA_MEETING } from "../lib/contact";

export const metadata: Metadata = {
  title: "Preços",
  description:
    "Investimento em websites para PMEs portuguesas: landing pages, sites institucionais e lojas online. Valores a partir de, com orçamento personalizado em 48 horas.",
  alternates: { canonical: "https://upra.pt/preços" },
};

const TIERS = [
  {
    title: "Landing Page",
    tagline: "Página única, focada em converter.",
    price: "390",
    timeline: "2–5 dias",
    features: [
      "Design e logo à medida",
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
      "Design e logo à medida",
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
      "Design e logo à medida",
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
  "Integrações específicas (Calendly, CRM, etc.)",
  "Identidade visual existente ou a criar",
];

export default function PrecosPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-6 lg:px-10 pt-10 lg:pt-24 pb-12 lg:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="label mb-8">Preços</div>
          <h1
            className="display-tight text-[clamp(40px,8vw,120px)] max-w-[14ch] tracking-tight"
            style={{ lineHeight: 1.15 }}
          >
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
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest mb-3 font-semibold ${
                      tier.featured
                        ? "bg-blue/20 text-blue"
                        : "bg-blue/10 text-blue"
                    }`}
                  >
                    A partir de
                  </span>
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

          {/* Plano mensal de manutenção — incluído em qualquer escalão */}
          <article className="relative mt-12 lg:mt-16 bg-blue-soft border-2 border-blue rounded-2xl p-7 sm:p-8 lg:p-12 shadow-2xl shadow-blue/20 lg:-translate-y-2 transition-transform hover:-translate-y-3">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 lg:items-center">
              <div className="lg:col-span-2">
                <span className="label !text-blue !tracking-widest mb-5 inline-block">
                  + Plano mensal de manutenção
                </span>
                <h2 className="display-tight text-3xl md:text-4xl lg:text-5xl mb-5 leading-tight">
                  Tratamos de{" "}
                  <span className="text-blue">todos os custos</span> do seu
                  site num <span className="text-blue">plano mensal</span>{" "}
                  único.
                </h2>
                <p className="text-lg text-ink/75 leading-relaxed">
                  Hosting, domínio, certificado SSL, atualizações e suporte
                  estão incluídos no valor mensal. O cliente paga uma
                  mensalidade e nós tratamos de tudo o resto, sem contas
                  separadas nem custos inesperados.
                </p>
              </div>
              <div className="lg:col-span-1 flex flex-col items-start lg:items-end lg:text-right">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest mb-3 font-semibold bg-blue/15 text-blue">
                  Tudo incluído
                </span>
                <div className="display-tight text-5xl lg:text-6xl font-bold leading-none">
                  €49
                  <span className="text-2xl lg:text-3xl text-ink/60 font-normal">
                    /mês
                  </span>
                </div>
              </div>
            </div>

            {/* Pontos principais incluídos no plano */}
            <ul className="mt-8 lg:mt-10 pt-6 lg:pt-8 border-t border-blue/30 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-3 lg:gap-6">
              {[
                "Hosting + domínio",
                "Certificado SSL",
                "Atualizações de segurança",
                "Backups automáticos",
                "Suporte contínuo",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[14px] lg:text-[15px] text-ink/85 font-medium"
                >
                  <span className="text-blue shrink-0 mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Notas sobre orçamento */}
          <div className="mt-5 lg:mt-6 bg-bg-bright border border-rule rounded-2xl p-7 sm:p-8 lg:p-12">
            {/* Intro */}
            <div className="max-w-3xl mb-10 lg:mb-14">
              <div className="label mb-3">Como calculamos</div>
              <h2 className="display-tight text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
                O preço final depende destes{" "}
                <span className="text-blue">4 fatores.</span>
              </h2>
              <p className="text-ink/75 text-lg leading-relaxed">
                Os valores acima são o ponto de partida. O orçamento final
                ajusta-se a cada projeto.
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
                Receberá o orçamento personalizado e por escrito{" "}
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
              href="/contacto"
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
