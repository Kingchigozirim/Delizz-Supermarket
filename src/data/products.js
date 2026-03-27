const products = [
  {
    id: "coca-cola-60cl-x12",
    name: "COCA COLA 60CL X 12",
    description:
      "Refreshing Coca-Cola PET bottles in a 12-pack, ideal for home or events.",
    category: "non-alcoholic-drinks",
    price: 600,
    salePrice: 3700,
    image:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&w=1200&q=80",
    ],
    stock: "in-stock",
    sku: "NCC-COLA-60-12",
  },
  {
    id: "sprite-33cl-can-x24",
    name: "SPRITE 33CL CAN X 24",
    description:
      "Crisp lemon-lime soft drink in sleek cans, packed 24 per carton.",
    category: "non-alcoholic-drinks",
    price: 5600,
    image:
      "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=1200&q=80",
    ],
    stock: "in-stock",
    sku: "NCC-SPRITE-33-24",
  },
  {
    id: "heineken-33cl-x24",
    name: "Heineken Sleek Can 33cl x 24",
    description:
      "Premium lager in 33cl cans, chilled and ready for celebrations.",
    category: "alcoholic-drinks",
    price: 6150,
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=1200&q=80",
    ],
    stock: "in-stock",
    sku: "NCC-HEIN-33-24",
  },
  {
    id: "indomie-onion-70g-x40",
    name: "Indomie Onion Chicken Noodles 70g x 40",
    description:
      "Classic onion chicken noodles, full carton value for family stocking.",
    category: "groceries",
    price: 10300,
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=1200&q=80",
    ],
    stock: "in-stock",
    sku: "NCC-IND-70-40",
  },
  {
    id: "tomtom-classic-152g",
    name: "TOMTOM CLASSIC 152G",
    description:
      "Menthol candy with signature cooling effect for everyday freshness.",
    category: "groceries",
    price: 7040,
    salePrice: 6500,
    image:
      "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=1200&q=80",
    ],
    stock: "in-stock",
    sku: "NCC-TOM-152",
  },
  {
    id: "royal-40-smart-led-tv",
    name: "Royal 40 Inch Smart HD LED TV",
    description:
      "Smart HD display with clear visuals and built-in apps for streaming.",
    category: "electronics",
    price: 125000,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=80",
    ],
    stock: "in-stock",
    sku: "NCC-ROYAL-40",
  },
  {
    id: "fleece-blanket",
    name: "Fleece Blanket",
    description:
      "Soft premium fleece throw blanket designed for warmth and comfort.",
    category: "home-kitchen",
    price: 4500,
    image:
      "https://www.americanblanketcompany.com/cdn/shop/files/LusterLoft-multiple-productthumbnail_2000x.jpg?v=1749829466",
    gallery: [
      "https://www.americanblanketcompany.com/cdn/shop/files/LusterLoft-multiple-productthumbnail_2000x.jpg?v=1749829466",
    ],
    stock: "in-stock",
    sku: "NCC-FLEECE-01",
  },
  {
    id: "cway-water-18-9l",
    name: "CWAY Dispenser Bottle Water 18.9L",
    description:
      "Large capacity dispenser bottle with clean and safe drinking water.",
    category: "non-alcoholic-drinks",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&fit=crop&w=1200&q=80",
    ],
    stock: "in-stock",
    sku: "NCC-CWAY-189",
  },
  {
    id: "samsung-galaxy-a12",
    name: "Samsung Galaxy A12",
    description:
      "Affordable smartphone with a large display and reliable performance.",
    category: "electronics",
    price: 200000,
    image:
      "https://affordablephonesng.com/wp-content/uploads/2025/09/Samsung-A25-256gb-600x600.jpg",
    gallery: [
      "https://affordablephonesng.com/wp-content/uploads/2025/09/Samsung-A25-256gb-600x600.jpg",
    ],
    stock: "in-stock",
    sku: "NCC-SAMSUNG-A12",

  },
  {
    id: "sony-wh-1000xm4",
    name: "Sony WH-1000XM4 Wireless Noise-Canceling Headphones",
    description:
      "Premium wireless headphones with advanced noise-canceling technology for immersive audio experience.",
    category: "electronics",
    price: 35000,
    image:
      "https://variety.com/wp-content/uploads/2025/05/Sony-WH-1000XM6-Noise-Canceling-Headphones-Featured.jpg?w=1000&h=563&crop=1",
    gallery: [
      "https://variety.com/wp-content/uploads/2025/05/Sony-WH-1000XM6-Noise-Canceling-Headphones-Featured.jpg?w=1000&h=563&crop=1",
    ],
    stock: "in-stock",
    sku: "NCC-SONY-WH-1000XM4",

  }
]

export default products
