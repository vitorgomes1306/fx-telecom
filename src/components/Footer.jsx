import logo from '../assets/fx-logo.png'
import { CONTACT } from '../data/config'
import './Footer.css'
import logoAltersoft from '../assets/altersoft.png'
import Tippy from '@tippyjs/react'

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
          <span>© {year} FX Telecom. Todos os direitos reservados | Fazendo a diferença.</span>
          <span
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              color: "#999999",
            }}
          >
          
          </span>
          <Tippy
            content="Fábrica de Softwares (85) 99445.4472"
            placement="top"
            arrow={true}
            delay={[200, 0]}
            animation="shift-away"
          >
            <a
              href="https://altersoft.dev.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logoAltersoft} alt="Altersoft" width={80} />
            </a>
          </Tippy>
        </div>
      </div>
    </footer>
  )
}

export default Footer
