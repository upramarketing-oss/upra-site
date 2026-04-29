import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies da UPRA. Que cookies usamos, para que servem e como pode geri-los.",
  alternates: { canonical: "https://upra.pt/cookies" },
};

const IUBENDA_PRIVACY_ID = "11176512";

export const revalidate = 86400;

async function getCookiePolicyContent(): Promise<string | null> {
  try {
    const res = await fetch(
      `https://www.iubenda.com/privacy-policy/${IUBENDA_PRIVACY_ID}/cookie-policy`,
      {
        next: { revalidate: 86400 },
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; UPRA-Site/1.0; +https://upra.pt)",
        },
      }
    );
    if (!res.ok) return null;
    const html = await res.text();

    const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    if (!mainMatch) return null;
    let content = mainMatch[1];

    content = content
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]*class="[^"]*iubenda-branding[^"]*"[^>]*>[\s\S]*?<\/[^>]+>/gi, "")
      .replace(
        /<[^>]*class="[^"]*iub-manage-preferences[^"]*"[^>]*>[\s\S]*?<\/[^>]+>/gi,
        ""
      )
      .replace(/<noscript[\s\S]*?<\/noscript>/gi, "");

    return content;
  } catch {
    return null;
  }
}

export default async function CookiesPage() {
  const content = await getCookiePolicyContent();

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

      {/* TEXTO COMPLETO DA POLITICA DE COOKIES — vindo do iubenda */}
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
                  href={`https://www.iubenda.com/privacy-policy/${IUBENDA_PRIVACY_ID}/cookie-policy`}
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
