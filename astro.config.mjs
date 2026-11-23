// Site do arquivo do Fuso Histórico: uma página por vídeo, com as fontes completas.
// Endereço da Netlify (provisório até ter domínio próprio). O RSS e o sitemap usam este endereço.
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://fuso-historico.netlify.app",
  integrations: [sitemap()],
  trailingSlash: "ignore",
});
