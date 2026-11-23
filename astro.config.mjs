// Site do arquivo do Fuso Histórico: uma página por vídeo, com as fontes completas.
// O endereço é provisório até o site ser criado na Netlify.
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://fusohistorico.netlify.app",
  integrations: [sitemap()],
  trailingSlash: "ignore",
});
