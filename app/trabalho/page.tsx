import Link from "next/link";
import type { Metadata } from "next";
import { WA_MEETING } from "../lib/contact";

export const metadata: Metadata = {
  title: "Trabalho",
  description:
    "Portefólio da UPRA: websites desenhados para PMEs portuguesas. Casos reais, com desafio, solução e resultado.",
  alternates: { canonical: "https://upra.pt/trabalho" },
};

// Placeholder enquanto não há casos reais para mostrar.
// Cada item terá: título, cliente, categoria, imagem hero, link para o caso.
const CASES_PLACEHOLDER = [
  { category: "Restauração", status: "Em desenvolvimento" },
  { category: "Lojas locais", status: "Em desenvolvimento" },
  { category: "Profissionais", status: "Em desenvolvimento" },
];

export default function TrabalhoPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-6 lg:px-10 pt-10 lg:pt-24 pb-12 lg:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="label mb-8">Trabalho</div>
          <h1
            className="display-tight text-[clamp(40px,8vw,120px)] max-w-[14ch] tracking-tight"
            style={{ lineHeight: 1.1 }}
          >
            Os primeiros casos{" "}
            <span className="text-blue">vão aparecer aqui.</span>
          </h1>
          <p className="mt-8 lg:mt-10 text-lg lg:text-2xl text-ink/80 leading-relaxed max-w-2xl">
            Estamos a arrancar. Quando os primeiros sites estiverem no ar,
            partilhamos aqui o desafio, a solução e o resultado.
          </p>
        </div>
      </section>

      {/* GRELHA DE CASOS (placeholder) */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-10 py-16 lg:py-24 bg-bg-soft">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-10 lg:mb-14">
            <div className="lg:col-span-7">
              <div className="label mb-4">Em breve</div>
              <h2 className="display-tight text-3xl md:text-4xl lg:text-5xl leading-[0.95]">
                Casos reais, em{" "}
                <span className="text-blue">construção.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex lg:items-end">
              <p className="text-ink/75 leading-relaxed text-[15px] lg:text-base">
                Cada caso vai mostrar o ponto de partida do cliente, a
                estratégia que aplicámos e os resultados em tráfego, leads
                e vendas.
              </p>
            </div>
          </div>

          {/* Cartões placeholder */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {CASES_PLACEHOLDER.map((c, i) => (
              <article
                key={i}
                className="bg-bg-bright border border-rule rounded-2xl overflow-hidden hover:border-blue transition-colors"
              >
                {/* Espaço da imagem */}
                <div className="relative aspect-[4/3] bg-bg-soft border-b border-rule flex items-center justify-center">
                  <span className="font-mono text-xs text-mute uppercase tracking-widest">
                    Brevemente
                  </span>
                  {/* Padrão decorativo subtil */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, transparent 0, transparent 10px, currentColor 10px, currentColor 11px)",
                    }}
                  />
                </div>
                <div className="p-6 lg:p-7">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-blue/10 text-blue mb-3">
                    {c.category}
                  </span>
                  <h3 className="display text-xl lg:text-2xl mb-2 text-ink/40">
                    Caso {String(i + 1).padStart(2, "0")}
                  </h3>
                  <p className="text-sm text-mute">{c.status}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA escura — final */}
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
