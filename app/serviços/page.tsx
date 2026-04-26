import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { WA_MEETING } from "../lib/contact";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Criação de websites, lojas online e landing pages para PMEs portuguesas. Design e logo à medida, hosting incluído e suporte contínuo.",
  alternates: { canonical: "https://upra.pt/serviços" },
};

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

export default function ServicosPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-6 lg:px-10 pt-10 lg:pt-24 pb-12 lg:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="label mb-8">Serviços</div>
          <h1
            className="display-tight text-[clamp(40px,8vw,120px)] max-w-[14ch] tracking-tight"
            style={{ lineHeight: 1.1 }}
          >
            O que <span className="text-blue">fazemos.</span>
          </h1>
          <p className="mt-8 lg:mt-10 text-lg lg:text-2xl text-ink/80 leading-relaxed max-w-2xl">
            Criamos websites pensados para vender. Cada projeto é único, com
            design e identidade visual desenhados de raiz para o seu negócio.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-10 py-16 lg:py-24 bg-bg-soft">
        <div className="mx-auto max-w-[1320px]">
          {/* Featured: Criação de Websites — o serviço principal */}
          <article className="card border-blue bg-blue-soft p-6 sm:p-8 lg:p-12 mb-5 lg:mb-6 hover:border-blue-deep">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
              <div className="lg:col-span-7">
                <div className="mb-6">
                  <span className="label !text-blue !tracking-widest">
                    ★ Serviço principal
                  </span>
                </div>
                <h2 className="display-tight text-4xl md:text-5xl lg:text-6xl mb-5 leading-[0.95]">
                  Criação de Websites
                </h2>
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
                    <h3 className="display text-xl lg:text-2xl mb-2">
                      {type.title}
                    </h3>
                    <p className="text-sm lg:text-[15px] text-mute leading-relaxed">
                      {type.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Design + logo: faixa em largura total, abaixo das duas colunas */}
            <div className="mt-8 lg:mt-10 flex items-start gap-4 p-5 lg:p-6 bg-bg-bright border border-blue/40 rounded-xl">
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

          {/* Plano mensal de manutenção */}
          <article className="card p-6 sm:p-8 lg:p-12 hover:border-blue transition-colors">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 lg:items-center">
              <div className="lg:col-span-7">
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

              <div className="lg:col-span-5">
                <div className="bg-blue-soft border-2 border-blue rounded-2xl p-6 lg:p-8">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest font-semibold bg-blue/15 text-blue mb-4">
                    Tudo incluído
                  </span>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="display-tight text-5xl lg:text-6xl font-bold leading-none">
                      €49
                    </span>
                    <span className="text-xl text-ink/60">/mês</span>
                  </div>
                  <ul className="space-y-2.5 text-[15px] text-ink/85">
                    {[
                      "Hosting + domínio",
                      "Certificado SSL",
                      "Atualizações de segurança",
                      "Backups automáticos",
                      "Suporte contínuo",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="text-blue shrink-0 mt-0.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CONTACT FORM */}
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

      {/* CTA escura — final */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-10 py-16 lg:py-24 bg-ink text-bg-bright">
        <div className="mx-auto max-w-[1320px] grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="label !text-bg-bright/55 mb-4">
              Próximo passo
            </div>
            <h2 className="display-tight text-3xl md:text-5xl lg:text-6xl leading-[0.95]">
              Vamos falar sobre o{" "}
              <span className="text-blue">seu futuro site.</span>
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
              Marcar reunião <span className="arrow">→</span>
            </a>
            <Link
              href="#formulario"
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
