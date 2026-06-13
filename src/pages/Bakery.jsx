import { useState } from "react";
import { Link } from "react-router-dom";
import ProductRowCard from "../components/ProductRowCard";

export default function Bakery() {
  const [activePremixTab, setActivePremixTab] = useState("eggless");
  const [activeFlavourTab, setActiveFlavourTab] = useState("regular");

  const premixTabs = {
    eggless: {
      name: "Eggless Cake Premix",
      description: "'Top Bake' 100% vegetarian cake premix. Requires only water and oil to bake high-quality cakes. Perfect for commercial bakers and home bakers alike.",
      flavours: "Vanilla | Chocolate | Sponge Cake"
    },
    chocolava: {
      name: "Chocolava Premix",
      description: "Eggless molten chocolate cake premix with a rich, oozing chocolate lava centre. Quick preparation — ready in just 15 minutes.",
      flavours: "Rich Chocolate Lava"
    },
    mousse: {
      name: "Chocolate Mousse Premix",
      description: "Eggless, light, frozen, and gelatin-free mousse dessert blend. Excellent stability with a creamy, smooth mouthfeel.",
      flavours: "Dark Chocolate Mousse"
    },
    brownie: {
      name: "Brownie Premix",
      description: "Eggless, dense, gooey, and moist brownie mix. Free from gluten and packed with rich cocoa flavour. Optional: add choco chips or walnuts.",
      flavours: "Fudge Chocolate Brownie"
    },
    donut: {
      name: "Donut Premix",
      description: "Eggless donut premix for delicious, golden deep-fried ring-shaped donuts. Easy to glaze, decorate, and top.",
      flavours: "Classic Sweet Donut"
    },
    tiramisu: {
      name: "Tiramisu Premix",
      description: "Eggless, coffee-infused Italian classic dessert premix. Rich creamy texture and authentic coffee flavour profile.",
      flavours: "Classic Coffee Tiramisu"
    }
  };

  const flavourTabs = {
    regular: {
      name: "Regular Flavours",
      list: "Banana | Butterscotch | Chocolate | Coconut | Mango | Milk | Orange | Pineapple | Strawberry | Vanilla"
    },
    special: {
      name: "Special Flavours",
      list: "Black Currant | Blueberry | Butter | Cardamom | Coffee | Honey | Kiwi | Lemon | Mixed Fruit | Rose"
    }
  };

  const products = [
    {
      name: "Top Bake Bread, Rusk, Pav, Bun Improvers",
      description: "Premium blend of enzymes and reducing agents. Improves machinability of dough, decreases baking time for breads, buns, and rusks even with low sugar formulations. As a leading brand in the market, it uses highly concentrated enzymes. Absolutely Bromate & Iodate Free. Improves crumb texture, crust colour, and loaf volume. Rusk Improver keeps rusks crispy with enhanced volume and golden brown colour.",
      dosage: "3% of the flour weight",
      packSize: "500 gm pouch × 40 | 1 Kg pouch × 20 | Special: 25 Kg Bulk | 100 gm standing pouch for home bakers | Bread Improver concentrates in bulk available",
      image: "./images/bread_improver.png"
    },
    {
      name: "Goldy's Cake Gel (Cake Improver)",
      description: "Premium quality emulsifiers and humectants blend. Significantly improves sponge yield through increased aeration, provides a uniform crumb structure, and raises baked volume. Retains cake softness, moistness, and elasticity over shelf life. Recommended for sponge cakes, bar cakes, cup cakes, and muffins.",
      dosage: "4-8% on flour weight",
      packSize: "1 Kg jar × 20 | 10 and 20 Kg bulk packing",
      image: "./images/cake_gel.png"
    },
    {
      name: "Vinsoft Cake Softener",
      description: "Premium blend of liquid humectants and sucrose. Reduces sugar crystallization in baked items, retains internal crumb moisture, and maintains sponginess of cakes over time. Also excellent for softening Indian sweets that tend to harden.",
      dosage: "Replace 10-15% of sugar with VinSoft",
      packing: "1 Liter / 5 Liter / 35 Liter",
      image: "./images/cake_gel.png"
    },
    {
      name: "Vincrispy Cookies Improver",
      description: "Plant protease formulation combined with a blend of food-grade liquid emulsifiers. Effectively conditions flour dough for commercial bakeries. Makes cookies, biscuits, crackers, and wafers incredibly crisp and tastier while increasing their stack strength for transport.",
      dosage: "3-5% of flour weight",
      packSize: "500 ml / 1 Liter / 35 Liter Bulk",
      image: "./images/bread_improver.png"
    },
    {
      name: "Custard Powder",
      description: "Premium egg-free custard powder giving a rich, creamy taste and smooth body. Perfect for fruit salads, fruit trifles, and puddings. Contains stabilizers and thickeners that ensure an ideal setting structure. Easy to make. Also available in an Instant Bakestable variant for bakery fillings.",
      packSize: "1 Kg pouch × 25 | Special: 2 Kg Box × 4 | 25 Kg Bulk",
      image: "./images/rose_milk.png"
    },
    {
      name: "Baking Powder: Double Action, Triple Action and Aluminium Free",
      description: "High-performing leavening agent. Delivers unmatched volume, uniform rising, lightness, and fine texture for premium baked goods like cakes, biscuits, cookies, and buns.",
      dosage: "1.5 to 3% of flour weight",
      packSize: "Double Action: 1 Kg pouch × 25 | Triple Action: 500 gms box × 20 | Aluminium Free: 500 gms pouch × 40 | 100 gm standing pouch for home bakers",
      image: "./images/bread_improver.png"
    },
    {
      name: "MURARI Milk Flavour",
      description: "Concentrated milk flavor powder that adds a rich, dairy-like flavor profile to bread, buns, cakes, sweets, and ice creams. Highly economical, allowing reduction of expensive milk powder inputs.",
      dosage: "Reduce milk powder by 10% and add equivalent quantity of Murari",
      packing: "1 Kg pouch × 25",
      image: "./images/ragi_malt.png"
    },
    {
      name: "Vanilla Flavour (Extra Strong & Regular)",
      description: "Premium powder vanilla flavour formulated for bakery products, biscuits, cookies, sweets, toffees, beverages, and ice cream. Retains aroma even at high baking temperatures.",
      dosage: "Super Fine 0.2–0.3% | Extra Strong 0.1–0.15% of flour weight",
      packing: "500 gm pouch × 40 / 500 gm jar × 20",
      image: "./images/ragi_malt.png"
    }
  ];

  return (
    <div className="bakery-page-container">
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>Bakery Products</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <Link to="/products">Products</Link>
            <span>&gt;</span>
            <span className="current">Bakery</span>
          </div>
        </div>
      </div>

      {/* Main Products List */}
      <section className="bakery-list-section section-padding">
        <div className="container">
          <h2 className="section-title">Premium Bakery Ingredients</h2>
          
          <div className="products-list-wrapper">
            {products.map((prod, idx) => (
              <ProductRowCard key={idx} {...prod} />
            ))}

            {/* Product 9: Cake Premixes (Tabbed layout) */}
            <div className="product-row-card tabbed-product-card">
              <div className="product-card-image-wrapper">
                <img 
                  src="./images/cake_gel.png" 
                  alt="Cake Premixes" 
                  className="product-card-image" 
                />
              </div>
              <div className="product-card-details">
                <div className="product-card-header-with-badge">
                  <h3 className="product-card-title">Cake Premixes</h3>
                  <span className="badge">Tabbed Range</span>
                </div>
                <p className="product-card-description mb-3">
                  Highly convenient, eggless baking formulations. Requires minimal ingredients (usually just water and oil) to create premium baker-quality sponge cakes, molten cakes, brownies, and specialty desserts.
                </p>

                {/* Tabs Selector */}
                <div className="product-tabs-header">
                  {Object.keys(premixTabs).map((tabKey) => (
                    <button
                      key={tabKey}
                      className={`tab-btn ${activePremixTab === tabKey ? "active" : ""}`}
                      onClick={() => setActivePremixTab(tabKey)}
                    >
                      {premixTabs[tabKey].name}
                    </button>
                  ))}
                </div>

                {/* Active Tab Content */}
                <div className="product-tab-content-box">
                  <p><strong>Description:</strong> {premixTabs[activePremixTab].description}</p>
                  <div className="tab-meta-details mt-2">
                    <span className="spec-label">Flavours Available:</span>
                    <span className="spec-val-badge-container mt-1">
                      {premixTabs[activePremixTab].flavours.split("|").map((flv, idx) => (
                        <span key={idx} className="spec-val-badge">{flv.trim()}</span>
                      ))}
                    </span>
                  </div>
                </div>

                <div className="product-meta-specs mt-3">
                  <div className="spec-item">
                    <span className="spec-label">Packing (All Premixes):</span>
                    <span className="spec-val">1 Kg × 20 | 5 Kg pouch × 4</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 10: Micro Fine Sugar */}
            <ProductRowCard 
              name="Micro Fine Sugar"
              description="Extra white, ultra-fine powdered sugar. Ideal for making smooth icing fondants, frostings, meringues, and toppings for bakery desserts."
              packSize="1 Kg pouch × 25"
              image="./images/bread_improver.png"
            />

            {/* Product 11: Whipping Cream Powder */}
            <ProductRowCard 
              name="Whipping Cream Powder"
              description="Free flowing whipped topping powder with a rich creamy dairy profile. Replaces fresh whipped cream, offering better output, easier storage, and extended shelf life. Delivers a thick, luscious texture and outstanding stability when reconstituted and whipped. Excellent neutral whipping base for frozen desserts, cake decorations, and fillings."
              packSize="500 gms pouch × 40 | Special: 25 Kg Bulk | 100 gm standing pouch for home bakers"
              image="./images/bread_improver.png"
            />

            {/* Product 12: Rangoli - Liquid Food Colours */}
            <ProductRowCard 
              name="Rangoli – Liquid Food Colours"
              description="Highly concentrated liquid food-grade colours. Available in a wide spectrum of shades. Extremely easy to disperse, making it perfect for coloring cake batters, icings, whipped toppings, ice creams, traditional sweets, beverages, jams, and jellies."
              colours="Rose | Chocolate | Lemon Yellow | Blue | Green | Orange | Tomato Red | Raspberry Red"
              packSize="500 ml clear bottle × 20 | 100 ml × 10 | Special: Assorted 20 ml × 10 in a box"
              image="./images/rose_milk.png"
            />

            {/* Product 13: Goldy's Glazing Gel */}
            <ProductRowCard 
              name="Goldy's Glazing Gel"
              description="Premium quality cold-process glaze gel with thixotropic property (flows when stirred, sets when resting). Delivers an excellent glossy shine and long-lasting freshness to cakes, pastries, tarts, and glazed fruits. Combines perfectly with whip toppings."
              flavours="Neutral | Black Currant | Blueberry | Butterscotch | Caramel | Chocolate | Kiwi | Mango | Orange | Pineapple | Strawberry"
              packSize="2.5 Kg bucket × 6"
              image="./images/cake_gel.png"
            />

            {/* Product 14: Liquid Flavours (Tabbed layout) */}
            <div className="product-row-card tabbed-product-card">
              <div className="product-card-image-wrapper">
                <img 
                  src="./images/ragi_malt.png" 
                  alt="Liquid Flavours" 
                  className="product-card-image" 
                />
              </div>
              <div className="product-card-details">
                <div className="product-card-header-with-badge">
                  <h3 className="product-card-title">Liquid Flavours</h3>
                  <span className="badge">Aroma Range</span>
                </div>
                <p className="product-card-description mb-3">
                  Highly concentrated, bake-stable liquid food-grade flavors. Instantly enhances the aroma and taste profile of bakery goods, ice creams, candies, beverages, and syrups.
                </p>

                {/* Tabs Selector */}
                <div className="product-tabs-header">
                  {Object.keys(flourTabs).map((tabKey) => (
                    <button
                      key={tabKey}
                      className={`tab-btn ${activeFlavourTab === tabKey ? "active" : ""}`}
                      onClick={() => setActiveFlavourTab(tabKey)}
                    >
                      {flourTabs[tabKey].name}
                    </button>
                  ))}
                </div>

                {/* Active Tab Content */}
                <div className="product-tab-content-box">
                  <p><strong>Aromas Included:</strong></p>
                  <div className="spec-val-badge-container mt-1">
                    {flavourTabs[activeFlavourTab].list.split("|").map((flv, idx) => (
                      <span key={idx} className="spec-val-badge accent">{flv.trim()}</span>
                    ))}
                  </div>
                </div>

                <div className="product-meta-specs mt-3">
                  <div className="spec-item">
                    <span className="spec-label">Packing:</span>
                    <span className="spec-val">500 ml × 20 | 100 ml × 10 | Special: 20 ml assorted box for home bakers</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Enquiry CTA Section */}
      <section className="product-enquiry-cta-section section-padding">
        <div className="container text-center">
          <h2>Looking for Bulk Orders or Custom Formulations?</h2>
          <p>We supply bakeries, hotels, distributors, and food brands across India. Get a customized quote today.</p>
          <Link to="/contact-us" className="btn btn-orange">
            Send Business Enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
