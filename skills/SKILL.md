---
name: trilho-frontend
description: Sistema de design e regras de frontend da Trilho (software sob medida para empresas). Use SEMPRE que estiver construindo, revisando ou ajustando qualquer interface, página, seção, componente, animação, transição, cena 3D ou peça visual da Trilho ou do repositório usetrilho — mesmo que o pedido não mencione "design", "marca" ou "identidade". Cobre tokens de cor, pares de contraste aprovados, tipografia, convenções de código (Next.js App Router, Tailwind v4, TypeScript), gramática de movimento e as regras de uso do 3D. Se o trabalho produz pixels da Trilho, esta skill se aplica.
---

# Trilho — Frontend

A Trilho vende **software sob medida**: uma empresa que hoje roda em planilha, caderno e WhatsApp passa a ter estoque, financeiro e operação num sistema só. O cliente é dono de operação real — distribuidora, metalúrgica, clínica, escola. Não é gestor de tecnologia, e abre o site no Android, no 4G, pelo link da bio.

Isso governa cada decisão abaixo. O que impressiona designer mas atrapalha esse cara está errado.

## Posicionamento (para qualquer copy)

- Vende-se **sistema**, não método, não consultoria, não "solução completa". Se "método" aparecer descrevendo o produto, trocar por "sistema" ou "software".
- **Nunca** escrever "pequenas e médias empresas", "PMEs" ou "MPEs". É vocabulário de edital, não de cliente — e coloca teto na percepção do produto. O porte se comunica pelo tom e pelos exemplos, não pelo rótulo.
- Nomear a dor pelo que o cliente vê: "digitar a mesma venda em três lugares", não "falta de integração entre módulos".
- Voz ativa, frase curta. Barlow Condensed em caixa alta pede sentença de 3 a 6 palavras. Headline que não cabe em duas linhas ainda não está pronta.

## Tokens

| Token | Hex | Papel |
|---|---|---|
| `brand` | `#FF5C00` | Laranja Trilho. Fundo de destaque, superfície de CTA, acento. |
| `brand-deep` | `#D64500` | Hover/pressed. Único laranja legível como texto sobre cream. |
| `cream` | `#F7EFE6` | O "branco" da marca. Fundo claro padrão. |
| `ink` | `#1C1611` | O "preto" da marca. Texto padrão e fundo escuro. |
| `muted` | `#6B5D51` | Texto secundário, legendas, metadados. |

**Branco puro (`#FFFFFF`) e preto puro (`#000000`) não existem neste projeto** — nem em sombra, nem em borda, nem no `<html>`. Se aparecerem, é bug. É essa troca que dá o ar impresso da identidade.

Cinza: não inventar. Usar `muted` ou `ink` com opacidade (`text-ink/60`). Nada de `slate`/`gray` do Tailwind — eles são azulados e sujam a paleta.

Tokens prontos no formato `@theme` do Tailwind v4: **`assets/globals.css`**.

## Contraste — a regra que mais se erra aqui

O laranja é vibrante e engana o olho: parece escuro, mas tem luminância alta. Os números reais:

| Combinação | Ratio | Veredito |
|---|---|---|
| ink sobre cream | 15.7:1 | ✅ qualquer tamanho |
| cream sobre ink | 15.7:1 | ✅ qualquer tamanho |
| ink sobre brand | 5.8:1 | ✅ **este é o par do CTA** |
| brand sobre ink | 5.8:1 | ✅ qualquer tamanho |
| brand-deep sobre cream | 3.9:1 | ⚠️ só display ≥ 24px bold |
| cream sobre brand | 2.7:1 | ❌ reprova até em display |
| brand sobre cream | 2.7:1 | ❌ reprova até em display |

Consequências, sem negociação:

- **Botão primário = fundo `brand`, texto `ink`.** Não cream. É contraintuitivo e é o certo — e fica mais gráfico.
- Laranja sobre cream: só `brand-deep`, só display grande. Nunca em parágrafo, label ou link inline.
- Quando a composição pedir laranja atrás de texto, inverter: fundo `ink` com acento `brand` dá 5.8:1 e é visualmente mais forte.

## Tipografia

- **Títulos:** Barlow Condensed 700, caixa alta, `tracking-tight`, `leading-[0.9]`. Condensada em caixa alta só funciona apertada.
- **Corpo:** Libre Franklin, 400 para texto, 600 para ênfase. Nada de 500 ou 800.
- **Utilitário** (eyebrow, label, legenda): Libre Franklin 600, caixa alta, `text-xs`, `tracking-[0.15em]`, cor `muted`.
- Carregar por `next/font/google`, `display: "swap"`. Fonte por CDN ou `@import` é regressão de performance.

## Stack e convenções

Next.js 16 (App Router) · TypeScript · Tailwind v4 · React Three Fiber + drei · Motion · Lenis.

- Tailwind v4 não usa `tailwind.config.ts` para tema. Tokens vivem em `@theme` no `app/globals.css`.
- Server Component é o padrão. `"use client"` só onde há estado, evento ou canvas — e o mais fundo possível na árvore. Um canvas nunca deve forçar a página inteira a virar client.
- Imagem sempre por `next/image`. `priority` só na primeira dobra.
- Componentes nomeados pelo que são na página (`Hero`, `ProblemGrid`), não pelo que fazem tecnicamente (`ThreeWrapper`).

## Movimento

Transições suaves são metade do produto aqui — a página precisa parecer cara antes de ser lida. A gramática completa (durações, curvas, reveals, scroll, o que nunca se anima) está em **`references/motion.md`**. Ler antes de animar qualquer coisa.

Resumo: **entrada rápida e saída lenta, deslocamento curto, um movimento por elemento, nada acima de 800ms.**

## 3D

O 3D da Trilho é **detalhe, não estrutura**. Ele qualifica um canto da tela — não sustenta a página, não fica atrás de texto, não é o hero inteiro. Página que quebra sem WebGL é página quebrada.

As regras (onde ele se justifica, materiais, orçamento de performance, fallback) estão em **`references/3d.md`**. Ler antes de criar ou alterar qualquer cena.

Resumo: **`meshBasicMaterial` ou `meshToonMaterial` nas cores da marca, sem `<Environment>`, sem bloom, `frameloop="demand"`, `dpr` limitado, poster estático de fallback.**

## Piso de qualidade

Não anunciar, só cumprir:

- Responsivo de 360px pra cima. Desenhar no celular primeiro — é lá que o cliente está.
- LCP com meta de < 2.5s em 4G. Se o 3D ameaça isso, o 3D cede.
- `prefers-reduced-motion` respeitado em tudo: sem Lenis, sem parallax, sem reveal, cena 3D parada.
- Foco de teclado visível em tudo que é clicável.
- Cada seção entrega seu texto sem JavaScript.

## Antipadrões

Se qualquer um aparecer, a página deixou de ser da Trilho:

- **Gradiente.** A marca é chapada. Nem sutil, nem "só no fundo".
- `border-radius` grande com sombra difusa — o visual "SaaS genérico". Cantos retos ou levemente arredondados; sombra, quando houver, é dura e deslocada, como impressão fora de registro.
- Ícone de linha genérico (Lucide/Feather) decorando feature. Apoio visual vem de forma geométrica da própria marca: as faixas, o círculo, o trilho.
- Emoji em UI.
- Glassmorphism, blur de fundo, brilho.
- "Solução completa", "inovação", "transformação digital", "parceiro estratégico". Palavra que serve para qualquer empresa não descreve nenhuma.