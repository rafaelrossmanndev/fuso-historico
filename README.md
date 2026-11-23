# Site do Fuso Histórico (bibliografia)

Site estático em Astro. Cada vídeo do canal tem uma página com as fontes.

## Comandos (dentro desta pasta)
```
npm install       # primeira vez
npm run dev       # prévia em http://localhost:4321 (mostra também os rascunhos)
npm run build     # gera dist/ (sem rascunhos)
```

## Post novo
1. Na pasta de trabalho do vídeo (`fuso-historico/videos/<slug>/`), preencha o `post.md`.
2. No engine: `npm run bibliografia -- <slug>`. O post sai em `src/content/videos/<slug>.md`.
3. Quando o vídeo for ao ar: `rascunho: false` e o campo `youtube` com o id do vídeo no `post.md`, rode o comando de novo, commit e push. A Netlify publica sozinha.

Não edite o post gerado à mão: ele é refeito a cada `npm run bibliografia`.

## Deploy
Netlify ligada ao repositório no GitHub. A configuração está em `netlify.toml` (build `npm run build`, pasta `dist`, Node 22).
