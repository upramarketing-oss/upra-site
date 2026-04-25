import Link from "next/link";
import type { Metadata } from "next";
import { WA_MEETING } from "../lib/contact";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A UPRA nasceu para ajudar negócios locais portugueses a existir online. Sem complicação, sem jargão, sem soluções enlatadas.",
  alternates: { canonical: "https://upra.pt/sobre" },
};

const VALUES = [
  {
    title: "Proximidade",
    body: "Falas com quem desenha e desenvolve — não com gestores de conta. Cada projeto é tratado de ponta a ponta pelas mesmas pessoas.",
  },
  {
    title: "Transparência",
    body: "Sabes o preço antes de começarmos. Sem letra miúda, sem extras inesperados, sem surpresas a meio do projeto.",
  },
  {
    title: "Tecnologia atual",
    body: "Não usamos WordPress nem templates. Construímos com código moderno — sites mais rápidos, melhor indexados pelo Google e fáceis de manter.",
  },
  {
    title: "Independência",
    body: "O código, o domínio e as contas são teus. Se um dia quiseres mudar de fornecedor, levas tudo contigo — sem reféns.",
  },
];

const PROMISES = [
  "Resposta no próprio dia útil",
  "Preço fixo antes de começar",
  "Sem subcontratações ou intermediários",
  "Suporte 30 dias após lançamento",
  "Painel simples para editares sozinho",
  "Código documentado e teu",
];

export default function SobrePage() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-6 lg:px-12 pt-12 lg:pt-32 pb-16 lg:pb-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="label mb-8">Sobre</div>
          <h1 className="display-tight text-[clamp(40px,9vw,140px)] leading-[0.95] max-w-[16ch]">
            A UPRA existe por um <span className="text-blue">motivo simples.</span>
          </h1>
          <p className="mt-10 text-lg lg:text-2xl text-ink/80 leading-relaxed max-w-2xl">
            Demasiados bons negócios em Portugal continuam invisíveis online.
            Queremos mudar isso — um site de cada vez.
          </p>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-12 py-16 lg:py-28 bg-bg-soft">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="label mb-4">A história</div>
              <h2 className="display text-3xl md:text-4xl lg:text-5xl leading-tight">
                Vimos uma falha, e decidimos preenchê-la.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-lg lg:text-xl text-ink/80 leading-relaxed">
              <p>
                Restaurantes cheios às sextas, mas sem horários ou ementa no
                Google. Cabeleireiros à espera dos mesmos clientes de sempre,
                enquanto os concorrentes aparecem em primeiro lugar nas
                pesquisas. Oficinas a perder encomendas por não terem onde
                mostrar trabalho.
              </p>
              <p>
                Soluções genéricas não resolvem isto. Templates de WordPress
                lentos, sites &quot;quase prontos&quot; que demoram meses a
                lançar, agências grandes que tratam negócios locais como
                números.
              </p>
              <p className="text-ink font-medium">
                A UPRA é a alternativa: pequena, focada, e <span className="text-blue">portuguesa</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-12 py-16 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-10 lg:mb-20">
            <div className="lg:col-span-4">
              <div className="label mb-4">Em que acreditamos</div>
              <h2 className="display text-3xl md:text-4xl lg:text-5xl leading-tight">
                Quatro coisas que não negociamos.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {VALUES.map((v, i) => (
              <article
                key={v.title}
                className="bg-bg-bright border border-rule rounded-2xl p-7 lg:p-9 hover:border-blue transition-colors"
              >
                <div className="flex items-baseline justify-between mb-5">
                  <span className="display text-3xl lg:text-4xl text-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="display text-2xl lg:text-3xl mb-3 leading-tight">
                  {v.title}
                </h3>
                <p className="text-ink/75 leading-relaxed text-[15px] lg:text-base">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROMESSAS */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-12 py-16 lg:py-28 bg-bg-soft">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="label mb-4">O que prometemos</div>
              <h2 className="display-tight text-3xl md:text-4xl lg:text-5xl leading-tight">
                Compromissos por escrito.{" "}
                <span className="text-mute">Sem letra miúda.</span>
              </h2>
            </div>
            <ul className="lg:col-span-7 space-y-3 lg:space-y-4">
              {PROMISES.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-4 py-4 border-b border-rule text-lg lg:text-xl text-ink/85"
                >
                  <span className="text-blue text-xl shrink-0 mt-0.5">→</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ABORDAGEM TÉCNICA */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-12 py-16 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="label mb-4">Como construímos</div>
              <h2 className="display-tight text-3xl md:text-4xl lg:text-5xl leading-tight">
                Sem WordPress.{" "}
                <span className="text-blue">Sem templates.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-lg lg:text-xl text-ink/80 leading-relaxed">
              <p>
                Cada site é construído à medida do negócio. Em código moderno,
                não em plataformas que adicionam camadas de plugins lentos e
                vulnerabilidades.
              </p>
              <p>
                <span className="text-ink font-medium">
                  Mobile-first
                </span>{" "}
                porque é onde os teus clientes te procuram.{" "}
                <span className="text-ink font-medium">SEO desde o primeiro código</span>{" "}
                porque aparecer no Google não é extra.{" "}
                <span className="text-ink font-medium">
                  Performance no topo
                </span>{" "}
                porque cada segundo a carregar custa-te clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-12 py-16 lg:py-24 bg-ink text-bg-bright">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="label !text-bg-bright/55 mb-4">
                Próximo passo
              </div>
              <h2 className="display-tight text-3xl md:text-5xl lg:text-6xl leading-[0.95]">
                Conta-nos sobre o teu negócio.
              </h2>
              <p className="mt-5 text-lg text-bg-bright/70 max-w-xl leading-relaxed">
                Uma chamada rápida para conhecer o teu negócio e perceber como
                podemos ajudar.
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
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-4 border border-bg-bright/30 text-bg-bright rounded-full hover:bg-bg-bright hover:text-ink transition-colors"
              >
                Formulário
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
