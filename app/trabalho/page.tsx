import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trabalho",
  description:
    "Os primeiros casos de websites desenhados pela UPRA para PMEs portuguesas vão aparecer aqui. Sê dos primeiros a ter o teu negócio destacado.",
  alternates: { canonical: "https://upra.pt/trabalho" },
};

export default function TrabalhoPage() {
  return (
    <section className="px-5 sm:px-6 lg:px-12 pt-12 lg:pt-32 pb-20 lg:pb-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="label mb-10">Trabalho</div>
        <h1 className="display text-[clamp(48px,9vw,140px)]">
          <em>Os primeiros casos</em> vão aparecer aqui.
        </h1>
        <p className="mt-12 text-xl text-ink/70 max-w-2xl">
          Estamos a arrancar. Quando os primeiros sites estiverem no ar,
          partilhamos aqui o desafio, a solução e o resultado.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-4 bg-ink text-paper rounded-full hover:bg-electric transition-colors with-arrow"
          >
            Quero ser dos primeiros <span className="arrow">→</span>
          </Link>
          <Link
            href="/"
            className="px-4 py-3 link-line text-ink/85 hover:text-electric transition-colors"
          >
            ← Voltar ao início
          </Link>
        </div>
      </div>
    </section>
  );
}
