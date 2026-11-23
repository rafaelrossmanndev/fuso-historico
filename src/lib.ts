import { getCollection } from "astro:content";

/** Posts visíveis: rascunhos só aparecem no `npm run dev` (ou com PUBLIC_RASCUNHOS=1, pra prévia). Mais recentes primeiro. */
export const videosVisiveis = async () =>
  (await getCollection("videos", ({ data }) => import.meta.env.DEV || import.meta.env.PUBLIC_RASCUNHOS === "1" || !data.rascunho))
    .sort((a, b) => b.data.data.getTime() - a.data.data.getTime());

export const dataBR = (d: Date) =>
  d.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
