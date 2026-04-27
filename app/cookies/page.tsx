import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies da UPRA. Que cookies usamos, para que servem e como pode geri-los.",
  alternates: { canonical: "https://upra.pt/cookies" },
};

// NOTA: quando subscrever o iubenda, substitua os placeholders abaixo
// pelo embed code que o iubenda gera. Cole no lugar de <SECTIONS>.

const SECTIONS = [
  {
    id: "o-que-sao",
    title: "1. O que são cookies",
    placeholder:
      "Explique de forma simples o que é um cookie: pequeno ficheiro de texto guardado pelo browser quando o utilizador visita um site.",
  },
  {
    id: "tipos",
    title: "2. Tipos de cookies que utilizamos",
    placeholder:
      "Liste as categorias usadas no site: estritamente necessários (sessão, preferências), análise (Google Analytics se vier a usar), funcionais e marketing.",
  },
  {
    id: "lista",
    title: "3. Lista detalhada de cookies",
    placeholder:
      "Tabela com nome do cookie, fornecedor, finalidade e duração. Esta lista é normalmente gerada automaticamente pelo iubenda.",
  },
  {
    id: "gestao",
    title: "4. Como gerir os cookies",
    placeholder:
      "Explique como o utilizador pode aceitar, recusar ou alterar preferências, tanto no banner do site (botão Cookies do rodapé) como no próprio browser.",
  },
  {
    id: "terceiros",
    title: "5. Cookies de terceiros",
    placeholder:
      "Identifique os fornecedores externos cujos cookies são utilizados (Vercel, fontes Google, Web3Forms, etc.) e remeta para as respetivas políticas.",
  },
  {
    id: "alteracoes",
    title: "6. Alterações à política de cookies",
    placeholder:
      "Esclareça que a política pode ser atualizada e onde o utilizador encontra a versão mais recente.",
  },
];

export default function CookiesPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-6 lg:px-10 pt-10 lg:pt-24 pb-12 lg:pb-16">
        <div className="mx-auto max-w-[900px]">
          <div className="label mb-8">Política de Cookies</div>
          <h1
            className="display-tight text-[clamp(36px,6vw,80px)] tracking-tight"
            style={{ lineHeight: 1.1 }}
          >
            Os cookies que{" "}
            <span className="text-blue">utilizamos.</span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-ink/80 leading-relaxed max-w-2xl">
            Esta página explica que cookies são utilizados no site da UPRA,
            para que servem e como pode geri-los a qualquer momento.
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
