import { CONTACT } from '../data/config'
import './CtaBanner.css'

function CtaBanner() {
  return (
    <section id="contato" className="cta-banner">
      <div className="container cta-banner__inner">
        <div className="cta-banner__copy">
          <h2>Pronto para navegar sem travar?</h2>
          <p>
            Fale com a nossa equipe agora e leve fibra óptica de verdade para
            sua casa, com instalação rápida.
          </p>
        </div>

        <div className="cta-banner__actions">
          <a href={`tel:${CONTACT.phoneTel}`} className="cta-banner__phone">
            <span>Ligue agora</span>
            <strong>{CONTACT.phoneDisplay}</strong>
          </a>
          <div className="cta-banner__buttons">
            <a href="#planos" className="btn btn-primary">
              Assinar agora
            </a>
            <a
              href={CONTACT.customerPortalUrl}
              className="btn btn-outline-light"
            >
              Central do Cliente
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
