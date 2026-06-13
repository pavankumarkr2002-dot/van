import { Link } from "react-router-dom";
import ProductRowCard from "../components/ProductRowCard";

export default function HoReCa() {
  const products = [
    {
      name: "NatVin Natural Powder Flavours (Flavour Boosters)",
      description: "Highly concentrated natural spice powder flavorings. Designed for savory snacks, chips, popcorn, and traditional Indian namkeens. Instantly boosts taste notes.",
      flavours: "Cardamom | Garlic | Ginger | Onion | Pepper",
      dosage: "0.2–0.4% of batter/snack weight",
      packSize: "50 gm sachet | 2 Kg Bulk",
      image: "./images/spice_boosters.png"
    },
    {
      name: "Biryani Flavour Powder",
      description: "Premium easy-to-use concentrated powder flavoring for authentic Indian Biryani. Releases aroma immediately upon contact with moisture. Simply sprinkle like salt when mixing cooked rice with biryani masala. Also available in a highly concentrated liquid format.",
      dosage: "0.2% of total biryani preparation weight",
      packSize: "50 gm sachet | Liquid version available in 20 ml glass bottles",
      image: "./images/indian_speciality.png"
    },
    {
      name: "Tea Masala Flavour",
      description: "A perfect dry blend of natural ginger and cardamom extracts in powder form. Adds an authentic warming aroma and flavour to traditional Indian Chai (milk tea) while offering health benefits from spice extracts. 100% natural ingredients.",
      dosage: "2–4% of batter / tea mix weight",
      packSize: "50 gm sachet | 2 Kg Bulk",
      image: "./images/indian_speciality.png"
    },
    {
      name: "Vegetarian Jelly Crystals (VinJel)",
      description: "Vintop's flagship gelatin-free 100% Vegetarian fruit jelly premix. Delivers a perfect wobble, glossy shine, and delicious fruit taste. Ideal for serving alongside ice cream and fruit salads. Directions: Mix 1 Kg of VinJel with 5 Liters of water, heat to 80°C until fully dissolved, pour into moulds, and refrigerate to set.",
      flavours: "Neutral | Strawberry | Raspberry | Mango | Pineapple | Orange | Kiwi | Peach",
      packSize: "500 gm pouch × 40 | 100 gm standing pouch for home bakers",
      image: "./images/jelly_crystals.png"
    },
    {
      name: "Vinsmooth Chapathi Improver",
      description: "An innovative, natural moisture-retention blend for traditional flatbreads (Roti, Chapathi, Parantha, Naan, Ceylon Parota). Retains moisture internally for extended hours, preventing flatbreads from turning dry, rubbery, or hard. Provides a soft, supple texture with a completely neutral taste and aroma.",
      dosage: "Replace oil by 10–20% with VinSmooth; if no oil is used in recipe, reduce water input by 10–20% and add VinSmooth.",
      packing: "500 gm / 1 Kg / 5 Kg | Bulk supply on request",
      image: "./images/chapathi_softener.png"
    },
    {
      name: "Goldsberg – Namkeen & Savories Improver",
      description: "A revolutionary oil-saver powder formulation for deep-fried snacks. Forms a micro-barrier that significantly reduces deep-frying oil absorption. Extends product shelf life, reduces oil rancidity, and provides an exceptionally crisp, dry finish. Directions: Add 30 ml of Goldsberg to 1 Liter of water, then add this solution directly to the flour/batter.",
      packSize: "1 Liter / 5 Liter / 35 Liter Jerry Cans",
      image: "./images/namkeen_snacks.png"
    },
    {
      name: "Instant Pudding Premix",
      description: "Premium instant starch-based dessert premix. Simply whisk with cold milk to form a delicious, firm dessert pudding gel in minutes. Directions: Mix 1 part pudding premix with 3 parts cold milk, blend on high speed for 2 minutes, pour into bowls, add toppings, and let set.",
      flavours: "Vanilla | Kesar Badam | Chocolate",
      packSize: "500 gm pouch",
      image: "./images/pudding_dessert.png"
    }
  ];

  return (
    <div className="horeca-page-container">
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>HoReCa Products</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <Link to="/products">Products</Link>
            <span>&gt;</span>
            <span className="current">HoReCa</span>
          </div>
        </div>
      </div>

      {/* Products list */}
      <section className="horeca-list-section section-padding">
        <div className="container">
          <h2 className="section-title">Ingredients for Hotels, Restaurants & Catering</h2>
          
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
          <h2>Own a Restaurant, Hotel, or Catering Chain?</h2>
          <p>We supply bulk ingredients and custom flavour mixes to businesses across India. Contact our sales team.</p>
          <Link to="/contact-us" className="btn btn-orange">
            Send Business Enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
