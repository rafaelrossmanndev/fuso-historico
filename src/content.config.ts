import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Cada vídeo vira um post. Os arquivos são gerados pelo `npm run bibliografia -- <slug>` do engine.
const videos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/videos" }),
  schema: z.object({
    titulo: z.string(),
    descricao: z.string(),
    data: z.coerce.date(),
    youtube: z.string().optional(),
    rascunho: z.boolean().default(false),
  }),
});

export const collections = { videos };
