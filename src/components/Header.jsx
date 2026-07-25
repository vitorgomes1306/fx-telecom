import { useEffect, useState } from 'react'
import logo from '../assets/fx-logo.png'
import { CONTACT } from '../data/config'
import './Header.css'
import { Building2 } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Planos', href: '/#planos' },
  { label: 'Por que a FX', href: '/#vantagens' },
  { label: 'Contato', href: '/#contato' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a href="/#topo" className="site-header__brand">
          <img src={logo} alt="FX Telecom" />
        </a>

        <nav className={`site-header__nav ${menuOpen ? 'is-open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="site-header__nav-actions">
            <a
              href={CONTACT.customerPortalUrl}
              className="btn btn-outline btn-sm"
            >
              Central do Cliente
            </a>
            <a href="/#planos" className="btn btn-primary btn-sm">
              Assinar Agora
            </a>

            <a
              href="/empresas"
              className="btn btn-outline btn-sm btn-corporation"
            >
              <Building2 aria-hidden="true" />
              Planos corporativos
            </a>
          </div>
        </nav>

        <button
          type="button"
          className="site-header__toggle"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
