import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // output: "standalone" produz build com server.js minimalista,
  // ideal para Docker (reduz imagem de ~1GB para ~150MB).
  output: "standalone",
  // Sem redirects: slugs sao agora ASCII puro (servicos, precos).
  // O Next.js standalone tem bug com paths Unicode em producao.
};

export default nextConfig;
