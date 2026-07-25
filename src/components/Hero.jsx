import { CONTACT } from '../data/config'
import './Hero.css'

const BADGES = ['Instalação Grátis', 'Suporte 24h', '100% Fibra Óptica']

function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <polyline
            className="hero__line hero__line--1"
            points="-50,620 220,620 300,540 520,540 600,460 1250,460"
          />
          <polyline
            className="hero__line hero__line--2"
            points="-50,720 180,720 260,640 700,640 780,560 1250,560"
          />
          <polyline
            className="hero__line hero__line--3"
            points="-50,180 260,180 340,260 640,260 720,340 1250,340"
          />
        </svg>
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">Fibra óptica em Fortaleza</span>
          <h1>
            Internet rápida de verdade, direto no seu bairro
          </h1>
          <p className="hero__lead">
            A FX Telecom leva fibra óptica de ponta a ponta até sua casa, com
            instalação gratuita e suporte disponível 24 horas por dia.
            Chega de conexão que trava na hora que você mais precisa.
          </p>

          <div className="hero__actions">
            <a href="#planos" className="btn btn-primary">
              Assinar agora
            </a>
            <a href={CONTACT.customerPortalUrl} className="btn btn-outline-light btn-central-cliente" id='central-cliente-link'>
              Central do Cliente
            </a>
          </div>

          <ul className="hero__badges">
            {BADGES.map((badge) => (
              <li key={badge}>
                <span aria-hidden="true">✓</span>
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__gauge">
              <div className="hero__gauge-ring">
                <div className="hero__gauge-center">
                  <strong>100%</strong>
                  <span>fibra óptica</span>
                </div>
              </div>
            </div>
            <p className="hero__card-title">Conexão estável do jeito certo</p>
            <p className="hero__card-sub">
              Sem revezar velocidade com cobre ou rádio. É fibra do início ao
              fim.
            </p>
          </div>

          <div className="hero__floating hero__floating--1">
            <strong>24h</strong>
            <span>Suporte todos os dias</span>
          </div>
          <div className="hero__floating hero__floating--2">
            <strong>R$ 0</strong>
            <span>Instalação grátis</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
