export const guideConfig = {
  property: {
    name: "Residencial Vivant",
    coords: [-29.68775, -53.80418],
    address: "R. Riachuelo, 341 - Centro, Santa Maria - RS",
  },
  categories: [
    { id: 'turismo', name: 'Turismo', icon: 'Camera' },
    { id: 'utilitarios', name: 'Utilitários', icon: 'ShoppingBag' },
    { id: 'restaurantes', name: 'Restaurantes & Cafés', icon: 'Utensils' },
  ],
  places: [
    // Pontos Turísticos
    {
      id: 1,
      name: "Shopping Praça Nova",
      category: "turismo",
      coords: [-29.69800, -53.83500],
      description: "Maior shopping da cidade, com ampla variedade de lojas, praça de alimentação, cinema e opções de lazer.",
      image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=400&h=250&fit=crop",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.69800,-53.83500",
        apple: "https://maps.apple.com/?ll=-29.69800,-53.83500&q=Shopping%20Praça%20Nova"
      }
    },
    {
      id: 2,
      name: "Royal Plaza Shopping",
      category: "turismo",
      coords: [-29.69014, -53.79546],
      description: "Shopping central e de fácil acesso, com boas opções de restaurantes, lojas e cinema.",
      image: "https://images.unsplash.com/photo-1567449303078-57ad995bd17a?w=400&h=250&fit=crop",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.69014,-53.79546",
        apple: "https://maps.apple.com/?ll=-29.69014,-53.79546&q=Royal%20Plaza%20Shopping"
      }
    },
    {
      id: 3,
      name: "Calçadão Salvador Isaia",
      category: "turismo",
      coords: [-29.68500, -53.80800],
      description: "Principal área comercial do Centro, ideal para passear, fazer compras e conhecer o movimento local.",
      image: "https://images.unsplash.com/photo-1517732359359-51929329306b?w=400&h=250&fit=crop",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.68500,-53.80800",
        apple: "https://maps.apple.com/?ll=-29.68500,-53.80800&q=Calçadão%20Salvador%20Isaia"
      }
    },
    {
      id: 4,
      name: "UFSM",
      category: "turismo",
      coords: [-29.71601, -53.71618],
      description: "Uma das maiores universidades do país, com áreas verdes e importância histórica e cultural.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.71601,-53.71618",
        apple: "https://maps.apple.com/?ll=-29.71601,-53.71618&q=UFSM"
      }
    },
    {
      id: 5,
      name: "Vila Belga",
      category: "turismo",
      coords: [-29.67920, -53.80770],
      description: "Conjunto histórico com arquitetura preservada, antiga vila ferroviária e cartão-postal da cidade.",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=250&fit=crop",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.67920,-53.80770",
        apple: "https://maps.apple.com/?ll=-29.67920,-53.80770&q=Vila%20Belga"
      }
    },

    // Utilitários
    {
      id: 6,
      name: "Farmácia Droga Raia",
      category: "utilitarios",
      coords: [-29.68500, -53.81500],
      description: "Farmácia próxima com ampla rede de atendimento.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.68500,-53.81500",
        apple: "https://maps.apple.com/?ll=-29.68500,-53.81500&q=Droga%20Raia"
      }
    },
    {
      id: 7,
      name: "Farmácia São João",
      category: "utilitarios",
      coords: [-29.70547, -53.72358],
      description: "Rede de farmácias tradicional na região.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.70547,-53.72358",
        apple: "https://maps.apple.com/?ll=-29.70547,-53.72358&q=Farmácia%20São%20João"
      }
    },
    {
      id: 8,
      name: "Mercado 24h UFFA",
      category: "utilitarios",
      coords: [-29.68500, -53.80900],
      description: "Conveniência e mercado aberto 24h.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.68500,-53.80900",
        apple: "https://maps.apple.com/?ll=-29.68500,-53.80900&q=Mercado%20UFFA"
      }
    },
    {
      id: 9,
      name: "Mercado Rede Super",
      category: "utilitarios",
      coords: [-29.68700, -53.80400],
      description: "Supermercado localizado na mesma rua do imóvel.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.68700,-53.80400",
        apple: "https://maps.apple.com/?ll=-29.68700,-53.80400&q=Mercado%20Rede%20Super"
      }
    },
    {
      id: 10,
      name: "Academia Celera",
      category: "utilitarios",
      coords: [-29.68300, -53.80600],
      description: "Bom maquinário e diárias com valor acessível.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.68300,-53.80600",
        apple: "https://maps.apple.com/?ll=-29.68300,-53.80600&q=Academia%20Celera"
      }
    },
    {
      id: 11,
      name: "Lavanderia expressa 60 Minutos",
      category: "utilitarios",
      coords: [-29.69000, -53.79500],
      description: "Aberta 24h e self service.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.69000,-53.79500",
        apple: "https://maps.apple.com/?ll=-29.69000,-53.79500&q=Lavanderia%2060%20Minutos"
      }
    },

    // Restaurantes e Cafés
    {
      id: 12,
      name: "Restaurante Tuiuti Grill",
      category: "restaurantes",
      coords: [-29.68800, -53.80100],
      description: "Opção prática para o dia a dia.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.68800,-53.80100",
        apple: "https://maps.apple.com/?ll=-29.68800,-53.80100&q=Tuiuti%20Grill"
      }
    },
    {
      id: 13,
      name: "Churrascaria Tertulia",
      category: "restaurantes",
      coords: [-29.69100, -53.79600],
      description: "Tradicional churrascaria em Santa Maria.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.69100,-53.79600",
        apple: "https://maps.apple.com/?ll=-29.69100,-53.79600&q=Churrascaria%20Tertulia"
      }
    },
    {
      id: 14,
      name: "Terrazo Restobar",
      category: "restaurantes",
      coords: [-29.68600, -53.80200],
      description: "Restaurante e bar moderno, ótimo para jantar ou drinks.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.68600,-53.80200",
        apple: "https://maps.apple.com/?ll=-29.68600,-53.80200&q=Terrazo%20Restobar"
      }
    },
    {
      id: 15,
      name: "Armazém Osmar Pereira",
      category: "restaurantes",
      coords: [-29.68700, -53.80900],
      description: "Cafeteria de excelente qualidade. Ambiente leve e moderno.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.68700,-53.80900",
        apple: "https://maps.apple.com/?ll=-29.68700,-53.80900&q=Armazém%20Osmar%20Pereira"
      }
    },
    {
      id: 16,
      name: "Restaurante e bar De Boas",
      category: "restaurantes",
      coords: [-29.68700, -53.80900],
      description: "Bom para petiscar e tomar uma cerveja.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.68700,-53.80900",
        apple: "https://maps.apple.com/?ll=-29.68700,-53.80900&q=De%20Boas"
      }
    },
    {
      id: 17,
      name: "DeliGusto Lanches",
      category: "restaurantes",
      tags: ["tradicional"],
      coords: [-29.68400, -53.80300],
      description: "Boa opção para provar o tradicional xis de Santa Maria.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.68400,-53.80300",
        apple: "https://maps.apple.com/?ll=-29.68400,-53.80300&q=DeliGusto%20Lanches"
      }
    },
    {
      id: 18,
      name: "Padaria DiMarzari",
      category: "restaurantes",
      coords: [-29.71500, -53.72500],
      description: "Padaria com boas opções de tortas e lanches.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=-29.71500,-53.72500",
        apple: "https://maps.apple.com/?ll=-29.71500,-53.72500&q=Padaria%20DiMarzari"
      }
    }
  ]
};
