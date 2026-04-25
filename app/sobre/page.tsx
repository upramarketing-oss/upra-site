import Link from "next/link";
import type { Metadata } from "next";
import { WA_MEETING } from "../lib/contact";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A UPRA nasceu para ajudar negócios locais portugueses a existir online. Sem complicação, sem jargão, sem soluções enlatadas.",
  alternates: { canonical: "https://upra.pt/sobre" },
};

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
            Muitos negócios em Portugal ainda são invisíveis no digital. Mas
            nós chegamos com a solução!
          </p>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-12 py-16 lg:py-28 bg-bg-soft">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="label mb-4">Quem somos</div>
              <h2 className="display text-3xl md:text-4xl lg:text-5xl leading-tight">
                Uma agência pequena.{" "}
                <span className="text-blue">Foco grande.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-lg lg:text-xl text-ink/80 leading-relaxed">
              <p>
                A UPRA é uma agência digital portuguesa, dedicada a criar
                presença online para pequenas e médias empresas. Construímos
                websites, lojas online e identidade visual para negócios que
                ainda não têm o seu lugar no Google.
              </p>
              <p>
                Somos uma equipa pequena, focada e independente. Cada projeto
                é tratado de ponta a ponta pelas mesmas pessoas que falam
                consigo.
              </p>
              <p>
                Acreditamos que ter presença online não devia ser um luxo nem
                uma dor de cabeça. Trabalhamos para que cada cliente receba
                um site <span className="text-ink font-medium">rápido</span>,{" "}
                <span className="text-ink font-medium">claro</span>, e que faça
                exatamente o que era esperado.
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
                Vamos falar sobre o seu futuro site.
              </h2>
              <p className="mt-5 text-lg text-bg-bright/70 max-w-xl leading-relaxed">
                Entre em contacto connosco e leve o seu negócio para o digital
                com estratégia.
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
                href="/#formulario"
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
