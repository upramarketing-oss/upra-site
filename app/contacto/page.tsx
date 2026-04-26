import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Conte-nos sobre o seu projeto. Respondemos em breve, sem compromisso. Email: geral@upramarketing.pt",
  alternates: { canonical: "https://upra.pt/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-6 lg:px-10 pt-10 lg:pt-24 pb-12 lg:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="label mb-8">Contacto</div>
          <h1
            className="display-tight text-[clamp(40px,8vw,120px)] max-w-[14ch] tracking-tight"
            style={{ lineHeight: 1.1 }}
          >
            Vamos <span className="text-blue">conversar.</span>
          </h1>
          <p className="mt-8 lg:mt-10 text-lg lg:text-2xl text-ink/80 leading-relaxed max-w-2xl">
            Conte-nos sobre o seu negócio e devolvemos uma proposta clara em
            48 horas, sem compromisso.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-10 py-16 lg:py-24 bg-bg-soft">
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
              <div className="mt-8 pt-6 border-t border-rule space-y-5">
                <div>
                  <div className="label mb-2">Email</div>
                  <a
                    href="mailto:geral@upramarketing.pt"
                    className="font-mono text-sm text-blue hover:text-blue-deep link-line"
                  >
                    geral@upramarketing.pt
                  </a>
                </div>
                <div>
                  <div className="label mb-2">Onde nos encontra</div>
                  <p className="text-ink/85 text-[15px]">
                    Portugal · Online em todo o lado
                  </p>
                </div>
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
