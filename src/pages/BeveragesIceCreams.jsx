import { Link } from "react-router-dom";
import ProductRowCard from "../components/ProductRowCard";

export default function BeveragesIceCreams() {
  const products = [
    {
      name: "Rose Milk Powder",
      description: "Delicious ready-to-mix sweet beverage powder infused with authentic rose flavor. Best enjoyed ice-cold. Add dried rose petals for an enhanced visual appeal and flavor.",
      dosage: "20 gm in 200 ml cold milk",
      packSize: "500 gm pouch (Regular) | 500 gm jar (Premium) | 20 gm sachet",
      image: "./images/rose_milk.png"
    },
    {
      name: "Drinking Chocolate",
      description: "Rich cocoa-based beverage formulated with premium dark cocoa powder, milk solids, and natural food stabilizers. Can be served piping hot or chilled. Top with whipped cream using Vintop Whipping Cream Powder for a luxury cafe experience.",
      dosage: "20 gm in 200 ml milk",
      packSize: "500 gm pouch | 500 gm jar | 20 gm sachet",
      image: "./images/drinking_chocolate.png"
    },
    {
      name: "Pista Milk Powder",
      description: "Delectable ready-to-mix milkshake powder with a creamy pistachio flavor profile. Enjoy chilled. Add chopped pistachio chunks to enhance the mouthfeel.",
      dosage: "20 gm in 200 ml cold milk",
      packSize: "500 gm pouch (Regular) | 500 gm jar (Premium) | 20 gm sachet",
      image: "./images/rose_milk.png"
    },
    {
      name: "Sprouted Ragi Malt",
      description: "Natural wellness drink packed with iron, calcium, dietary fiber, and natural antioxidants derived from sprouted finger millet (ragi). Highly versatile — ideal for making hot malt beverages, health porridges, and traditional sweets.",
      packSize: "500 gm pouch",
      image: "./images/ragi_malt.png"
    },
    {
      name: "Ice Tea Premix",
      description: "Refreshing, instant ready-to-mix iced tea powder. Sweetened and flavoured to perfection. Sweeten further with sugar syrup and serve garnished with fresh apple or lemon slices.",
      flavours: "Ginger | Lemon | Peach | Passion Fruit",
      packSize: "500 gm pouch | 20 gm sachet",
      image: "./images/rose_milk.png"
    },
    {
      name: "Jaljeera Drink Premix",
      description: "Spicy and tangy ready-to-mix appetizer powder. A highly popular traditional Indian summer refresher made with cumin, black salt, and dry mango. No additional sugar needed.",
      dosage: "20 gm in 200 ml chilled water",
      packSize: "500 gm pouch | 100 gm standing pouch | 20 gm sachet",
      image: "./images/ragi_malt.png"
    },
    {
      name: "Ultra Gel (Juice & Syrup Thickener)",
      description: "Vintop's flagship thickening agent. Perfectly stabilizes and thickens fruit juices, soups, syrups, squashes, and traditional Indian desserts like kheer and payasam. Uses high-quality food stabilizers to ensure absolute clarity and transparency in syrups and juices without turning cloudy.",
      dosage: "1 teaspoon in 200 ml of preparation",
      packSize: "500 gm pouch | 25 Kg bulk",
      image: "./images/ragi_malt.png"
    },
    {
      name: "PulpTex (Beverage Additive)",
      description: "Specialized beverage stabilizer and texture enhancer. Recreates a thick, authentic, pulpy mouthfeel in fruit juices and concentrates.",
      dosage: "10 gms in 1 liter juice",
      packSize: "500 gm pouch | 25 Kg bulk",
      image: "./images/ragi_malt.png"
    },
    {
      name: "Milk Shake Premixes",
      description: "Provides an instant thick consistency and premium frothy mouthfeel to milkshakes. Simply blend and serve. Directions: Mix 1 Kg milkshake premix with 8 Liters of cold milk.",
      flavours: "Vanilla | Chocolate | Belgian Chocolate | Strawberry | Butterscotch | Black Currant | Kesar Badam | Kesar Pista | Mango | Oreo | Ferrero Rocher",
      packSize: "1 Kg pouch × 20 | 500 gm jar",
      image: "./images/icecream_banner.png"
    },
    {
      name: "Emulsions",
      description: "Finely balanced flavor and color mixture (two immiscible liquids bound together) for bakeries, carbonated soft drinks, squashes, and syrups.",
      flavours: "Cola | Grape | Lemon | Mango | Orange | Pineapple",
      dosage: "3 ml in 1 liter water/preparation",
      packSize: "500 ml × 20",
      image: "./images/rose_milk.png"
    },
    {
      name: "GlucoVin (Glucose D Flavoured)",
      description: "Provides instant energy and hydration for children, athletes, sports enthusiasts, and the elderly. Sourced with dextrose and fortified with Vitamin-D.",
      flavours: "Orange | Lemon | Mango | Pineapple",
      dosage: "20 gm in 200 ml chilled water",
      packSize: "500 gm pouch",
      image: "./images/ragi_malt.png"
    },
    {
      name: "Frappe Coffee Blend (Vanilla)",
      description: "Premium milk-based base powder for creating thick, foamy, and refreshing shaken or blended frappes. Mix with instant coffee powder and ice, and top with whipped cream.",
      dosage: "20 gm in 200 ml cold milk",
      packSize: "1 Kg pouch × 20 | 20 gm sachet",
      image: "./images/drinking_chocolate.png"
    },
    {
      name: "Badam Milk Powder",
      description: "Traditional Indian milk beverage mix featuring ground almonds, cardamom, and saffron extracts. Also acts as an ideal flavour base for making Indian sweets like laddu, halwa, kesaribath, and burfi. Our Premium variant features freshly roasted Badam flakes, ground cardamom, and natural color.",
      packSize: "500 gm pouch (Regular) | 500 gm jar (Premium) | 20 gm sachet",
      image: "./images/ragi_malt.png"
    },
    {
      name: "DiaSweet (Sugar-Free Sweetener)",
      description: "Premium quality artificial sweetener blend. Formulated to be 4x sweeter than normal sugar with absolutely no bitter aftertaste. Suitable for preparing low-calorie sweets, confectionery, and cakes.",
      dosage: "Use 1/4th (4x lesser) the quantity of normal sugar",
      packSize: "500 gm jar × 20",
      image: "./images/cake_gel.png"
    },
    {
      name: "Softee Ice Cream Premix",
      description: "Provides soft, smooth, and delicious soft-serve ice cream. Formulated specifically for commercial softy machines using high-quality imported milk fat bases. Ensures high yield with maximum cones generated per kilogram. Available in premium and economic ranges. Directions: Mix 1 Kg premix with 5 Liters of cold milk (below 5°C). Blend until fully dissolved, then churn in the machine for 8-10 minutes.",
      flavours: "Vanilla | Chocolate | Mango | Orange | Pista | Kesar Pista | Kesar Badam | Rose | Strawberry | Pineapple | Butterscotch | Black Currant | American Ice Cream Soda | Coffee | Peppermint | Watermelon | Thandai | Cola | Apple | Guava",
      packSize: "1 Kg pouch × 20 | 25 Kg bulk",
      image: "./images/icecream_banner.png"
    },
    {
      name: "Wonder 4 (Ice Cream Stabilizer)",
      description: "Premium quality food-grade emulsifier and stabilizer blend. Developed specifically for high-fat commercial ice cream mixes to prevent ice crystal formation and ensure slow melt and smooth texture.",
      dosage: "40 gm in 1 liter ice cream premix",
      packSize: "1 Kg pouch × 20 | 25 Kg bulk",
      image: "./images/icecream_banner.png"
    }
  ];

  return (
    <div className="beverages-page-container">
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>Beverages & Ice Creams</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <Link to="/products">Products</Link>
            <span>&gt;</span>
            <span className="current">Beverages & Ice Creams</span>
          </div>
        </div>
      </div>

      {/* Products list */}
      <section className="beverages-list-section section-padding">
        <div className="container">
          <h2 className="section-title">Beverages & Ice Cream Blends</h2>
          
          <div className="products-list-wrapper">
            {products.map((prod, idx) => (
              <ProductRowCard key={idx} {...prod} />
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry CTA Section */}
      <section className="product-enquiry-cta-section section-padding">
        <div className="container text-center">
          <h2>Need Custom Pack Sizes or Flavours?</h2>
          <p>We work with leading food brands and chains across South India. Let's discuss your requirements.</p>
          <Link to="/contact-us" className="btn btn-orange">
            Send Business Enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
