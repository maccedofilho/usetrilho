# Movimento — a gramática de animação da Trilho

O produto é organização. Uma página que se move de forma errática desmente o que vende. O movimento aqui é **calmo, decidido e curto** — não é festa, é uma máquina bem regulada.

Princípio único, do qual tudo decorre: **entrada rápida, saída lenta, deslocamento curto.** O elemento chega com convicção e assenta com suavidade.

## Curvas

| Uso | Curva | Por quê |
|---|---|---|
| Entrada de elemento (reveal) | `cubic-bezier(0.22, 1, 0.36, 1)` | Sai forte e desacelera longo. É o que dá a sensação "cara". |
| Movimento entre estados (hover, toggle) | `cubic-bezier(0.65, 0, 0.35, 1)` | Simétrica, previsível. |
| Saída/desaparecimento | `cubic-bezier(0.4, 0, 1, 1)` | Acelera e some. Não se demora no que está indo embora. |

`ease-in-out` do CSS e `linear` estão fora — o primeiro é morno, o segundo é robótico. As curvas estão como variáveis em `assets/globals.css`.

**Nunca usar spring com bounce.** Elástico é vocabulário de app de consumo, não de software de operação. Se usar `spring` do Motion, é sem overshoot (`bounce: 0`).

## Durações

| Tipo | Duração |
|---|---|
| Micro (hover, foco, cor) | 150–200ms |
| Reveal de elemento | 500–600ms |
| Transição de seção / peça grande | 700–800ms |
| Teto absoluto | **800ms** |

Acima de 800ms a animação vira espera, e espera é a coisa que o cliente da Trilho mais odeia — é literalmente o problema que ele quer resolver.

## Reveal de scroll

O padrão da página. Cada seção entra assim:

- Deslocamento: **16–24px**, sempre para cima (`y: 24 → 0`). Nunca 60px, nunca lateral, nunca escala. Deslocamento grande é o erro nº 1 — parece amador e dá enjoo no celular.
- Opacidade 0 → 1 junto.
- Dispara quando ~25% do elemento entra na viewport, e **uma vez só** (`once: true`). Elemento que reanima ao rolar de volta é ruído.
- **Stagger de 60–80ms** entre irmãos (itens de lista, cards). É o que transforma três reveals em um gesto só.

```tsx
"use client";
import * as motion from "motion/react-client";

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
/>
```

Um movimento por elemento. Opacidade + `y` é um gesto. Opacidade + `y` + escala + rotação é uma confusão.

## Scroll suave (Lenis)

Lenis vale a pena — é o que separa a página que "desliza" da que "pula". Mas:

- Ligar **no fim**, quando as seções já existirem. Lenis + animação 3D ligada cedo demais produz deslize estranho difícil de diagnosticar.
- `lerp: 0.1` (padrão) é o certo. Valor mais baixo dá sensação de peso e atraso — o usuário sente que o site não obedece.
- Desligar completamente sob `prefers-reduced-motion`. Não reduzir: **desligar**.
- Nada de scroll-jacking. Rolagem que sequestra o controle (uma seção por vez, snap forçado) é hostil, e no celular é pior ainda.

## Parallax

Permitido, com disciplina: **no máximo 2 camadas, deslocamento de até 8%**. Parallax forte briga com o texto e destrói a legibilidade no celular. Se o efeito é perceptível como "efeito", já passou do ponto.

## Texto

- Headline pode entrar por linha (não por letra). Letra por letra é vocabulário de portfólio, não de empresa que vende software de gestão.
- **Parágrafo não anima palavra por palavra.** O cliente está lendo, não assistindo.
- Números (métricas, preços) podem ter count-up — é o único caso em que o movimento carrega informação. Duração 800ms, `once: true`.

## O que nunca se anima

- Cor de texto em bloco de leitura.
- Layout que causa reflow (`width`, `height`, `top`, `left`). Só `transform` e `opacity` — o resto trava o scroll no celular.
- Elemento acima da dobra que o usuário precisa ler de imediato. O hero **não** faz fade-in de 600ms: quem chegou quer ler agora.
- Botão de CTA. Ele está lá, sempre, sólido. Hover é 150ms de cor, e acabou.

## Reduced motion

`prefers-reduced-motion: reduce` desliga Lenis, parallax, reveals e congela o 3D. O `assets/globals.css` já corta transições e animações globalmente, mas **animações via JS (Motion) precisam ser tratadas no código**: usar `useReducedMotion()` e renderizar o estado final direto.

O elemento não some — ele aparece pronto.