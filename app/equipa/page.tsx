import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipa",
  description:
    "Pequena, focada e portuguesa. Cada projeto é tratado pelas mesmas pessoas que falam consigo, do briefing ao lançamento. Sem subcontratações.",
  alternates: { canonical: "https://upra.pt/equipa" },
};

export default function EquipaPage() {
  return (
    <section className="px-5 sm:px-6 lg:px-10 pt-10 lg:pt-24 pb-20 lg:pb-40">
      <div className="mx-auto max-w-[1320px]">
        <div className="label mb-8">Equipa</div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h1 className="display-tight text-[clamp(48px,8.5vw,140px)] mb-8 leading-[0.95]">
              Pequena, focada e{" "}
              <span className="text-blue">portuguesa.</span>
            </h1>
            <p className="text-lg lg:text-xl text-ink/80 leading-relaxed max-w-md mb-10">
              Cada projeto é tratado pelas mesmas pessoas que falam consigo,
              do briefing ao lançamento. Sem subcontratações, sem ficheiros
              perdidos entre fornecedores.
            </p>
            <Link
              href="/contacto"
              className="btn-blue with-arrow"
            >
              Falar connosco <span className="arrow">→</span>
            </Link>
          </div>

          <div className="lg:col-span-7 lg:pt-12">
            <blockquote className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.15] max-w-2xl tracking-tight">
              Quem <span className="text-blue">desenha</span> é quem{" "}
              <span className="text-blue">desenvolve</span>. Quem
              desenvolve é quem{" "}
              <span className="text-blue">fala consigo</span>.
              <span className="block text-mute font-normal text-2xl md:text-3xl lg:text-[36px] mt-5">
                Sem intermediários, sem mistério.
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
