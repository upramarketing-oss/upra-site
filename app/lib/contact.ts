// Configuração central de contactos — WhatsApp, email, etc.
// TODO: substituir o número pelo real (formato 351 + 9 dígitos, sem espaços nem +)

export const WHATSAPP_NUMBER = "351912345678";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MEETING = whatsappLink(
  "Olá! Gostaria de marcar uma reunião para falar sobre o meu projeto."
);

export const WA_INFO = whatsappLink(
  "Olá! Vi o vosso site e queria saber mais sobre os serviços."
);
