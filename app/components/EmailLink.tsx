"use client";

import { useState } from "react";

interface EmailLinkProps {
  email: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Link de email que combina mailto: + click-to-copy.
 *
 * Comportamento:
 *  1. Tenta abrir cliente de email default (Outlook, Mail, etc.) via mailto:
 *  2. Em paralelo copia o email para o clipboard
 *  3. Mostra toast "Email copiado!" durante 2.5s
 *
 * Resolve o problema comum de PCs sem cliente de email configurado, onde
 * mailto: nao abre Gmail web — assim o utilizador tem sempre o email a copia
 * facil para colar onde quiser.
 */
export function EmailLink({ email, className, children }: EmailLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Copia para o clipboard mas NAO impede o mailto:
    // (deixar o browser tentar abrir o cliente de email em paralelo)
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // Se o clipboard falhar, ignora silenciosamente — mailto:
        // continua a tentar funcionar
      }
    }
  };

  return (
    <span className="relative inline-block">
      <a
        href={`mailto:${email}`}
        onClick={handleClick}
        className={className}
      >
        {children ?? email}
      </a>

      {/* Toast "Email copiado!" */}
      <span
        role="status"
        aria-live="polite"
        className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1.5 bg-ink text-bg-bright text-xs font-mono uppercase tracking-widest rounded-full whitespace-nowrap pointer-events-none transition-all duration-200 ${
          copied
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-1"
        }`}
      >
        ✓ Email copiado
      </span>
    </span>
  );
}
