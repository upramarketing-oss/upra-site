import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Redirects de slugs ASCII antigos para versões com cedilha
      {
        source: "/servicos",
        destination: "/serviços",
        permanent: true,
      },
      {
        source: "/precos",
        destination: "/preços",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
