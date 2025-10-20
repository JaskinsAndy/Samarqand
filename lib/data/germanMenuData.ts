export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  spicy?: boolean;
  vegetarian?: boolean;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export const germanMenuData: MenuCategory[] = [
  {
    id: "salate",
    name: "Salate",
    description: "Frische und knackige Salate",
    items: [
      {
        id: "salat-1",
        name: "Auberginen-Tomaten Salat",
        description: "Auberginen, Cherrytomaten, Rucola, Süß Chili Soße",
        price: "€9,90",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800",
        vegetarian: true
      },
      {
        id: "salat-2",
        name: "Ceasar Salat",
        description: "Hühnerfleisch, Cherrytomaten, Eis Salat, Knoblauch, Zwieback, Wachteleier",
        price: "€12,90",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800",
        popular: true
      },
      {
        id: "salat-3",
        name: "Rindfleischsalat",
        description: "Rindfleisch, Paprika, Gurken, Knoblauch, Soja Soße, Koriander",
        price: "€12,90",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800"
      },
      {
        id: "salat-4",
        name: "Paprika Salat",
        description: "Paprika, Tomaten, Gurken, Kartoffeln, Auberginen, Petersilien",
        price: "€9,90",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
        vegetarian: true
      },
      {
        id: "salat-5",
        name: "Mozzarella Salat",
        description: "Tomaten, Mozzarella, Rucola",
        price: "€7,90",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
        vegetarian: true
      },
      {
        id: "salat-6",
        name: "Griechischer Salat",
        description: "Tomaten, Gurken, Zwiebeln, Schafkäse, Oliven",
        price: "€7,90",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
        vegetarian: true
      },
      {
        id: "salat-7",
        name: "Avocado Mozzarella Salat",
        description: "Avocado, Cherrytomaten, Mozzarella",
        price: "€7,90",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
        vegetarian: true
      },
      {
        id: "salat-8",
        name: "Hausgemachte Soleny Salat",
        description: "Gurken, Tomaten, Kraut",
        price: "€9,90",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800",
        vegetarian: true
      },
      {
        id: "salat-9",
        name: "Oliviersalat",
        description: "Kartoffeln, Karotten, Wurst, Eier, Erbsen, Gurke, Mayonnaise",
        price: "€9,90",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800"
      },
      {
        id: "salat-10",
        name: "Vinegret",
        description: "Kartoffeln, Rote Beete, Karotten, Zwiebeln, Salzgurken",
        price: "€9,90",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
        vegetarian: true
      },
      {
        id: "salat-11",
        name: "Wurst mit Käse",
        description: "Wurst, Käse, Mais, Mayonnaise",
        price: "€9,90",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800"
      },
      {
        id: "salat-12",
        name: "Frischer Salat",
        description: "Tomaten, Gurken, Zwiebeln",
        price: "€6,90",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
        vegetarian: true
      }
    ]
  },
  {
    id: "suppen",
    name: "Suppen",
    description: "Herzhafte traditionelle Suppen",
    items: [
      {
        id: "suppe-1",
        name: "Lagman",
        description: "Rote Paprika, Grüne Paprika, Sellerie, Fleisch, Zwiebeln, Petersilie, Knoblauch, Nudeln",
        price: "€9,90",
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800",
        popular: true
      },
      {
        id: "suppe-2",
        name: "Mastava",
        description: "Rindfleisch, Lammkuryuk, Reis, Paprika, Karotten, Kartoffeln, Koriander, Tomaten",
        price: "€9,90",
        image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800"
      },
      {
        id: "suppe-3",
        name: "Hühnersuppe",
        description: "Hühnerfleisch, Karotten, Gewürze, Fadennudeln",
        price: "€5,90",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800"
      },
      {
        id: "suppe-4",
        name: "Shurpa",
        description: "Rindfleisch, Zwiebeln, Karotten, Kartoffeln, Paprika, Gewürze",
        price: "€8,90",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800"
      }
    ]
  },
  {
    id: "speisen",
    name: "Speisen",
    description: "Authentische usbekische Gerichte",
    items: [
      {
        id: "speise-1",
        name: "Samarkand Plov",
        description: "Reis, Rindfleisch, Karotten, Zwiebeln, Erbsen, Getrocknete Trauben. Mit Frischsalat und Brot serviert",
        price: "€19,90",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800",
        popular: true
      },
      {
        id: "speise-2",
        name: "Manti (4 Stück, mit Fleisch)",
        description: "Rindfleisch, Zwiebeln, Gewürze, Lammkuryuk Fett",
        price: "€14,90",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800",
        popular: true
      },
      {
        id: "speise-3",
        name: "Manti (4 Stück, vegetarisch)",
        description: "Zucchini, Kartoffel, Zwiebel, Gewürze",
        price: "€12,90",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800",
        vegetarian: true
      },
      {
        id: "speise-4",
        name: "Samsa (4 Stück, mit Fleisch)",
        description: "Rindfleisch, Zwiebeln, Gewürze, Kuyruk Fett",
        price: "€14,90",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800"
      },
      {
        id: "speise-5",
        name: "Samsa (4 Stück, vegetarisch)",
        description: "Zucchini, Kartoffel, Zwiebel, Gewürze",
        price: "€12,90",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800",
        vegetarian: true
      },
      {
        id: "speise-6",
        name: "Pelmeni",
        description: "Teigtasche mit faschiertem Fleisch und Zwiebel",
        price: "€13,90",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800"
      }
    ]
  },
  {
    id: "grill",
    name: "Grill (Kohlegrill)",
    description: "Traditionelles zentralasiatisches Barbecue",
    items: [
      {
        id: "grill-1",
        name: "Lyula",
        description: "Faschiertes Rindfleisch, Zwiebel, Gewürze, mit Tomatensauce und Pommes serviert",
        price: "€19,90",
        image: "https://images.unsplash.com/photo-1607330289024-cdpb2c2b7f4a?w=800"
      },
      {
        id: "grill-2",
        name: "Lamm Schaschlik",
        description: "Lammspieß, Gewürze, mit Tomatensauce und Pommes serviert",
        price: "€22,90",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800",
        popular: true
      },
      {
        id: "grill-3",
        name: "Hühnerflügel",
        description: "Hühnerflügel, Gewürze, mit Tomatensauce und Pommes serviert",
        price: "€18,90",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800"
      },
      {
        id: "grill-4",
        name: "Hühnerfleisch Pargiyot",
        description: "Hühnerfleisch, Gewürze, mit Tomatensauce und Pommes serviert",
        price: "€19,90",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800"
      },
      {
        id: "grill-5",
        name: "Lammrippchen",
        description: "Lammrippchen, Gewürze, mit Tomatensauce und Pommes serviert",
        price: "€22,90",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800"
      },
      {
        id: "grill-6",
        name: "Lammkotelett",
        description: "Lammkotelett, Gewürze, mit Tomatensauce und Pommes serviert",
        price: "€24,90",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800"
      },
      {
        id: "grill-7",
        name: "Napoleon",
        description: "Geschnittenes Rindfleisch, Lammkuryuk Fett, Gewürze, mit Tomatensauce und Pommes serviert",
        price: "€24,90",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800"
      },
      {
        id: "grill-8",
        name: "Shaschlik Rulet",
        description: "Geschnittenes Rindfleisch, Lammkuryuk Fett, Gewürze, mit Tomatensauce und Pommes serviert",
        price: "€23,90",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800"
      }
    ]
  },
  {
    id: "grillplatte",
    name: "Grillplatte",
    description: "Kombinationen für Genießer",
    items: [
      {
        id: "platte-1",
        name: "Mixed Grillplatte",
        description: "2 Lyula, 1 Rulet, 1 Napoleon, 1 Hühnerflügel, 1 Pargiyot, 1 Lammfleisch, 2 Stück Lammkoteletts, 1 Lammrippen – serviert mit Tomatensauce und Pommes",
        price: "€79,90",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
        popular: true
      }
    ]
  },
  {
    id: "beilagen",
    name: "Beilagen",
    description: "Perfekte Ergänzungen zu Ihrem Hauptgericht",
    items: [
      {
        id: "beilage-1",
        name: "Brot",
        description: "Teig, Milch, Wasser, Sesam",
        price: "€4,50",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800"
      },
      {
        id: "beilage-2",
        name: "Pommes (Wedges)",
        description: "",
        price: "€4,90",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800",
        vegetarian: true
      }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Süße Versuchungen",
    items: [
      {
        id: "dessert-1",
        name: "Napoleon",
        description: "Blätterteigtorte mit Buttercreme",
        price: "€6,50",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800"
      },
      {
        id: "dessert-2",
        name: "Baklava",
        description: "Honig, Walnüssen und süßen Rosinen",
        price: "€4,90",
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800"
      },
      {
        id: "dessert-3",
        name: "Medovik",
        description: "Honigkuchen mit Schmand Creme",
        price: "€4,90",
        image: "https://images.unsplash.com/photo-1598639863386-74a17f817a5d?w=800"
      }
    ]
  },
  {
    id: "getraenke",
    name: "Getränke",
    description: "Erfrischende Getränke und traditioneller Tee",
    items: [
      {
        id: "getraenk-1",
        name: "Softdrinks (0.33L)",
        description: "Coca Cola / Zero / Light, Fanta, Eistee Zitrone, Eistee Pfirsich, Almdudler",
        price: "€3,20",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800"
      },
      {
        id: "getraenk-2",
        name: "Mineralwasser (0.33L)",
        description: "Römerquelle Still / Prickelnd",
        price: "€2,90",
        image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800"
      },
      {
        id: "getraenk-3",
        name: "Soda / Saft (0.5L)",
        description: "Himbeer-Zitrone Soda, Johannisbeer-Zitrone, Soda Sodazitron, Apfelsaft gespritzt, Orangensaft gespritzt",
        price: "€3,90",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800"
      },
      {
        id: "getraenk-4",
        name: "Heiße Getränke (1L)",
        description: "Grüner Tee Kanne, Schwarzer Tee Kanne, Minz Tee Kanne",
        price: "€3,50",
        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800"
      },
      {
        id: "getraenk-5",
        name: "Hausgemachte Getränke (0.5L / 1L)",
        description: "Hausgemachte Ayran, Hausgemachte Kompot",
        price: "€5,90 / €9,90",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800"
      },
      {
        id: "getraenk-6",
        name: "Andere Tees (1L)",
        description: "Früchte Tee Kanne, Schwarzer Tee mit Zitrone (süß)",
        price: "€5,50",
        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800"
      },
      {
        id: "getraenk-7",
        name: "Importgetränke (0.5L)",
        description: "Duschyes Zedazeni, Tarchun Zedazeni, Borjomi",
        price: "€5,90",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800"
      }
    ]
  }
];
