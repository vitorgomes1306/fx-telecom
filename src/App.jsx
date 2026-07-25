import Header from './components/Header'
import Hero from './components/Hero'
import Plans from './components/Plans'
import Features from './components/Features'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import SiteDisabled from './components/SiteDisabled'
import { SITE_CONFIG } from './data/config'

function App() {
  
  // verifica se o site está ativo, caso contrário exibe a página de site desativado
  if (!SITE_CONFIG.ativado) {
    return <SiteDisabled />
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Plans />
        <Features />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}

export default App
