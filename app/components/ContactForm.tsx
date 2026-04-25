"use client";

import { useState } from "react";

// Web3Forms — serviço gratuito que recebe submissões e envia para o teu email.
// 1. Cria conta em https://web3forms.com (basta o email — gratuito, sem cartão).
// 2. Copia a "Access Key" do dashboard.
// 3. Cria ficheiro .env.local na raiz do projeto com:
//    NEXT_PUBLIC_WEB3FORMS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
// 4. Reinicia `npm run dev`.
const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "MISSING_WEB3FORMS_KEY";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!accepted || status === "sending") return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = (formData.get("firstName") as string) || "";
    const lastName = (formData.get("lastName") as string) || "";

    formData.append("access_key", WEB3FORMS_KEY);
    formData.append(
      "subject",
      `Contacto UPRA · ${firstName} ${lastName}`.trim()
    );
    formData.append("from_name", `${firstName} ${lastName}`.trim() || "Site UPRA");
    formData.append("botcheck", ""); // honeypot anti-spam

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
        setAccepted(false);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Não foi possível enviar a mensagem.");
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Erro de ligação. Verifica a tua internet e tenta novamente."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-blue-soft border border-blue rounded-2xl p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-blue text-bg-bright mx-auto flex items-center justify-center mb-4 text-xl">
          ✓
        </div>
        <h3 className="font-display font-bold text-xl mb-2">
          Mensagem enviada.
        </h3>
        <p className="text-mute leading-relaxed mb-5">
          Obrigado pelo contacto. Responderemos em breve.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm text-blue hover:text-blue-deep link-line"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {/* Honeypot escondido — bots preenchem, humanos não */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <Field name="firstName" label="Primeiro nome" required />
      <Field name="lastName" label="Último nome" required />
      <Field
        name="email"
        label="Email"
        type="email"
        required
        className="sm:col-span-2"
      />
      <Field name="company" label="Empresa" className="sm:col-span-2" />
      <Field
        name="phone"
        label="Telefone"
        type="tel"
        className="sm:col-span-2"
      />
      <Field
        name="message"
        label="Mensagem (opcional)"
        textarea
        className="sm:col-span-2"
      />

      <label className="sm:col-span-2 flex items-start gap-3 text-sm text-mute cursor-pointer">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="mt-0.5 w-4 h-4 accent-blue cursor-pointer shrink-0"
        />
        <span>
          Li e aceito a{" "}
          <a
            href="#"
            className="text-ink underline underline-offset-2 hover:text-blue"
          >
            Política de Privacidade
          </a>{" "}
          e os{" "}
          <a
            href="#"
            className="text-ink underline underline-offset-2 hover:text-blue"
          >
            Termos
          </a>
          .
        </span>
      </label>

      {status === "error" && (
        <div className="sm:col-span-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {errorMessage}
        </div>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={!accepted || status === "sending"}
          className="inline-flex items-center gap-2 px-6 py-4 bg-ink text-bg-bright rounded-full font-medium hover:bg-blue transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-ink with-arrow"
        >
          {status === "sending" ? "A enviar..." : "Enviar"}{" "}
          <span className="arrow">→</span>
        </button>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  className = "",
  textarea,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  className?: string;
  textarea?: boolean;
}) {
  const inputClasses =
    "w-full px-4 py-3.5 bg-bg-soft border border-rule rounded-xl text-ink placeholder:text-mute focus:outline-none focus:border-blue focus:bg-bg-bright transition-colors";

  return (
    <div className={className}>
      <label className="block">
        <span className="sr-only">{label}</span>
        {textarea ? (
          <textarea
            name={name}
            placeholder={label + (required ? " *" : "")}
            required={required}
            rows={4}
            className={inputClasses + " resize-y"}
          />
        ) : (
          <input
            type={type}
            name={name}
            placeholder={label + (required ? " *" : "")}
            required={required}
            className={inputClasses}
          />
        )}
      </label>
    </div>
  );
}
