import { FEATURES } from '../data/config'
import './Features.css'

const ICONS = {
  '100% Fibra Óptica': (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M3 12h4l2-5 4 10 2-5h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'Instalação Grátis': (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M4 20V10l8-6 8 6v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 20v-6h6v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'Suporte 24 Horas': (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'Atendimento em Fortaleza': (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
}

function Features() {
  return (
    <section id="vantagens" className="features">
      <div className="container features__inner">
        <div className="features__intro">
          <span className="eyebrow">Por que a FX Telecom</span>
          <h2>
            Internet boa não devia ser exceção — é o que a gente entrega
            todo dia
          </h2>
          <p>
            Somos um provedor de Fortaleza cuidando de clientes de Fortaleza.
            Sem call center distante, sem espera infinita: fibra de verdade e
            gente pronta pra resolver.
          </p>
        </div>

        <div className="features__grid">
          {FEATURES.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <span className="feature-card__icon">
                {ICONS[feature.title]}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
