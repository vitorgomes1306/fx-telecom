import logo from '../assets/fx-logo.png'
import { CONTACT } from '../data/config'
import './SiteDisabled.css'

function SiteDisabled() {
  return (
    <main className="site-disabled">
      <div className="site-disabled__glow site-disabled__glow--top" />
      <div className="site-disabled__glow site-disabled__glow--bottom" />

      <section className="site-disabled__card" aria-labelledby="site-disabled-title">
        <img className="site-disabled__logo" src={logo} alt="FX Telecom" />

        <div className="site-disabled__icon" aria-hidden="true">
          <span />
        </div>

        <p className="site-disabled__eyebrow">Aviso importante</p>
        <h1 id="site-disabled-title">Site temporariamente desativado</h1>
        <p className="site-disabled__message">
          No momento, nosso site não está disponível. Para atendimento ou mais
          informações, fale com a nossa equipe.
        </p>

        <a
          className="btn btn-primary site-disabled__contact"
          href={`tel:+${CONTACT.phoneTel}`}
        >
          Ligue {CONTACT.phoneDisplay}
        </a>
      </section>

      <p className="site-disabled__footer">
        FX Telecom · Conectando você ao que importa
      </p>
    </main>
  )
}

export default SiteDisabled
