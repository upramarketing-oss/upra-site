import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade da UPRA. Como tratamos os seus dados pessoais ao abrigo do RGPD.",
  alternates: { canonical: "https://upra.pt/politica-privacidade" },
};

const IUBENDA_PRIVACY_ID = "11176512";

// Revalida o conteudo a cada 24h — iubenda atualiza sozinha quando ha mudancas legais
export const revalidate = 86400;

async function getPrivacyPolicyContent(): Promise<string | null> {
  try {
    const res = await fetch(
      `https://www.iubenda.com/privacy-policy/${IUBENDA_PRIVACY_ID}`,
      {
        next: { revalidate: 86400 },
        headers: {
          // Pretend a normal browser para nao receber pagina diferente
          "User-Agent":
            "Mozilla/5.0 (compatible; UPRA-Site/1.0; +https://upra.pt)",
        },
      }
    );
    if (!res.ok) return null;
    const html = await res.text();

    // Extrair conteudo dentro de <main>...</main>
    const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    if (!mainMatch) return null;
    let content = mainMatch[1];

    // Limpar elementos indesejados
    content = content
      // Remover scripts inline (segurança + design)
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      // Remover styles inline
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      // Remover branding iubenda
      .replace(/<[^>]*class="[^"]*iubenda-branding[^"]*"[^>]*>[\s\S]*?<\/[^>]+>/gi, "")
      // Remover botões de gestão de preferências
      .replace(
        /<[^>]*class="[^"]*iub-manage-preferences[^"]*"[^>]*>[\s\S]*?<\/[^>]+>/gi,
        ""
      )
      // Remover noscript
      .replace(/<noscript[\s\S]*?<\/noscript>/gi, "");

    return content;
  } catch {
    return null;
  }
}

export default async function PoliticaPrivacidadePage() {
  const content = await getPrivacyPolicyContent();

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

      {/* TEXTO COMPLETO DA POLITICA — vindo do iubenda */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-10 py-16 lg:py-24 bg-bg-soft">
        <div className="mx-auto max-w-[900px]">
          <div className="bg-bg-bright border border-rule rounded-2xl p-7 sm:p-10 lg:p-14">
            {content ? (
              <article
                className="iubenda-content prose-upra"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : (
              <div className="text-mute italic text-center py-8">
                Não foi possível carregar a política. Pode consultá-la
                directamente em{" "}
                <a
                  href={`https://www.iubenda.com/privacy-policy/${IUBENDA_PRIVACY_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:text-blue-deep underline"
                >
                  iubenda.com →
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
