import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade da UPRA. Como tratamos os seus dados pessoais ao abrigo do RGPD.",
  alternates: { canonical: "https://upra.pt/politica-privacidade" },
};

const SECTIONS = [
  {
    id: "responsavel",
    title: "1. Identificação do responsável pelo tratamento",
    placeholder:
      "Identifique aqui a UPRA enquanto entidade responsável pelo tratamento de dados (NIF, morada, contactos).",
  },
  {
    id: "dados",
    title: "2. Que dados recolhemos",
    placeholder:
      "Descreva que tipos de dados pessoais são recolhidos: nome, email, telefone, dados de navegação, etc.",
  },
  {
    id: "finalidades",
    title: "3. Finalidades do tratamento",
    placeholder:
      "Explique para que utiliza os dados: resposta a pedidos de contacto, prestação de serviços, faturação, marketing, etc.",
  },
  {
    id: "base-legal",
    title: "4. Base legal do tratamento",
    placeholder:
      "Indique a base legal de cada tratamento: consentimento, execução de contrato, obrigação legal, interesse legítimo.",
  },
  {
    id: "partilha",
    title: "5. Partilha de dados com terceiros",
    placeholder:
      "Refira parceiros e subcontratantes (Web3Forms, Vercel, dominios.pt, etc.) e as garantias de proteção que aplicam.",
  },
  {
    id: "conservacao",
    title: "6. Período de conservação dos dados",
    placeholder:
      "Indique por quanto tempo cada categoria de dados é conservada e os critérios para essa decisão.",
  },
  {
    id: "direitos",
    title: "7. Os seus direitos",
    placeholder:
      "Liste os direitos do titular ao abrigo do RGPD: acesso, retificação, apagamento, portabilidade, oposição, limitação. Indique como os pode exercer.",
  },
  {
    id: "cookies",
    title: "8. Cookies",
    placeholder:
      "Explique que cookies são utilizados, para que servem e como o utilizador pode geri-los.",
  },
  {
    id: "contactos",
    title: "9. Contactos",
    placeholder:
      "Indique como o titular pode contactar a UPRA (email geral@upramarketing.pt) e a CNPD em caso de reclamação.",
  },
  {
    id: "alteracoes",
    title: "10. Alterações à política",
    placeholder:
      "Esclareça que esta política pode ser atualizada e como o utilizador será informado.",
  },
];

export default function PoliticaPrivacidadePage() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-6 lg:px-10 pt-10 lg:pt-24 pb-12 lg:pb-16">
        <div className="mx-auto max-w-[900px]">
          <div className="label mb-8">Política de Privacidade</div>
          <h1
            className="display-tight text-[clamp(36px,6vw,80px)] tracking-tight"
            style={{ lineHeight: 1.1 }}
          >
            Como tratamos os{" "}
            <span className="text-blue">seus dados.</span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-ink/80 leading-relaxed max-w-2xl">
            Esta página descreve, de forma transparente, que dados pessoais a
            UPRA recolhe, como os utiliza e quais os seus direitos ao abrigo
            do Regulamento Geral de Proteção de Dados (RGPD).
          </p>
        </div>
      </section>

      {/* SECÇÕES */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-10 py-16 lg:py-24 bg-bg-soft">
        <div className="mx-auto max-w-[900px]">
          <div className="bg-bg-bright border border-rule rounded-2xl p-7 sm:p-10 lg:p-14">
            <div className="space-y-12 lg:space-y-14">
              {SECTIONS.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-8">
                  <h2 className="display-tight text-2xl lg:text-3xl mb-4 leading-tight">
                    {s.title}
                  </h2>
                  <p className="text-ink/70 leading-relaxed text-[15px] lg:text-base italic">
                    {s.placeholder}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
