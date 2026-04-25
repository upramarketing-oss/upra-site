# UPRA — Site

Site institucional da UPRA Marketing — agência digital portuguesa especializada em websites para PMEs locais.

## Stack

- [Next.js 15](https://nextjs.org) (App Router)
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Fontes via `next/font`: Bricolage Grotesque, Inter Tight, JetBrains Mono

## Desenvolvimento

```bash
npm install
npm run dev
```

Site fica em `http://localhost:4748`.

## Variáveis de ambiente

Cria um ficheiro `.env.local` na raiz com:

```
NEXT_PUBLIC_WEB3FORMS_KEY=a-tua-access-key
```

Obtém a chave em [web3forms.com](https://web3forms.com) (gratuita).

## Estrutura

```
app/
├── components/      # Header, Footer, Logo, ContactForm, CookieConsent, WhatsAppPopup
├── lib/             # Configurações partilhadas (contactos)
├── equipa/          # Página /equipa
├── sobre/           # Página /sobre
├── trabalho/        # Página /trabalho
├── contacto/        # Página /contacto
├── globals.css      # Tokens de design + utilitários (Tailwind v4 @theme)
├── layout.tsx       # Layout root + fonts + metadata
└── page.tsx         # Homepage
public/
└── upra-logo.png    # Logotipo
```

## Deploy

Optimizado para [Vercel](https://vercel.com). Configurar `NEXT_PUBLIC_WEB3FORMS_KEY` em Settings → Environment Variables após o primeiro deploy.

## Domínio

Produção: [upra.pt](https://upra.pt) (registado em dominios.pt)
