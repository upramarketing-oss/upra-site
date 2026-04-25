"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "upra-cookie-consent-v1";
const REOPEN_EVENT = "upra:reopen-cookies";

type Preferences = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

const DEFAULT_PREFS: Preferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

const ALL_TRUE: Preferences = {
  necessary: true,
  functional: true,
  analytics: true,
  marketing: true,
};

const CATEGORIES: Array<{
  key: keyof Preferences;
  title: string;
  body: string;
  locked?: boolean;
}> = [
  {
    key: "necessary",
    title: "Necessários",
    body: "Essenciais para o funcionamento do site (segurança, autenticação, preferências de idioma). Não podem ser desativados.",
    locked: true,
  },
  {
    key: "functional",
    title: "Funcionais",
    body: "Ajudam a personalizar a experiência, lembrar escolhas e partilhar conteúdo em redes sociais.",
  },
  {
    key: "analytics",
    title: "Análise",
    body: "Permitem perceber como os visitantes usam o site (páginas mais vistas, origem do tráfego) para melhorar a experiência.",
  },
  {
    key: "marketing",
    title: "Publicidade",
    body: "Usados para apresentar anúncios relevantes e medir a eficácia de campanhas.",
  },
];

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [prefs, setPrefs] = useState<Preferences>(DEFAULT_PREFS);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
      else {
        const parsed = JSON.parse(stored);
        if (parsed?.prefs) setPrefs(parsed.prefs);
      }
    } catch {
      setVisible(true);
    }

    // Listen for reopen events (so footer "Cookies" link can reopen the modal)
    const onReopen = () => {
      setVisible(true);
      setShowModal(true);
    };
    window.addEventListener(REOPEN_EVENT, onReopen);
    return () => window.removeEventListener(REOPEN_EVENT, onReopen);
  }, []);

  const saveAndClose = (newPrefs: Preferences) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          prefs: newPrefs,
          timestamp: new Date().toISOString(),
        })
      );
    } catch {
      /* localStorage indisponível */
    }
    setPrefs(newPrefs);
    setVisible(false);
    setShowModal(false);
  };

  const acceptAll = () => saveAndClose(ALL_TRUE);
  const rejectAll = () => saveAndClose(DEFAULT_PREFS);
  const savePrefs = () => saveAndClose(prefs);

  if (!visible) return null;

  return (
    <>
      {/* Compact banner — visible until user chooses */}
      {!showModal && (
        <div
          role="dialog"
          aria-label="Consentimento de cookies"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[100] bg-bg-bright border border-rule rounded-2xl shadow-2xl p-6"
        >
          <h3 className="font-display font-bold text-lg mb-2 text-ink">
            Cookies, mas só os necessários.
          </h3>
          <p className="text-sm text-mute leading-relaxed mb-5">
            Usamos cookies para melhorar a sua experiência no site. Pode
            aceitar todos, rejeitar, ou personalizar o que permite.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={acceptAll}
              className="flex-1 px-4 py-2.5 bg-blue text-bg-bright rounded-full text-sm font-medium hover:bg-blue-deep transition-colors"
            >
              Aceitar todos
            </button>
            <button
              onClick={rejectAll}
              className="flex-1 px-4 py-2.5 border border-rule text-ink rounded-full text-sm font-medium hover:border-ink transition-colors"
            >
              Rejeitar
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2.5 text-sm text-mute hover:text-ink transition-colors underline-offset-4 hover:underline"
            >
              Personalizar
            </button>
          </div>
        </div>
      )}

      {/* Modal — full preferences */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Preferências de cookies"
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-ink/50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-bg-bright border border-rule rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 lg:p-7 border-b border-rule">
              <h3 className="font-display font-bold text-lg lg:text-xl">
                Personalizar preferências
              </h3>
              <button
                onClick={() => setShowModal(false)}
                aria-label="Fechar"
                className="text-mute hover:text-ink text-xl leading-none w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto px-6 lg:px-7 py-2">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.key}
                  className="py-5 border-b border-rule last:border-b-0"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-display font-bold text-base">
                      {cat.title}
                      {cat.locked && (
                        <span className="ml-2 font-mono text-xs text-mute font-normal uppercase tracking-wider">
                          sempre ativo
                        </span>
                      )}
                    </h4>
                    <Toggle
                      checked={prefs[cat.key]}
                      disabled={cat.locked}
                      onChange={(checked) =>
                        setPrefs((p) => ({ ...p, [cat.key]: checked }))
                      }
                      label={cat.title}
                    />
                  </div>
                  <p className="text-sm text-mute leading-relaxed pr-12">
                    {cat.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 p-6 lg:p-7 border-t border-rule">
              <button
                onClick={rejectAll}
                className="flex-1 px-4 py-3 border border-rule rounded-full text-sm font-medium hover:border-ink transition-colors"
              >
                Rejeitar
              </button>
              <button
                onClick={savePrefs}
                className="flex-1 px-4 py-3 border border-ink text-ink rounded-full text-sm font-medium hover:bg-ink hover:text-bg-bright transition-colors"
              >
                Salvar preferências
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 px-4 py-3 bg-blue text-bg-bright rounded-full text-sm font-medium hover:bg-blue-deep transition-colors"
              >
                Aceitar todos
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (c: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      role="switch"
      aria-checked={checked}
      aria-label={label}
      className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${
        checked ? "bg-blue" : "bg-rule-strong"
      } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all shadow-sm ${
          checked ? "left-[22px]" : "left-0.5"
        }`}
      />
    </button>
  );
}
