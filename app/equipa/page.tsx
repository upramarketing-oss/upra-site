import Link from "next/link";
import type { Metadata } from "next";
import { WA_MEETING } from "../lib/contact";
import { FounderPhoto } from "../components/FounderPhoto";

export const metadata: Metadata = {
  title: "Equipa",
  description:
    "Uma equipa pequena, focada e portuguesa. Conheça o fundador João Ferreira e o que está por trás dos sites que entregamos.",
  alternates: { canonical: "https://upra.pt/equipa" },
};

export default function EquipaPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-6 lg:px-10 pt-10 lg:pt-24 pb-16 lg:pb-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="label mb-8">Equipa</div>
          <h1 className="display-tight text-[clamp(44px,9vw,140px)] leading-[0.95] max-w-[16ch]">
            Pequena, focada e{" "}
            <span className="text-blue">portuguesa.</span>
          </h1>
          <p className="mt-8 lg:mt-10 text-lg lg:text-2xl text-ink/80 leading-relaxed max-w-2xl">
            Acreditamos que o melhor trabalho nasce de equipas pequenas,
            próximas e que conhecem cada projeto de ponta a ponta. É assim
            que a UPRA trabalha.
          </p>
        </div>
      </section>

      {/* FUNDADOR */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-10 py-16 lg:py-28 bg-bg-soft">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Foto — substituir public/joao.png pela foto real */}
            <div className="lg:col-span-5 order-1 lg:order-1">
              <FounderPhoto
                src="/joao.png"
                alt="João Ferreira, fundador da UPRA"
                fallback="JF"
              />
            </div>

            {/* Bio */}
            <div className="lg:col-span-7 order-2 lg:order-2">
              <div className="label mb-3">Fundador</div>
              <h2 className="display-tight text-4xl md:text-5xl lg:text-6xl mb-6 leading-[0.95]">
                João Ferreira
              </h2>
              <div className="space-y-5 text-lg lg:text-xl text-ink/80 leading-relaxed max-w-xl">
                <p>
                  Fundei a UPRA com uma ideia simples: dar a pequenos negócios
                  portugueses a presença digital que merecem, sem complicar.
                </p>
                <p>
                  Quando contacta a UPRA, fala diretamente comigo. É comigo
                  que define o que precisa, é a minha equipa que desenha e
                  desenvolve, e é comigo que recebe o resultado final.
                </p>
                <p className="text-ink font-medium">
                  Pequena equipa.{" "}
                  <span className="text-blue">Atenção total ao seu projeto.</span>
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={WA_MEETING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-blue text-bg-bright rounded-full font-medium hover:bg-blue-deep transition-colors with-arrow"
                >
                  Falar comigo <span className="arrow">→</span>
                </a>
                <Link
                  href="/sobre"
                  className="inline-flex items-center gap-2 px-6 py-4 border border-ink/20 text-ink rounded-full hover:border-ink transition-colors"
                >
                  Sobre a UPRA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-10 py-16 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <blockquote className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-ink leading-[1.1] max-w-4xl tracking-tight">
            Quem <span className="text-blue">desenha</span> é quem{" "}
            <span className="text-blue">desenvolve</span>. Quem desenvolve é
            quem <span className="text-blue">fala consigo</span>.
            <span className="block text-mute font-normal text-xl md:text-2xl lg:text-3xl mt-6">
              É essa proximidade que faz a diferença.
            </span>
          </blockquote>
        </div>
      </section>
    </>
  );
}
