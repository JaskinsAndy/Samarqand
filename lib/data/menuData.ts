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

export const menuData: MenuCategory[] = [
  {
    id: "plov",
    name: "Plov (Pilaf)",
    description: "The crown jewel of Uzbek cuisine",
    items: [
      {
        id: "plov-1",
        name: "Traditional Samarqand Plov",
        description: "Aromatic rice cooked with tender lamb, carrots, onions, and authentic spices. Our signature dish.",
        price: "€18.90",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800",
        popular: true
      },
      {
        id: "plov-2",
        name: "Chicken Plov",
        description: "Delicate chicken pieces with golden rice, raisins, and chickpeas.",
        price: "€16.90",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800"
      },
      {
        id: "plov-3",
        name: "Vegetarian Plov",
        description: "Fragrant rice with seasonal vegetables, dried fruits, and nuts.",
        price: "€14.90",
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=800",
        vegetarian: true
      }
    ]
  },
  {
    id: "manti",
    name: "Manti & Dumplings",
    description: "Handcrafted steamed dumplings",
    items: [
      {
        id: "manti-1",
        name: "Traditional Manti",
        description: "Steamed dumplings filled with seasoned lamb and onions, served with sour cream.",
        price: "€15.90",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800",
        popular: true
      },
      {
        id: "manti-2",
        name: "Pumpkin Manti (Kadu Manti)",
        description: "Sweet pumpkin dumplings with butter and caramelized onions.",
        price: "€14.90",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800",
        vegetarian: true
      },
      {
        id: "manti-3",
        name: "Chuchvara",
        description: "Small meat dumplings in flavorful broth with fresh herbs.",
        price: "€13.90",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800"
      }
    ]
  },
  {
    id: "shashlik",
    name: "Shashlik & Grilled",
    description: "Traditional Central Asian barbecue",
    items: [
      {
        id: "shashlik-1",
        name: "Lamb Shashlik",
        description: "Tender lamb skewers marinated in special spices, grilled over charcoal.",
        price: "€19.90",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800",
        popular: true
      },
      {
        id: "shashlik-2",
        name: "Chicken Shashlik",
        description: "Juicy chicken breast pieces with bell peppers and onions.",
        price: "€16.90",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800"
      },
      {
        id: "shashlik-3",
        name: "Lula Kebab",
        description: "Ground lamb kebab with herbs and spices, served with lavash bread.",
        price: "€17.90",
        image: "https://images.unsplash.com/photo-1607330289024-cdpb2c2b7f4a?w=800"
      },
      {
        id: "shashlik-4",
        name: "Mixed Grill Platter",
        description: "Combination of lamb, chicken, and lula kebab with grilled vegetables.",
        price: "€34.90",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800"
      }
    ]
  },
  {
    id: "soups",
    name: "Soups & Salads",
    description: "Hearty traditional soups and fresh salads",
    items: [
      {
        id: "soup-1",
        name: "Lagman",
        description: "Hand-pulled noodle soup with meat, vegetables, and aromatic broth.",
        price: "€12.90",
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800",
        popular: true
      },
      {
        id: "soup-2",
        name: "Shurpa",
        description: "Traditional lamb soup with potatoes, carrots, and fresh herbs.",
        price: "€11.90",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800"
      },
      {
        id: "salad-1",
        name: "Achichuk Salad",
        description: "Fresh tomatoes, onions, and herbs with olive oil.",
        price: "€8.90",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
        vegetarian: true
      },
      {
        id: "salad-2",
        name: "Uzbek Salad",
        description: "Traditional salad with radishes, eggs, and sour cream dressing.",
        price: "€9.90",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800"
      }
    ]
  },
  {
    id: "bread",
    name: "Bread & Appetizers",
    description: "Freshly baked breads and starters",
    items: [
      {
        id: "bread-1",
        name: "Non (Uzbek Bread)",
        description: "Traditional tandoor-baked flatbread with sesame and nigella seeds.",
        price: "€4.90",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800"
      },
      {
        id: "app-1",
        name: "Samsa",
        description: "Flaky pastry filled with lamb, onions, and spices.",
        price: "€6.90",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
        popular: true
      },
      {
        id: "app-2",
        name: "Vegetable Samsa",
        description: "Crispy pastry with potato, pumpkin, and herbs filling.",
        price: "€5.90",
        image: "https://images.unsplash.com/photo-1619740455993-9e0c85e0f7d5?w=800",
        vegetarian: true
      }
    ]
  },
  {
    id: "desserts",
    name: "Desserts & Tea",
    description: "Sweet endings and traditional beverages",
    items: [
      {
        id: "dessert-1",
        name: "Halva",
        description: "Traditional sweet made with sesame paste and honey.",
        price: "€6.90",
        image: "https://images.unsplash.com/photo-1598639863386-74a17f817a5d?w=800"
      },
      {
        id: "dessert-2",
        name: "Pakhlava (Baklava)",
        description: "Layers of phyllo pastry with nuts and honey syrup.",
        price: "€7.90",
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800"
      },
      {
        id: "tea-1",
        name: "Green Tea (Kuk Choy)",
        description: "Traditional Uzbek green tea, served in a ceramic pot.",
        price: "€4.50",
        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800"
      },
      {
        id: "tea-2",
        name: "Black Tea with Sweets",
        description: "Aromatic black tea served with dried fruits and nuts.",
        price: "€5.50",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800"
      }
    ]
  }
];
