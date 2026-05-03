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
        google: "https://www.google.com/maps/search/?api=1&query=Shopping+Praça+Nova+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=Shopping+Praça+Nova+Santa+Maria"
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
        google: "https://www.google.com/maps/search/?api=1&query=Royal+Plaza+Shopping+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=Royal+Plaza+Shopping+Santa+Maria"
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
        google: "https://www.google.com/maps/search/?api=1&query=Calçadão+Salvador+Isaia+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=Calçadão+Salvador+Isaia+Santa+Maria"
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
        google: "https://www.google.com/maps/search/?api=1&query=UFSM+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=UFSM+Santa+Maria"
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
        google: "https://www.google.com/maps/search/?api=1&query=Vila+Belga+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=Vila+Belga+Santa+Maria"
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
        google: "https://www.google.com/maps/search/?api=1&query=Droga+Raia+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=Droga+Raia+Santa+Maria"
      }
    },
    {
      id: 7,
      name: "Farmácia São João",
      category: "utilitarios",
      coords: [-29.70547, -53.72358],
      description: "Rede de farmácias tradicional na região.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=Farmácia+São+João+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=Farmácia+São+João+Santa+Maria"
      }
    },
    {
      id: 8,
      name: "Mercado 24h UFFA",
      category: "utilitarios",
      coords: [-29.68500, -53.80900],
      description: "Conveniência e mercado aberto 24h.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=Mercado+UFFA+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=Mercado+UFFA+Santa+Maria"
      }
    },
    {
      id: 9,
      name: "Mercado Rede Super",
      category: "utilitarios",
      coords: [-29.68700, -53.80400],
      description: "Supermercado localizado na mesma rua do imóvel.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=Rede+Super+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=Rede+Super+Santa+Maria"
      }
    },
    {
      id: 10,
      name: "Academia Celera",
      category: "utilitarios",
      coords: [-29.68300, -53.80600],
      description: "Bom maquinário e diárias com valor acessível.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=Academia+Celera+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=Academia+Celera+Santa+Maria"
      }
    },
    {
      id: 11,
      name: "Lavanderia expressa 60 Minutos",
      category: "utilitarios",
      coords: [-29.69000, -53.79500],
      description: "Aberta 24h e self service.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=Lavanderia+60+Minutos+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=Lavanderia+60+Minutos+Santa+Maria"
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
        google: "https://www.google.com/maps/search/?api=1&query=Tuiuti+Grill+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=Tuiuti+Grill+Santa+Maria"
      }
    },
    {
      id: 13,
      name: "Churrascaria Tertulia",
      category: "restaurantes",
      coords: [-29.69100, -53.79600],
      description: "Tradicional churrascaria em Santa Maria.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=Churrascaria+Tertulia+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=Churrascaria+Tertulia+Santa+Maria"
      }
    },
    {
      id: 14,
      name: "Terrazo Restobar",
      category: "restaurantes",
      coords: [-29.68600, -53.80200],
      description: "Restaurante e bar moderno, ótimo para jantar ou drinks.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=Terrazo+Restobar+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=Terrazo+Restobar+Santa+Maria"
      }
    },
    {
      id: 15,
      name: "Armazém Osmar Pereira",
      category: "restaurantes",
      coords: [-29.68700, -53.80900],
      description: "Cafeteria de excelente qualidade. Ambiente leve e moderno.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=Armazém+Osmar+Pereira+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=Armazém+Osmar+Pereira+Santa+Maria"
      }
    },
    {
      id: 16,
      name: "Restaurante e bar De Boas",
      category: "restaurantes",
      coords: [-29.68700, -53.80900],
      description: "Bom para petiscar e tomar uma cerveja.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=Restaurante+De+Boas+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=Restaurante+De+Boas+Santa+Maria"
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
        google: "https://www.google.com/maps/search/?api=1&query=DeliGusto+Lanches+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=DeliGusto+Lanches+Santa+Maria"
      }
    },
    {
      id: 18,
      name: "Padaria DiMarzari",
      category: "restaurantes",
      coords: [-29.71500, -53.72500],
      description: "Padaria com boas opções de tortas e lanches.",
      links: {
        google: "https://www.google.com/maps/search/?api=1&query=Padaria+DiMarzari+Santa+Maria+RS",
        apple: "https://maps.apple.com/?q=Padaria+DiMarzari+Santa+Maria"
      }
    }
  ]
};
