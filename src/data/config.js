export const SITE_CONFIG = {
  // Habilita ou desabilita o site
  ativado: true,
}

export const CONTACT = {
  phoneDisplay: '(85) 2180-7232',
  phoneTel: '558521807232',
  phoneCel: '5585985500575',
  email: 'contato@fxtelecom.com.br',
  // Link da central do assinante
  customerPortalUrl: 'https://sistema.fxtelecom.com.br/central-assinante',
}

export const PLANS = [
  {
    id: 'mega-100',
    speed: '100',
    price: '79,90',
    tagline: 'Para o dia a dia sem travar',
    description:
      'Redes sociais, streaming e reuniões online rodando liso, sem fila de espera.',
    highlight: false,
  },
  {
    id: 'mega-600',
    speed: '600',
    price: '99,90',
    tagline: 'Performance e alcance',
    description:
      'Mais velocidade e Wi-Fi 6 para conectar toda a casa com alto desempenho.',
    wifi6: true,
    badge: 'O mais pedido',
    // plano destaque
    highlight: true,
    highlightTheme: 'navy',
  },
  {
    id: 'mega-300',
    speed: '300',
    price: '89,90',
    tagline: 'A escolha da maioria',
    description:
      'Ideal para casas com vários dispositivos e várias pessoas conectadas ao mesmo tempo.',
    highlight: false,
  },
  {
    id: 'mega-700',
    speed: '700',
    price: '109,90',
    priceAfterDue: '119,90',
    tagline: 'Diversão para toda a família',
    description:
      'Ultravelocidade, Wi-Fi 6 e streaming com anúncios.',
    wifi6: true,
    streaming: '1 Streaming com anúncios',
    highlight: true,
    highlightTheme: 'red',
    badge: 'Ideal pra família toda',
  },
  {
    id: 'mega-800',
    speed: '800',
    price: '139,90',
    priceAfterDue: '149,90',
    tagline: 'Entretenimento sem interrupções',
    description:
      'Máxima velocidade e streaming premium sem anúncios.',
    streaming: '1 Streaming sem anúncios',
    highlight: false,
    wifi6: true,
  },
]

export const FEATURES = [
  {
    title: '100% Fibra Óptica',
    description:
      'Sinal estável do início ao fim, sem oscilar em horário de pico.',
  },
  {
    title: 'Instalação Rápida',
    description: 'Você assina hoje e a equipe técnica leva a fibra até sua casa sem custo.',
  },
  {
    title: 'Suporte técnico rápido',
    description: 'Time de suporte de plantão todos os dias, a qualquer hora, para resolver.',
  },
  {
    title: 'Atendimento em Fortaleza',
    description: 'Provedor local, presente nos bairros onde atuamos — perto de você de verdade.',
  },
]
