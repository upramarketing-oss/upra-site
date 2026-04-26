import Link from "next/link";
import { ContactForm } from "./components/ContactForm";
import { WA_MEETING } from "./lib/contact";

const WEBSITE_TYPES = [
  {
    title: "Sites Institucionais",
    body: "Ideal para profissionais e PMEs estabelecidas que querem credibilidade online. A casa do seu negócio na web.",
    features: [
      "Página de apresentação",
      "Serviços detalhados",
      "Equipa + testemunhos",
      "Contactos + mapa",
      "Blog ou secção de notícias",
      "Galeria ou portefólio",
    ],
  },
  {
    title: "Landing Pages",
    body: "Página única, focada em converter. Para campanhas, lançamentos, captação de leads ou um produto específico.",
    features: [
      "Proposta de valor clara",
      "Benefícios + prova social",
      "Formulário de captação",
      "FAQ integrado",
      "Pixel Meta / Google Ads",
      "A/B testing preparado",
    ],
  },
  {
    title: "Lojas Online",
    body: "Para quem quer vender online. Catálogo, checkout e gestão integrados no seu site.",
    features: [
      "Catálogo de produtos",
      "Variações (tamanhos, cores)",
      "Carrinho + checkout",
      "Gestão de stock",
      "Envios CTT, DPD ou outros",
      "Cupões e promoções",
    ],
  },
];

const REASONS = [
  {
    title: "Performance e segurança",
    body: "Sites rápidos a carregar, otimizados para todos os dispositivos. Certificado SSL e atualizações automáticas para proteger o seu negócio.",
  },
  {
    title: "Design moderno e focado em conversão",
    body: "Não basta ser bonito. Cada secção é pensada para guiar o visitante até ao contacto, formulário ou botão de compra.",
  },
  {
    title: "SEO integrado desde o primeiro código",
    body: "Cada site é construído para aparecer no Google. Os clientes encontram-no quando procuram pelo que oferece.",
  },
  {
    title: "Gestão autónoma e intuitiva",
    body: "Fornecemos um painel intuitivo para editar texto, imagens e produtos. Sem código, sem programadores.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="px-5 sm:px-6 lg:px-10 pt-10 lg:pt-24 pb-16 lg:pb-32">
        <div className="mx-auto max-w-[1320px]">
          <h1 className="display-tight text-[clamp(40px,10vw,160px)] max-w-[15ch] leading-[0.95]">
            Websites que fazem o seu negócio{" "}
            <span className="text-blue">aparecer.</span>
          </h1>

          <div className="mt-8 lg:mt-16 grid lg:grid-cols-12 gap-6 lg:gap-10 lg:items-end">
            <p className="lg:col-span-6 text-[17px] sm:text-[20px] lg:text-[26px] leading-relaxed text-ink/85 max-w-[44ch]">
              Construímos a presença digital de pequenas e médias empresas
              locais em Portugal: indústria, restaurantes, lojas, oficinas e
              profissionais que ainda dependem do{" "}
              <span className="text-blue italic font-semibold">
                passa-palavra.
              </span>
            </p>
            <div className="lg:col-span-6 flex lg:justify-end">
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 px-6 py-3.5 lg:px-8 lg:py-5 bg-blue text-bg-bright rounded-full text-base lg:text-lg font-medium hover:bg-blue-deep transition-colors with-arrow"
              >
                Ver serviços <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SERVICES PREVIEW ============== */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-10 py-16 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-10 lg:mb-16">
            <div className="lg:col-span-7">
              <div className="label mb-4">Serviços</div>
              <h2 className="display text-4xl md:text-5xl lg:text-6xl mb-5 leading-[0.95]">
                O que <span className="text-blue">fazemos.</span>
              </h2>
              <p className="text-lg lg:text-xl text-ink/80 leading-relaxed max-w-xl">
                Criamos websites pensados para vender, com design e identidade
                visual desenhados à medida do seu negócio.
              </p>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end lg:items-end">
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 px-6 py-3.5 lg:px-7 lg:py-4 bg-ink text-bg-bright rounded-full font-medium hover:bg-blue transition-colors with-arrow"
              >
                Ver todos os serviços <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          {/* 3 tipos de sites — cards compactos */}
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {WEBSITE_TYPES.map((type) => (
              <Link
                key={type.title}
                href="/servicos"
                className="bg-bg-bright border border-rule rounded-2xl p-7 lg:p-8 hover:border-blue transition-colors group"
              >
                <h3 className="display text-2xl lg:text-3xl mb-3 group-hover:text-blue transition-colors">
                  {type.title}
                </h3>
                <p className="text-[15px] text-mute leading-relaxed mb-5">
                  {type.body}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue">
                  Saber mais <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============== WHY US ============== */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-10 py-16 lg:py-28 bg-bg-soft">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-10 lg:mb-20">
            <div className="lg:col-span-4">
              <div className="label mb-4">Porquê</div>
              <h2 className="display-tight text-4xl md:text-5xl lg:text-6xl">
                Porque nos escolher?
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {REASONS.map((r) => (
              <article
                key={r.title}
                className="bg-bg-bright border border-rule rounded-2xl p-7 lg:p-9 hover:border-blue transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="mt-2.5 w-2.5 h-2.5 rounded-full bg-blue shrink-0" />
                  <h3 className="display text-2xl lg:text-3xl leading-tight">
                    {r.title}
                  </h3>
                </div>
                <p className="text-ink/75 leading-relaxed pl-6 lg:pl-7 text-[15px] lg:text-base max-w-md">
                  {r.body}
                </p>
              </article>
            ))}

            {/* Minimalist contact CTA spanning both columns */}
            <article className="md:col-span-2 bg-ink text-bg-bright rounded-2xl p-7 lg:p-9 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div>
                <div className="label !text-bg-bright/55 mb-2">
                  Faz sentido?
                </div>
                <h3 className="display text-2xl lg:text-3xl leading-tight">
                  Vamos falar sobre o seu futuro site.
                </h3>
              </div>
              <a
                href={WA_MEETING}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-blue text-bg-bright rounded-full hover:bg-blue-deep transition-colors with-arrow shrink-0"
              >
                Marcar reunião <span className="arrow">→</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ============== CONTACT FORM ============== */}
      <section
        id="formulario"
        className="border-t border-rule px-5 sm:px-6 lg:px-10 py-16 lg:py-24 bg-bg-soft scroll-mt-8"
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="bg-bg-bright border border-rule rounded-2xl p-6 sm:p-8 lg:p-12 grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="label mb-4">Formulário</div>
              <h2 className="display-tight text-3xl md:text-4xl lg:text-5xl mb-5 leading-[0.95]">
                Conte-nos sobre o seu projeto.
              </h2>
              <p className="text-mute leading-relaxed max-w-sm">
                Preencha o formulário e respondemos em breve. Sem compromisso.
              </p>
              <div className="mt-8 pt-6 border-t border-rule">
                <div className="label mb-2">Ou diretamente</div>
                <a
                  href="mailto:geral@upramarketing.pt"
                  className="font-mono text-sm text-blue hover:text-blue-deep link-line"
                >
                  geral@upramarketing.pt
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
