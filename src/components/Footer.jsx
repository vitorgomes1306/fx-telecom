import logo from '../assets/fx-logo.png'
import { CONTACT } from '../data/config'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__logo-plate">
            <img src={logo} alt="FX Telecom" />
          </span>
          <p>
            Provedor de internet fibra óptica atuando em bairros de
            Fortaleza — instalação gratuita e suporte 24 horas.
          </p>
        </div>

        <div className="site-footer__col">
          <h4>Navegação</h4>
          <ul>
            <li>
              <a href="#planos">Planos</a>
            </li>
            <li>
              <a href="#vantagens">Por que a FX</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Atendimento</h4>
          <ul>
            <li>
              <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
            </li>
            <li>
              <a href={CONTACT.customerPortalUrl}>Central do Cliente</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <span>© {year} FX Telecom. Todos os direitos reservados.</span>
          <span>Fazendo a diferença.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
