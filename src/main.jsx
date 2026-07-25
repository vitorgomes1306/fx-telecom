import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CorporationPage from './pages/CorporationPage.jsx'
import SiteDisabled from './components/SiteDisabled.jsx'
import { SITE_CONFIG } from './data/config.js'

const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'

const activePage =
  normalizedPath === '/empresas' ? <CorporationPage /> : <App />
const rootPage = SITE_CONFIG.ativado ? activePage : <SiteDisabled />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {rootPage}
  </StrictMode>,
)
