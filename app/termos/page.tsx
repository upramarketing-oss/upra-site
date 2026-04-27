import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos e Condições",
  description:
    "Termos e condições de utilização do site e dos serviços prestados pela UPRA.",
  alternates: { canonical: "https://upra.pt/termos" },
};

const SECTIONS = [
  {
    id: "identificacao",
    title: "1. Identificação",
    placeholder:
      "Identifique a UPRA: denominação social, NIF, morada da sede, contactos oficiais e número de registo na conservatória.",
  },
  {
    id: "aceitacao",
    title: "2. Aceitação dos termos",
    placeholder:
      "Esclareça que a utilização do site e dos serviços implica a aceitação integral e sem reservas destes termos.",
  },
  {
    id: "servicos",
    title: "3. Descrição dos serviços",
    placeholder:
      "Descreva os serviços prestados (criação de websites, lojas online, landing pages, plano mensal de manutenção) e as suas caraterísticas gerais.",
  },
  {
    id: "obrigacoes-cliente",
    title: "4. Obrigações do cliente",
    placeholder:
      "Liste as obrigações do cliente: fornecer informação verdadeira, conteúdos próprios, cumprir prazos de feedback, efetuar pagamentos, etc.",
  },
  {
    id: "obrigacoes-upra",
    title: "5. Obrigações da UPRA",
    placeholder:
      "Liste as obrigações da UPRA: cumprir prazos contratualizados, manter a confidencialidade, prestar serviço com diligência profissional.",
  },
  {
    id: "pagamentos",
    title: "6. Pagamentos e faturação",
    placeholder:
      "Defina condições de pagamento: sinal, parcelas, métodos aceites (transferência, MB Way), prazos, atrasos e respetivas consequências.",
  },
  {
    id: "prazos",
    title: "7. Prazos de execução",
    placeholder:
      "Indique prazos típicos de cada tipo de projeto e as condições que podem causar atrasos (atraso na entrega de conteúdos pelo cliente, etc.).",
  },
  {
    id: "propriedade-intelectual",
    title: "8. Propriedade intelectual",
    placeholder:
      "Esclareça a quem pertencem os direitos sobre o código, design e identidade visual após a entrega e pagamento integral.",
  },
  {
    id: "garantias",
    title: "9. Garantias e limitação de responsabilidade",
    placeholder:
      "Defina o período de suporte gratuito após lançamento (30 dias) e os limites de responsabilidade da UPRA.",
  },
  {
    id: "cancelamento",
    title: "10. Cancelamento e rescisão",
    placeholder:
      "Estabeleça as condições de cancelamento por ambas as partes, incluindo prazos de aviso e devoluções de valores pagos.",
  },
  {
    id: "lei-aplicavel",
    title: "11. Lei aplicável e jurisdição",
    placeholder:
      "Indique que os termos se regem pela lei portuguesa e qual o foro competente para resolução de litígios.",
  },
  {
    id: "alteracoes",
    title: "12. Alterações aos termos",
    placeholder:
      "Esclareça que estes termos podem ser atualizados e como o cliente será informado das alterações.",
  },
];

export default function TermosPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-6 lg:px-10 pt-10 lg:pt-24 pb-12 lg:pb-16">
        <div className="mx-auto max-w-[900px]">
          <div className="label mb-8">Termos e Condições</div>
          <h1
            className="display-tight text-[clamp(36px,6vw,80px)] tracking-tight"
            style={{ lineHeight: 1.1 }}
          >
            Regras claras{" "}
            <span className="text-blue">para ambos os lados.</span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-ink/80 leading-relaxed max-w-2xl">
            Estes termos regulam a utilização do site e dos serviços prestados
            pela UPRA. Ao contactar-nos ou contratar um serviço, aceita as
            condições abaixo.
          </p>
          <div className="mt-6 font-mono text-xs text-mute uppercase tracking-widest">
            Última atualização: A definir
          </div>
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
