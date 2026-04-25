import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Vamos conversar? 20 minutos, sem compromisso, em português. Email geral@upramarketing.pt — respondemos em breve.",
  alternates: { canonical: "https://upra.pt/contacto" },
};

export default function ContactoPage() {
  return (
    <section className="px-5 sm:px-6 lg:px-12 pt-12 lg:pt-32 pb-20 lg:pb-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="label mb-10">Contacto</div>
            <h1 className="display text-[clamp(48px,9vw,140px)]">
              Vamos <em>conversar?</em>
            </h1>
            <p className="mt-10 text-xl text-ink/70 max-w-xl leading-relaxed">
              20 minutos. Sem compromisso. Em português, sem jargão técnico.
              Só para perceber se faz sentido trabalharmos juntos.
            </p>

            <div className="mt-14 space-y-6">
              <div>
                <div className="label mb-2">Email</div>
                <a
                  href="mailto:geral@upramarketing.pt"
                  className="font-display text-3xl md:text-4xl link-line hover:text-electric transition-colors"
                >
                  geral@upramarketing.pt
                </a>
              </div>
              <div>
                <div className="label mb-2">Onde nos encontrar</div>
                <p className="text-xl text-ink/85">
                  Portugal · Online em todo o lado
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-end">
            <div className="border border-rule rounded-2xl p-8 bg-paper-bright">
              <div className="label mb-3">Em construção</div>
              <p className="text-ink/75 leading-relaxed">
                O formulário de contacto e o agendamento direto via Calendly
                vão aparecer aqui em breve. Por agora, manda email.
                Respondemos no próprio dia.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
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
