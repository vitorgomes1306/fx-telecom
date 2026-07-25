import worksImage from '../assets/works.png'
import './Corporation.css'
import { CONTACT } from '../data/config'

const WHATSAPP_URL =
  `https://api.whatsapp.com/send?phone=${CONTACT.phoneCel}&text=Falar sobre plano empresarial FX Telecom`

const CORPORATE_PLANS = [
  { speed: '200', unit: 'FULL', price: '600,00' },
  { speed: '500', unit: 'FULL', price: '750,00', featured: true },
  { speed: '1GB', unit: 'FULL', price: '990,00' },
]

const PLAN_FEATURES = [
  'Ultravelocidade',
  'Atendimento Premium',
  'Velocidade Full Duplex',
  'Link Dedicado',
  'SLA em 4 horas',
  'Suporte Exclusivo',
]

const COMPANY_LOGOS = Object.entries(
  import.meta.glob('../assets/clientes/*.jpeg', {
    eager: true,
    import: 'default',
  }),
)
  .sort(([firstPath], [secondPath]) =>
    firstPath.localeCompare(secondPath, undefined, { numeric: true }),
  )
  .map(([path, image], index) => ({
    id: path,
    image,
    name: `Empresa cliente ${index + 1}`,
  }))

const DIFFERENTIALS = [
  {
    number: '01',
    title: 'Desempenho e Garantia',
    description:
      'Temos o plano ideal para o seu negócio, com conexão Full Duplex — a mesma velocidade de download e upload. Nossa rede robusta permite expandir sua capacidade de forma simples e eficiente.',
  },
  {
    number: '02',
    title: 'Velocidade e Internet Escalável',
    description:
      'Conexão 100% fibra óptica com equipamentos de última geração, garantindo estabilidade e alto desempenho. Sua empresa recebe 100% do link contratado.',
  },
  {
    number: '03',
    title: 'Link Para Provedores',
    description:
      'Rede própria e redundante, conectada às principais operadoras, PTTs-CE e PNIs de Fortaleza, com monitoramento 24/7 e rápido tempo de resposta.',
  },
]

function CompanyItems({ duplicate = false }) {
  return COMPANY_LOGOS.map((company) => (
    <div
      className="corporation-company"
      key={`${company.id}-${duplicate ? 'duplicate' : 'original'}`}
      aria-hidden={duplicate || undefined}
    >
      <img
        src={company.image}
        alt={duplicate ? '' : company.name}
        loading="lazy"
      />
    </div>
  ))
}

function Corporation() {
  return (
    <section id="empresas" className="corporation">
      <div className="corporation-hero">
        <div className="container corporation-hero__grid">
          <div className="corporation-hero__content">
            <span className="eyebrow corporation__eyebrow">FX Empresas</span>
            <h2>Conecte sua empresa à ultravelocidade que ela merece!</h2>
            <p>
              Em um mercado cada vez mais competitivo, uma conexão de alta
              performance é essencial para garantir produtividade, estabilidade
              e crescimento.
            </p>
            <p>
              Oferecemos planos empresariais sob medida, tecnologia de ponta e
              suporte exclusivo para empresas de todos os portes. Conte com uma
              internet confiável, preparada para acompanhar a rotina intensa do
              seu negócio.
            </p>
            <a
              className="btn btn-primary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Verificar cobertura
            </a>
          </div>

          <div className="corporation-hero__visual">
            <img
              src={worksImage}
              alt="Profissional trabalhando conectado à internet FX Telecom"
            />
            <div className="corporation-hero__badge">
              <strong>100%</strong>
              <span>Fibra óptica</span>
            </div>
          </div>
        </div>
      </div>

      <div className="corporation-plans">
        <div className="container">
          <div className="corporation-section-head">
            <span className="eyebrow">Planos empresariais</span>
            <h2>Performance para negócios que não podem parar</h2>
            <p>Link dedicado, velocidade simétrica e atendimento prioritário.</p>
          </div>

          <div className="corporation-plans__grid">
            {CORPORATE_PLANS.map((plan) => (
              <article
                className={`corporation-plan ${plan.featured ? 'corporation-plan--featured' : ''}`}
                key={plan.speed}
              >
                {plan.featured && (
                  <span className="corporation-plan__label">Recomendado</span>
                )}
                <a
                  className="corporation-plan__coverage"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Verificar disponibilidade de cobertura
                </a>
                <div className="corporation-plan__speed">
                  <strong>{plan.speed}</strong>
                  <span>{plan.unit}</span>
                </div>
                <ul className="corporation-plan__features">
                  {PLAN_FEATURES.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="corporation-plan__price">
                  <span>R$</span>
                  <strong>{plan.price}</strong>
                  <small>Mensais</small>
                </div>
                <a
                  className={`btn btn-block ${plan.featured ? 'btn-primary' : 'btn-outline'}`}
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Contratar agora
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="corporation-clients" aria-label="Empresas conectadas">
        <div className="container corporation-clients__head">
          <p>Empresas que crescem conectadas com a FX Telecom</p>
        </div>
        <div className="corporation-carousel">
          <div className="corporation-carousel__track">
            <CompanyItems />
            <CompanyItems duplicate />
          </div>
        </div>
      </div>

      <div className="corporation-differentials">
        <div className="container">
          <div className="corporation-section-head corporation-section-head--left">
            <span className="eyebrow">Diferencial FX Telecom Empresas</span>
            <h2>Infraestrutura preparada para o futuro do seu negócio</h2>
          </div>
          <div className="corporation-differentials__grid">
            {DIFFERENTIALS.map((item) => (
              <article className="corporation-differential" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Corporation
