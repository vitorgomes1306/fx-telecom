import { CONTACT, PLANS } from '../data/config'
import './Plans.css'

function Plans() {
  return (
    <section id="planos" className="plans">
      <div className="container">
        <div className="plans__head">
          <span className="eyebrow">Planos</span>
          <h2>Escolha a velocidade certa para sua casa</h2>
          <p>
            Todos os planos rodam em fibra óptica 100%, com instalação
            gratuita e suporte 24 horas incluídos — sem letras miúdas.
          </p>
        </div>

        <div className="plans__grid">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`plan-card ${plan.highlight ? 'plan-card--highlight' : ''}`}
            >
              {plan.highlight && (
                <span className="plan-card__tag">Mais escolhido</span>
              )}

              <p className="plan-card__tagline">{plan.tagline}</p>

              <div className="plan-card__speed">
                <strong>{plan.speed}</strong>
                <span>MEGA</span>
              </div>

              <div className="plan-card__price">
                <span className="plan-card__currency">R$</span>
                <span className="plan-card__value">{plan.price}</span>
                <span className="plan-card__period">/mês</span>
              </div>

              <p className="plan-card__description">{plan.description}</p>

              <ul className="plan-card__features">
                <li>Instalação grátis</li>
                <li>Suporte 24 horas</li>
                <li>100% fibra óptica</li>
              </ul>

              <a
                href={`tel:${CONTACT.phoneTel}`}
                className={`btn btn-block ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}
              >
                Assinar agora
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans
