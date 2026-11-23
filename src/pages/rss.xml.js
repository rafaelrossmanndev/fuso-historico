import rss from "@astrojs/rss";
import { videosVisiveis } from "../lib";

export async function GET(context) {
  const videos = await videosVisiveis();
  return rss({
    title: "Fuso Histórico",
    description: "Arquivo do canal Fuso Histórico: as fontes completas de cada vídeo.",
    site: context.site,
    items: videos.map((v) => ({ title: v.data.titulo, description: v.data.descricao, pubDate: v.data.data, link: `/videos/${v.id}/` })),
  });
}
