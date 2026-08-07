import { CONTACT, PLANS } from '../data/config'
import appleLogo from '../assets/logo_apple.png'
import hboLogo from '../assets/HBO_logo.svg'
import disneyLogo from '../assets/logo_disney.svg'
import globoPlayLogo from '../assets/globoPlayLogo.svg'
import './Plans.css'

const STREAMING_SERVICES = [
  { name: 'Apple TV+', logo: appleLogo },
  { name: 'HBO Max', logo: hboLogo, excludedPlanIds: ['mega-800'] },
  { name: 'Disney+', logo: disneyLogo },
  { name: 'GloboPlay', logo: globoPlayLogo, planIds: ['mega-800'] },
]

function Plans() {
  return (
    <section id="planos" className="plans">
      <div className="container">
        <div className="plans__head">
          <span className="eyebrow">Planos</span>
          <h2>Escolha a velocidade certa para sua casa</h2>
          <p>
            Todos os planos rodam em fibra óptica 100%, com instalação
            rápida e suporte 24 horas incluídos — sem letras miúdas.
          </p>
        </div>

        <div className="plans__grid">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`plan-card ${
                plan.highlight
                  ? `plan-card--highlight plan-card--${plan.highlightTheme || 'navy'}`
                  : ''
              }`}
            >
              {plan.highlight && (
                <span className="plan-card__tag">{plan.badge}</span>
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

              {plan.priceAfterDue && (
                <div className="plan-card__price-info">
                  <strong>Preço com pontualidade</strong>
                  <span>
                    Após o vencimento: R$ {plan.priceAfterDue}/mês
                  </span>
                </div>
              )}

              <p className="plan-card__description">{plan.description}</p>

              <ul className="plan-card__features">
                <li>Instalação rápida</li>
                <li>Suporte 24 horas</li>
                <li>100% fibra óptica</li>
                {plan.wifi6 && <li>Wi-Fi 6 incluso</li>}
              </ul>

              {plan.streaming && (
                <div className="plan-card__streaming">
                  <span>{plan.streaming}</span>
                  <div className="plan-card__streaming-logos">
                    {STREAMING_SERVICES.filter(
                      (service) =>
                        (!service.planIds || service.planIds.includes(plan.id)) &&
                        !service.excludedPlanIds?.includes(plan.id),
                    ).map((service) => (
                      <img
                        src={service.logo}
                        alt={service.name}
                        title={service.name}
                        key={service.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              <a
                href={`https://wa.me/${CONTACT.phoneTel}?text=Ol%C3%A1%2C%20gostaria%20de%20assinar%20o%20plano%20${plan.speed}%20MEGA%20da%20Fx Telecom.`}
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
