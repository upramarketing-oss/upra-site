import Link from "next/link";
import { ContactForm } from "./components/ContactForm";
import { EmailLink } from "./components/EmailLink";
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

const WEBSITE_INCLUDED = [
  "Mobile-first (rápido em telemóvel)",
  "SEO local (Google, Maps e Reviews)",
  "Formulário com integração WhatsApp ou email",
  "Analytics para saber quem visita o site",
  "Painel simples para editar texto e imagens",
  "Hosting e domínio configurados por nós",
  "Certificado SSL (cadeado verde) incluído",
  "Suporte 30 dias após lançamento",
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

      {/* ============== SERVICES (versão detalhada igual ao /servicos) ============== */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-10 py-16 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-10 lg:mb-16 lg:items-end">
            <div className="lg:col-span-7">
              <div className="label mb-4">Serviços</div>
              <h2 className="display text-4xl md:text-5xl lg:text-6xl leading-[0.95]">
                O que <span className="text-blue">fazemos.</span>
              </h2>
            </div>
            {/* Espaço reservado para a mascote da UPRA — a adicionar quando estiver criada */}
            <div className="lg:col-span-5 hidden lg:block" />
          </div>

          {/* Featured: Criação de Websites — o serviço principal */}
          <article
            id="criacao-websites"
            className="card border-blue bg-blue-soft p-6 sm:p-8 lg:p-12 mb-5 lg:mb-6 hover:border-blue-deep scroll-mt-8 lg:scroll-mt-12"
          >
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
              <div className="lg:col-span-7">
                <div className="mb-6">
                  <span className="label !text-blue !tracking-widest">
                    ★ Serviço principal
                  </span>
                </div>
                <h3 className="display-tight text-4xl md:text-5xl lg:text-6xl mb-5 leading-[0.95]">
                  Criação de Websites
                </h3>
                <p className="text-lg lg:text-xl text-ink/80 leading-relaxed max-w-xl mb-8">
                  O mundo é digital, e os seus clientes também. É{" "}
                  <span className="text-blue font-semibold">online</span> que
                  se procuram serviços, comparam preços e tomam decisões. Ter
                  um website já não é um luxo, mas sim uma{" "}
                  <span className="text-blue font-semibold">obrigação</span>{" "}
                  para{" "}
                  <span className="text-blue font-semibold">destacar</span> o
                  seu negócio!
                </p>
                <div className="border-t border-blue/30 pt-6">
                  <div className="label mb-4 !text-blue-deep">
                    Incluído em todos os projetos
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-ink/80">
                    {WEBSITE_INCLUDED.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-blue mt-0.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3">
                <div className="label mb-1">Tipos de sites</div>
                {WEBSITE_TYPES.map((type) => (
                  <div
                    key={type.title}
                    className="bg-bg-bright border border-rule rounded-2xl p-5 lg:p-6 hover:border-blue transition-colors"
                  >
                    <h4 className="display text-xl lg:text-2xl mb-2">
                      {type.title}
                    </h4>
                    <p className="text-sm lg:text-[15px] text-mute leading-relaxed">
                      {type.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Design + logo: faixa em largura total */}
            <div
              id="design-logo"
              className="mt-8 lg:mt-10 flex items-start gap-4 p-5 lg:p-6 bg-bg-bright border border-blue/40 rounded-xl scroll-mt-8 lg:scroll-mt-12"
            >
              <span className="text-blue text-2xl leading-none mt-0.5 shrink-0">
                ★
              </span>
              <p className="text-sm lg:text-[15px] text-ink/85 leading-relaxed">
                <span className="font-semibold text-blue-deep">
                  Design e logo
                </span>{" "}
                feitos à medida do seu negócio. Criamos a paleta de cores, a
                tipografia e a identidade visual de raiz, sem usar templates.
              </p>
            </div>
          </article>

          {/* CTA — para conhecer preços e plano mensal */}
          <div className="text-center mt-10 lg:mt-12">
            <Link
              href="/precos"
              className="inline-flex items-center gap-2 px-7 py-4 bg-ink text-bg-bright rounded-full font-medium hover:bg-blue transition-colors with-arrow"
            >
              Ver preços e plano mensal <span className="arrow">→</span>
            </Link>
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
                <EmailLink
                  email="geral@upramarketing.pt"
                  className="font-mono text-sm text-blue hover:text-blue-deep link-line"
                />
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
