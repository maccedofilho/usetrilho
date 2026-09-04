import { BrandMark, BrandSymbol } from "@/components/brand-mark";
import { AnimatedHeading } from "@/components/animated-heading";
import { ContactForm } from "@/components/contact-form";
import { HeroVisual } from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";
import { SmoothScroll } from "@/components/smooth-scroll";

const pains = [
  {
    number: "01",
    title: "O pedido chega no WhatsApp",
    text: "A venda começa numa conversa. Depois alguém copia os dados para os outros controles.",
  },
  {
    number: "02",
    title: "O estoque mora na planilha",
    text: "A baixa fica para depois. Quando a planilha muda, a equipe já prometeu o que não estava disponível.",
  },
  {
    number: "03",
    title: "O financeiro fecha no caderno",
    text: "Recebimentos, cobranças e prazos dependem de uma conferência manual no fim do dia.",
  },
];

const modules = [
  ["Entrada", "Pedidos e atendimento"],
  ["Operação", "Estoque e produção"],
  ["Controle", "Financeiro e cobrança"],
  ["Decisão", "Indicadores do negócio"],
];

const steps = [
  {
    number: "01",
    title: "Olhamos de perto",
    text: "Seguimos pedidos, compras, produção e recebimentos junto de quem executa.",
  },
  {
    number: "02",
    title: "Organizamos as informações",
    text: "Criamos telas que fazem sentido para quem vai usar, sem atalhos genéricos.",
  },
  {
    number: "03",
    title: "Colocamos em prática",
    text: "Entregamos por etapas, treinamos a equipe e ajustamos o software durante o uso.",
  },
];

const operations = [
  [
    "Indústria ou serviço",
    "O ponto de partida é o que você vende e como entrega.",
  ],
  [
    "Equipe enxuta ou estrutura maior",
    "As telas consideram quem usa e o que cada pessoa precisa resolver.",
  ],
  [
    "Planilha ou software antigo",
    "A migração aproveita os dados e o histórico que já existem.",
  ],
  [
    "Tudo parte do uso real",
    "O sistema se adapta ao seu contexto, sem apagar o que já funciona.",
  ],
];

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <header className="site-header">
        <a className="brand-link" href="#topo" aria-label="Trilho, início">
          <BrandMark />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#problema">O problema</a>
          <a href="#sistema">O sistema</a>
          <a href="#processo">Como fazemos</a>
        </nav>
        <a className="header-cta" href="#contato">
          Falar com a Trilho
        </a>
      </header>

      <main>
        <section className="hero section-shell" id="topo">
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow">Software sob medida para negócios reais</p>
            </Reveal>
            <AnimatedHeading
              as="h1"
              delay={0.04}
              lines={[
                { text: "Sua operação." },
                { text: "Um só trilho.", className: "animated-heading-line-accent" },
              ]}
            />
            <Reveal delay={0.18}>
              <p className="hero-lead">
                A gente reúne pedidos, estoque, financeiro e vendas num software
                desenhado para o jeito que sua equipe trabalha.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="hero-actions">
                <a className="button-primary" href="#contato">
                  Unificar meu dia a dia
                </a>
                <a className="text-link" href="#sistema">
                  Ver como funciona <span aria-hidden="true">↘</span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal className="hero-visual-reveal" delay={0.12}>
            <HeroVisual />
          </Reveal>

          <Reveal className="hero-index-reveal" delay={0.32}>
            <div className="hero-index" aria-label="Áreas conectadas pela Trilho">
              <span>Estoque</span>
              <span>Financeiro</span>
              <span>Vendas</span>
              <span>Operação</span>
            </div>
          </Reveal>
        </section>

        <section className="problem-section" id="problema">
          <div className="section-shell">
            <Reveal className="section-heading section-heading-light">
              <p className="eyebrow eyebrow-brand">O problema aparece no detalhe</p>
              <AnimatedHeading as="h2" lines={[{ text: "Uma venda. Três anotações." }]} />
              <p>
                Quando cada área guarda sua própria versão, a equipe perde tempo
                conferindo, cobrando e corrigindo o que deveria seguir sozinho.
              </p>
            </Reveal>

            <div className="pain-list">
              {pains.map((pain, index) => (
                <Reveal key={pain.number} delay={index * 0.07}>
                  <article className="pain-row">
                    <span className="pain-number">{pain.number}</span>
                    <h3>{pain.title}</h3>
                    <p>{pain.text}</p>
                    <span className="pain-signal" aria-hidden="true" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="system-section section-shell" id="sistema">
          <Reveal className="section-heading system-heading">
            <p className="eyebrow">Uma informação, um caminho</p>
            <AnimatedHeading
              as="h2"
              lines={[{ text: "Do pedido ao caixa, tudo conectado." }]}
            />
            <p>
              A Trilho conecta as etapas sem impor um modelo genérico. O dado é
              registrado uma vez e chega a quem precisa, na hora certa.
            </p>
          </Reveal>

          <div className="system-map">
            <div className="system-map-mark" aria-hidden="true">
              <BrandSymbol
                className="system-mark-symbol"
                variant="filled"
              />
            </div>
            <div className="module-list">
              {modules.map(([label, title], index) => (
                <Reveal key={label} delay={index * 0.07}>
                  <div className="module-row">
                    <span className="module-index">0{index + 1}</span>
                    <span className="module-label">{label}</span>
                    <strong>{title}</strong>
                    <span className="module-dot" aria-hidden="true" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="system-outcome">
            <p className="eyebrow">O que muda</p>
            <p className="outcome-copy">
              Menos conferência. Mais decisão.
            </p>
          </Reveal>
        </section>

        <section className="process-section" id="processo">
          <div className="section-shell">
            <Reveal className="section-heading process-heading">
              <p className="eyebrow eyebrow-ink">Sem pacote pronto</p>
              <AnimatedHeading as="h2" lines={[{ text: "Da rotina para a tela." }]} />
              <p>
                Acompanhamos quem faz, o que precisa decidir e onde o tempo se
                perde antes de definir como o software vai funcionar.
              </p>
            </Reveal>

            <div className="steps-grid">
              {steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.07}>
                  <article className="step-item">
                    <span>{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="operations-section" id="operacoes">
          <div className="section-shell">
            <Reveal className="section-heading section-heading-light operation-heading">
              <p className="eyebrow eyebrow-brand">Sob medida para o seu negócio</p>
              <AnimatedHeading
                as="h2"
                lines={[{ text: "Software que se adapta à sua empresa." }]}
              />
            </Reveal>

            <div className="operation-list">
              {operations.map(([name, text], index) => (
                <Reveal key={name} delay={index * 0.07}>
                  <article className="operation-row">
                    <span className="operation-number">0{index + 1}</span>
                    <h3>{name}</h3>
                    <p>{text}</p>
                    <span className="operation-arrow" aria-hidden="true">→</span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-section" id="contato">
          <div className="section-shell closing-grid">
            <Reveal className="closing-copy">
              <p className="eyebrow eyebrow-ink">Conte onde o trabalho trava</p>
              <AnimatedHeading
                as="h2"
                lines={[{ text: "Seu fluxo começa a tomar forma." }]}
              />
            </Reveal>
            <Reveal className="closing-action" delay={0.07}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <BrandMark compact />
        <p>Software sob medida para empresas que fazem acontecer.</p>
        <p>© 2026 Trilho</p>
      </footer>
    </>
  );
}
