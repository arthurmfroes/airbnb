export const guideConfig = {
  property: {
    name: "Residencial Vivant",
    coords: [-29.68775, -53.80418],
    address: "R. Riachuelo, 341 - Centro, Santa Maria - RS",
  },
  categories: [
    { id: 'restaurantes', name: 'Restaurantes & Cafés', icon: 'Utensils' },
    { id: 'utilitarios', name: 'Utilitários', icon: 'ShoppingBag' },
    { id: 'turismo', name: 'Turismo', icon: 'Camera' },
  ],
  places: [
    {
      id: 1,
      name: "Shopping Praça Nova",
      category: "turismo",
      subcategory: "Shoppings",
      display: "both",
      coords: [-29.7054, -53.8451],
      description: "Maior shopping da cidade, com ampla variedade de lojas, praça de alimentação, cinema e opções de lazer.",
      image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=400&h=250&fit=crop",
      links: {
        url: "https://www.google.com/maps/search/?api=1&query=Shopping+Praça+Nova+Santa+Maria+RS",
        type: "google"
      }
    },
    {
      id: 2,
      name: "Royal Plaza Shopping",
      category: "turismo",
      subcategory: "Shoppings",
      display: "both",
      coords: [-29.6892, -53.7934],
      description: "Shopping central e de fácil acesso, com boas opções de restaurantes, lojas e cinema.",
      image: "https://images.unsplash.com/photo-1567449303078-57ad995bd17a?w=400&h=250&fit=crop",
      links: {
        url: "https://www.google.com/maps/search/?api=1&query=Royal+Plaza+Shopping+Santa+Maria+RS",
        type: "google"
      }
    },
    {
      id: 3,
      name: "Calçadão Salvador Isaia",
      category: "turismo",
      subcategory: "Passeios",
      display: "both",
      coords: [-29.6871, -53.8092],
      description: "Principal área comercial do Centro, ideal para passear, fazer compras e conhecer o movimento local.",
      image: "https://images.unsplash.com/photo-1517732359359-51929329306b?w=400&h=250&fit=crop",
      links: {
        url: "https://www.google.com/maps/search/?api=1&query=Calçadão+Salvador+Isaia+Santa+Maria+RS",
        type: "google"
      }
    },
    {
      id: 4,
      name: "UFSM",
      category: "turismo",
      subcategory: "Passeios",
      display: "both",
      coords: [-29.7173, -53.7170],
      description: "Uma das maiores universidades do país, com áreas verdes e importância histórica e cultural.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
      links: {
        url: "https://www.google.com/maps/search/?api=1&query=UFSM+Santa+Maria+RS",
        type: "google"
      }
    },
    {
      id: 5,
      name: "Vila Belga",
      category: "turismo",
      subcategory: "Passeios",
      display: "both",
      coords: [-29.6811, -53.8064],
      description: "Conjunto histórico com arquitetura preservada, antiga vila ferroviária e cartão-postal da cidade.",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=250&fit=crop",
      links: {
        url: "https://www.google.com/maps/search/?api=1&query=Vila+Belga+Santa+Maria+RS",
        type: "google"
      }
    },
    {
      id: 6,
      name: "Farmácia Droga Raia",
      category: "utilitarios",
      subcategory: "Farmácias",
      display: "both",
      coords: [-29.6951, -53.7892],
      description: "Farmácia próxima com ampla rede de atendimento.",
      links: {
        url: "https://www.google.com/maps/search/?api=1&query=Droga+Raia+Santa+Maria+RS",
        type: "google"
      }
    },
    {
      id: 7,
      name: "Farmácia São João",
      category: "utilitarios",
      subcategory: "Farmácias",
      display: "both",
      coords: [-29.6953, -53.7901],
      description: "Rede de farmácias tradicional na região.",
      links: {
        url: "https://www.google.com/maps/search/?api=1&query=Farmácia+São+João+Santa+Maria+RS",
        type: "google"
      }
    },
    {
      id: 8,
      name: "Mercado 24h UFFA",
      category: "utilitarios",
      subcategory: "Mercados",
      display: "both",
      coords: [-29.6878, -53.8143],
      description: "Conveniência e mercado aberto 24h.",
      links: {
        url: "https://www.google.com/maps/search/?api=1&query=Mercado+UFFA+Santa+Maria+RS",
        type: "google"
      }
    },
    {
      id: 9,
      name: "Mercado Rede Super",
      category: "utilitarios",
      subcategory: "Mercados",
      display: "both",
      coords: [-29.6912, -53.8154],
      description: "Supermercado localizado na mesma rua do imóvel.",
      links: {
        url: "https://www.google.com/maps/search/?api=1&query=Rede+Super+Santa+Maria+RS",
        type: "google"
      }
    },
    {
      id: 10,
      name: "Academia Celera",
      category: "utilitarios",
      subcategory: "Serviços",
      display: "both",
      coords: [-29.6842, -53.8081],
      description: "Bom maquinário e diárias com valor acessível.",
      links: {
        url: "https://www.google.com/maps/search/?api=1&query=Celera+Gym+Academia+Santa+Maria",
        type: "google"
      }
    },
    {
      id: 11,
      name: "Lavanderia expressa 60 Minutos",
      category: "utilitarios",
      subcategory: "Serviços",
      display: "both",
      coords: [-29.6855, -53.8105],
      description: "Aberta 24h e self service.",
      links: {
        url: "https://www.google.com/maps/search/?api=1&query=Lavanderia+60+Minutos+Santa+Maria+RS",
        type: "google"
      }
    },
    {
      id: 12,
      name: "Restaurante Tuiuti Grill",
      category: "restaurantes",
      subcategory: "Restaurantes",
      display: "both",
      coords: [-29.6891, -53.8182],
      description: "Opção prática para o dia a dia.",
      links: {
        url: "https://www.instagram.com/tuiuti_grill/",
        label: "Ver Instagram",
        type: "instagram"
      }
    },
    {
      id: 13,
      name: "Churrascaria Tertulia",
      category: "restaurantes",
      subcategory: "Restaurantes",
      display: "both",
      coords: [-29.6943, -53.7912],
      description: "Tradicional churrascaria em Santa Maria.",
      links: {
        url: "https://churrascariatertulia.com.br/cardapio",
        label: "Ver Cardápio",
        type: "menu"
      }
    },
    {
      id: 14,
      name: "Terrazo Restobar",
      category: "restaurantes",
      subcategory: "Restaurantes",
      display: "both",
      coords: [-29.6884, -53.7981],
      description: "Restaurante e bar moderno, ótimo para jantar ou drinks.",
      links: {
        url: "https://www.google.com/maps/search/?api=1&query=Terrazo+Restobar+Santa+Maria+RS",
        type: "google"
      }
    },
    {
      id: 15,
      name: "Armazém Osmar Pereira",
      category: "restaurantes",
      subcategory: "Cafés & Lanches",
      display: "both",
      coords: [-29.6862, -53.8121],
      description: "Cafeteria de excelente qualidade. Ambiente leve e moderno.",
      links: {
        url: "https://www.google.com/maps/search/?api=1&query=Armazém+Osmar+Pereira+Santa+Maria+RS",
        type: "google"
      }
    },
    {
      id: 16,
      name: "Restaurante e bar De Boas",
      category: "restaurantes",
      subcategory: "Restaurantes",
      display: "both",
      coords: [-29.6865, -53.8124],
      description: "Bom para petiscar e tomar uma cerveja.",
      links: {
        url: "https://www.google.com/maps/search/?api=1&query=Restaurante+De+Boas+Santa+Maria+RS",
        type: "google"
      }
    },
    {
      id: 17,
      name: "DeliGusto Lanches",
      category: "restaurantes",
      subcategory: "Cafés & Lanches",
      display: "both",
      tags: ["tradicional"],
      coords: [-29.6852, -53.8113],
      description: "Boa opção para provar o tradicional xis de Santa Maria.",
      links: {
        url: "https://www.google.com/maps/search/?api=1&query=DeliGusto+Lanches+Santa+Maria+RS",
        type: "google"
      }
    },
    {
      id: 18,
      name: "Padaria DiMarzari",
      category: "restaurantes",
      subcategory: "Cafés & Lanches",
      display: "both",
      coords: [-29.7055, -53.7236],
      description: "Padaria com boas opções de tortas e lanches.",
      links: {
        url: "https://www.google.com/maps/search/?api=1&query=Padaria+DiMarzari+Santa+Maria+RS",
        type: "google"
      }
    }
  ]
};
