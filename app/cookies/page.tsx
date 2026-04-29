import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies da UPRA. Que cookies usamos, para que servem e como pode geri-los.",
  alternates: { canonical: "https://upra.pt/cookies" },
};

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

      {/* IUBENDA EMBED */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-10 py-16 lg:py-24 bg-bg-soft">
        <div className="mx-auto max-w-[900px]">
          <div className="bg-bg-bright border border-rule rounded-2xl p-7 sm:p-10 lg:p-14">
            <a
              href="https://www.iubenda.com/privacy-policy/11176512/cookie-policy"
              className="iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe"
              title="Política de Cookies"
            >
              Política de Cookies
            </a>
            <Script id="iubenda-cookie-loader" strategy="afterInteractive">
              {`
                (function (w,d) {
                  var loader = function () {
                    var s = d.createElement("script"),
                        tag = d.getElementsByTagName("script")[0];
                    s.src="https://cdn.iubenda.com/iubenda.js";
                    tag.parentNode.insertBefore(s,tag);
                  };
                  if(w.addEventListener) {
                    w.addEventListener("load", loader, false);
                  } else if(w.attachEvent) {
                    w.attachEvent("onload", loader);
                  } else {
                    w.onload = loader;
                  }
                })(window, document);
              `}
            </Script>
          </div>
        </div>
      </section>
    </>
  );
}
