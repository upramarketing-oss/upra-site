import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A UPRA nasceu para ajudar negócios locais portugueses a existir online. Sem complicação, sem jargão, sem soluções enlatadas.",
  alternates: { canonical: "https://upra.pt/sobre" },
};

export default function SobrePage() {
  return (
    <section className="px-5 sm:px-6 lg:px-12 pt-12 lg:pt-32 pb-20 lg:pb-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="label mb-10">Sobre</div>
        <h1 className="display text-[clamp(48px,9vw,140px)]">
          Quem está <em>por trás.</em>
        </h1>
        <p className="mt-12 text-xl text-ink/70 max-w-2xl leading-relaxed">
          A UPRA nasceu para ajudar negócios locais portugueses a
          existir online. Sem complicação, sem jargão, sem soluções enlatadas.
          Esta página vai contar mais sobre como trabalhamos e em que
          acreditamos.
        </p>
        <div className="mt-12">
          <Link
            href="/"
            className="link-line text-ink/85 hover:text-electric transition-colors"
          >
            ← Voltar ao início
          </Link>
        </div>
      </div>
    </section>
  );
}
