import { BrandMark, BrandSymbol } from "@/components/brand-mark";
import { AnimatedHeading } from "@/components/animated-heading";
import { HeroVisual } from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";
import { SmoothScroll } from "@/components/smooth-scroll";

const pains = [
  {
    number: "01",
    title: "O pedido chega no WhatsApp",
    text: "A venda começa numa conversa e alguém precisa lembrar de levar os dados para o resto da operação.",
  },
  {
    number: "02",
    title: "O estoque mora na planilha",
    text: "A baixa fica para depois. Quando atualiza, a equipe já vendeu o que não estava mais disponível.",
  },
  {
    number: "03",
    title: "O financeiro fecha no caderno",
    text: "Recebimento, cobrança e prazo viram uma conferência manual no fim de um dia que já foi longo.",
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
    title: "Entramos na rotina",
    text: "Acompanhamos o caminho real do pedido, da compra, da produção e do dinheiro.",
  },
  {
    number: "02",
    title: "Desenhamos o sistema",
    text: "Cada tela nasce do trabalho que sua equipe já faz, sem obrigar a empresa a caber num pacote pronto.",
  },
  {
    number: "03",
    title: "Colocamos para rodar",
    text: "Entregamos por etapas, treinamos quem usa e ajustamos o sistema com a operação acontecendo.",
  },
];

const operations = [
  [
    "Indústria ou serviço",
    "Não importa o ramo. O fluxo nasce do que você vende.",
  ],
  [
    "Dois funcionários ou cinquenta",
    "Não importa o tamanho. Cada tela nasce de quem usa.",
  ],
  [
    "Planilha ou sistema antigo",
    "Não importa de onde parte. A gente migra o que já existe.",
  ],
  [
    "O que importa é a rotina",
    "O sistema nasce dela. Do seu jeito de trabalhar, não de um pacote pronto.",
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
              <p className="eyebrow">Software sob medida para operação real</p>
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
                A gente constrói o sistema em volta do seu negócio. Não o
                contrário. Estoque, financeiro, vendas e rotina no mesmo lugar —
                do jeito que a sua empresa já trabalha.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="hero-actions">
                <a className="button-primary" href="#contato">
                  Organizar minha operação
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
            <div className="hero-index" aria-label="Áreas conectadas pelo sistema">
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
                Quando cada parte da empresa guarda uma versão da verdade, o
                trabalho vira conferência, cobrança e improviso.
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
            <p className="eyebrow">O sistema acompanha o trabalho</p>
            <AnimatedHeading as="h2" lines={[{ text: "Do pedido ao caixa." }]} />
            <p>
              A Trilho transforma a sequência inteira da sua operação em um
              sistema claro — seja qual for o seu ramo. Cada informação entra
              uma vez e segue para onde precisa.
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
              <AnimatedHeading as="h2" lines={[{ text: "A gente entra na rotina." }]} />
              <p>
                O sistema nasce olhando a empresa por dentro. Só então a
                tecnologia começa a tomar forma.
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
              <p className="eyebrow eyebrow-brand">Seja qual for o seu negócio</p>
              <AnimatedHeading
                as="h2"
                lines={[{ text: "Seu sistema tem que reconhecer sua operação." }]}
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
              <p className="eyebrow eyebrow-ink">Sua empresa já tem um jeito</p>
              <AnimatedHeading
                as="h2"
                lines={[{ text: "Agora ela precisa de um sistema." }]}
              />
            </Reveal>
            <Reveal className="closing-action" delay={0.07}>
              <p>
                Conte como funciona aí dentro — onde a operação mais perde
                tempo. A primeira conversa começa pelo seu trabalho, não pela
                tecnologia.
              </p>
              <a className="button-dark" href="mailto:contato@usetrilho.com.br">
                Contar como funciona aqui
              </a>
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
