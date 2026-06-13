import { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, MapPin, Star, Filter, ArrowUpDown, X, Check, CheckSquare, Square } from "lucide-react";

const getProductImage = (name, category) => {
  const n = name.toLowerCase();
  const cat = category.toLowerCase();
  let img = "bread_improver.png";
  if (n.includes("bread") || n.includes("bake") || n.includes("flour") || n.includes("improver")) img = "bread_improver.png";
  else if (n.includes("cake") || n.includes("gel") || n.includes("softener") || n.includes("premix") || n.includes("brownie") || n.includes("mousse") || n.includes("donut") || n.includes("tiramisu")) img = "cake_gel.png";
  else if (n.includes("rose") || n.includes("jelly") || n.includes("pudding") || n.includes("colour")) img = "rose_milk.png";
  else if (n.includes("chocolate") || n.includes("coffee") || n.includes("frappe") || n.includes("cocoa")) img = "drinking_chocolate.png";
  else if (n.includes("ragi") || n.includes("glucose") || n.includes("jaljeera") || n.includes("sweetener") || n.includes("cardamom") || n.includes("garlic") || n.includes("ginger") || n.includes("onion") || n.includes("pepper") || n.includes("biryani") || n.includes("tea") || n.includes("masala") || n.includes("savouries") || n.includes("namkeen") || n.includes("fry")) img = "ragi_malt.png";
  else if (cat.includes("ice cream") || cat.includes("beverage") || n.includes("ice cream") || n.includes("softy") || n.includes("shake") || n.includes("softee")) img = "icecream_banner.png";
  else if (cat.includes("contract") || cat.includes("label") || n.includes("pouch") || n.includes("bulk") || n.includes("sachet")) img = "factory_banner.png";

  const prefix = window.location.protocol === 'file:' ? './images/' : '/images/';
  return prefix + img;
};

// Complete 41 B2B products dataset
const initialProducts = [
  // Bakery Range (1-14)
  { id: "bakery-1", name: "TopBake Bread, Rusk, Pav, Bun Improver", category: "Bakery", price: 180, pack: "500gm Pouch", app: "Bread & Buns", badge: "BESTSELLER", desc: "Premium enzymes and reducing agents. Improves machinability, texture, volume, and gold color. Bromate & Iodate Free.", rate: 4.8, reviews: 32 },
  { id: "bakery-2", name: "Goldy's Cake Gel (Cake Emulsifier)", category: "Bakery", price: 320, pack: "1 Kg Pack", app: "Cakes & Pastries", badge: "BESTSELLER", desc: "Improves sponge cake aeration, raises baked volume, and maintains crumb softness and moisture.", rate: 4.9, reviews: 28 },
  { id: "bakery-3", name: "Vinsoft Cake Softener Liquid", category: "Bakery", price: 190, pack: "1 Kg Pack", app: "Cakes & Pastries", badge: "NEW", desc: "Premium blend of liquid humectants. Reduces sugar crystallization and extends internal crumb moisture.", rate: 4.7, reviews: 15 },
  { id: "bakery-4", name: "Vincrispy Cookies & Biscuits Improver", category: "Bakery", price: 210, pack: "1 Kg Pack", app: "Cookies & Biscuits", badge: "", desc: "Protease enzyme formulation. Makes cookies, crackers and wafers crisp, tasty, and increases stack strength.", rate: 4.6, reviews: 12 },
  { id: "bakery-5", name: "Premium Eggless Custard Powder", category: "Bakery", price: 150, pack: "1 Kg Pack", app: "Cakes & Pastries", badge: "", desc: "Rich taste and body for fruit salads and fillings. Primarily thickeners that give a pudding-like structure.", rate: 4.5, reviews: 18 },
  { id: "bakery-6", name: "Baking Powder - Double Action", category: "Bakery", price: 140, pack: "1 Kg Pack", app: "Cakes & Pastries", badge: "BESTSELLER", desc: "High-performing double action leavening agent. Delivers unmatched volume, lightness, and fine texture.", rate: 4.8, reviews: 24 },
  { id: "bakery-7", name: "Baking Powder - Triple Action", category: "Bakery", price: 165, pack: "1 Kg Pack", app: "Cakes & Pastries", badge: "", desc: "High-stability triple action leavening agent. Unmatched volume for premium baked commercial goods.", rate: 4.7, reviews: 9 },
  { id: "bakery-8", name: "Baking Powder - Aluminium Free", category: "Bakery", price: 220, pack: "1 Kg Pack", app: "Cakes & Pastries", badge: "NEW", desc: "Eco-friendly aluminium free baking agent. Delivers clean rising and health-conscious formulations.", rate: 4.9, reviews: 11 },
  { id: "bakery-9", name: "MURARI Milk Flavour Powder", category: "Bakery", price: 240, pack: "1 Kg Pack", app: "Cakes & Pastries", badge: "", desc: "Concentrated milk flavor powder. Adds dairy notes to bread, buns, cakes, sweets, and ice creams.", rate: 4.5, reviews: 14 },
  { id: "bakery-10", name: "Vanilla Flavour - Extra Strong", category: "Bakery", price: 290, pack: "500gm Pouch", app: "Cakes & Pastries", badge: "BESTSELLER", desc: "Bake-stable extra strong vanilla aroma. Ideal for cakes, cookies, sweets, and beverages.", rate: 4.8, reviews: 20 },
  { id: "bakery-11", name: "Eggless Vanilla Cake Premix", category: "Bakery", price: 260, pack: "1 Kg Pack", app: "Cakes & Pastries", badge: "BESTSELLER", desc: "100% vegetarian sponge premix. Requires only water and oil. Delivers outstanding yield and softness.", rate: 4.9, reviews: 40 },
  { id: "bakery-12", name: "Whipping Cream Powder Base", category: "Bakery", price: 380, pack: "500gm Pouch", app: "Cakes & Pastries", badge: "", desc: "Creamy whipped topping powder. Highly stable when whipped, easy to store, replaces fresh cream.", rate: 4.6, reviews: 22 },
  { id: "bakery-13", name: "Goldy's Cold Glazing Gel", category: "Bakery", price: 155, pack: "5 Kg Pack", app: "Cakes & Pastries", badge: "", desc: "Cold topping glaze with thixotropic properties. Excellent spreadability, shine, and moisture retention.", rate: 4.7, reviews: 16 },
  { id: "bakery-14", name: "Rangoli Liquid Food Colours Set", category: "Bakery", price: 180, pack: "500gm Pouch", app: "Cakes & Pastries", badge: "", desc: "Highly concentrated food grade colours in Rose, Yellow, Blue, Green, Orange, Red, and Raspberry.", rate: 4.5, reviews: 19 },

  // Beverages & Ice Creams (15-30)
  { id: "bev-1", name: "Instant Rose Milk Premix", category: "Beverages", price: 220, pack: "500gm Pouch", app: "Beverages", badge: "NEW", desc: "Ready to mix rose beverage with pure milk solids and cooling herbs. Best enjoyed chilled.", rate: 4.8, reviews: 15 },
  { id: "bev-2", name: "Premium Drinking Chocolate", category: "Beverages", price: 290, pack: "500gm Pouch", app: "Beverages", badge: "NEW", desc: "Rich cocoa beverage powder. Blend of pure cocoa, milk solids, and natural stabilizers. Hot or cold.", rate: 4.7, reviews: 26 },
  { id: "bev-3", name: "Instant Pista Milk Premix", category: "Beverages", price: 230, pack: "500gm Pouch", app: "Beverages", badge: "", desc: "Delicious pistachio flavoured ready-to-mix beverage. Add nuts for crunchy mouthfeel.", rate: 4.6, reviews: 14 },
  { id: "bev-4", name: "Sprouted Ragi Malt Health Mix", category: "Beverages", price: 180, pack: "500gm Pouch", app: "Beverages", badge: "NEW", desc: "Sprouted finger millet drink loaded with iron, calcium, fiber, and natural antioxidants.", rate: 4.9, reviews: 30 },
  { id: "bev-5", name: "Ice Tea Premix Lemon & Peach", category: "Beverages", price: 190, pack: "500gm Pouch", app: "Beverages", badge: "", desc: "Tangy and refreshing iced tea premix. Simply dissolve in cold water and serve with ice.", rate: 4.5, reviews: 18 },
  { id: "bev-6", name: "Via Jaljeera Drink Premix", category: "Beverages", price: 160, pack: "500gm Pouch", app: "Beverages", badge: "BESTSELLER", desc: "Spicy and tangy traditional summer drink. Infused with cumin, mint, ginger, and black salt.", rate: 4.8, reviews: 29 },
  { id: "bev-7", name: "Ultra Gel Juice Thickener", category: "Beverages", price: 340, pack: "1 Kg Pack", app: "Beverages", badge: "", desc: "Flagship transparent thickening agent for squashes, syrups, juices, and payasam. No cloudiness.", rate: 4.7, reviews: 11 },
  { id: "bev-8", name: "PulpTex Juice Body Builder", category: "Beverages", price: 360, pack: "1 Kg Pack", app: "Beverages", badge: "", desc: "Beverage additive that recreates natural pulp mouthfeel and body in fruit drink concentrates.", rate: 4.6, reviews: 8 },
  { id: "bev-9", name: "Vanilla Milkshake Premix 1kg", category: "Beverages", price: 420, pack: "1 Kg Pack", app: "Beverages", badge: "BESTSELLER", desc: "Provides thick, frothy vanilla milkshakes. Directions: Mix 1 Kg premix in 8 liters of cold milk.", rate: 4.8, reviews: 35 },
  { id: "bev-10", name: "Chocolate Milkshake Premix 1kg", category: "Beverages", price: 420, pack: "1 Kg Pack", app: "Beverages", badge: "BESTSELLER", desc: "Thick, rich chocolate milkshake base. Formulated with cocoa and premium milk fat stabilizers.", rate: 4.7, reviews: 27 },
  { id: "bev-11", name: "GlucoVin Glucose D Drink", category: "Beverages", price: 145, pack: "500gm Pouch", app: "Beverages", badge: "NEW", desc: "Instant energy powder containing dextrose monohydrate, calcium, and Vitamin D. Orange & Lemon.", rate: 4.7, reviews: 13 },
  { id: "bev-12", name: "Frappe Coffee Blend Base", category: "Beverages", price: 390, pack: "1 Kg Pack", app: "Beverages", badge: "NEW", desc: "Vanilla base blend for thick, foamy, blended cold frappe coffee. Just add coffee and cold milk.", rate: 4.9, reviews: 21 },
  { id: "bev-13", name: "Badam Milk Powder Premium", category: "Beverages", price: 310, pack: "500gm Pouch", app: "Beverages", badge: "", desc: "Authentic badam milk mix with roasted almond flakes, cardamom, and saffron. Rejuvenating.", rate: 4.8, reviews: 24 },
  { id: "bev-14", name: "DiaSweet Sugar-Free Sweetener", category: "Beverages", price: 580, pack: "1 Kg Pack", app: "Beverages", badge: "NEW", desc: "4x sweeter than normal sugar with no bitter aftertaste. Suitable for diabetic-friendly sweets.", rate: 4.8, reviews: 10 },
  { id: "bev-15", name: "Softee Ice Cream Premix Vanilla", category: "Ice Cream", price: 450, pack: "1 Kg Pack", app: "Ice Cream", badge: "BESTSELLER", desc: "Soft-serve premix using imported milk fat. High yield with maximum cones. Mix 1 Kg in 5L milk.", rate: 4.9, reviews: 45 },
  { id: "bev-16", name: "Softee Ice Cream Premix Chocolate", category: "Ice Cream", price: 450, pack: "1 Kg Pack", app: "Ice Cream", badge: "BESTSELLER", desc: "Premium chocolate softy base. High density, smooth texture, excellent overrun, rich taste.", rate: 4.9, reviews: 38 },
  { id: "bev-17", name: "Wonder 4 Ice Cream Stabilizer", category: "Ice Cream", price: 490, pack: "1 Kg Pack", app: "Ice Cream", badge: "", desc: "Emulsifier and stabilizer blend. Prevents ice crystals, slows melting, and improves fat structure.", rate: 4.6, reviews: 12 },

  // HoReCa & Savouries (31-37)
  { id: "horeca-1", name: "NatVin Cardamom Powder Booster", category: "HoReCa", price: 480, pack: "100gm Sachet", app: "Indian Sweets", badge: "", desc: "Highly concentrated spice booster powder for namkeens, sweets, and bakery goods. 100% natural.", rate: 4.7, reviews: 14 },
  { id: "horeca-2", name: "NatVin Garlic Powder Booster", category: "HoReCa", price: 360, pack: "100gm Sachet", app: "Savouries & Namkeen", badge: "", desc: "Dehydrated garlic booster powder. Delivers uniform aroma and pungency for savouries.", rate: 4.5, reviews: 19 },
  { id: "horeca-3", name: "Premium Biryani Flavour Powder", category: "HoReCa", price: 450, pack: "100gm Sachet", app: "Indian Sweets", badge: "BESTSELLER", desc: "Sprinkle-on ethnic Biryani flavor powder. Releases aroma on contact with hot rice and masala.", rate: 4.8, reviews: 31 },
  { id: "horeca-4", name: "Tea Masala Flavour Powder", category: "HoReCa", price: 380, pack: "100gm Sachet", app: "Beverages", badge: "", desc: "Warm dry blend of ginger, cardamom, cinnamon, and pepper extracts for B2B tea chains.", rate: 4.6, reviews: 16 },
  { id: "horeca-5", name: "VinJel Strawberry Jelly Crystals", category: "HoReCa", price: 140, pack: "500gm Pouch", app: "Indian Sweets", badge: "BESTSELLER", desc: "Gelatin-free, 100% Vegetarian fruit jelly crystals. Excellent setting, wobble, and shine.", rate: 4.8, reviews: 25 },
  { id: "horeca-6", name: "Vinsmooth Chapathi & Naan Improver", category: "HoReCa", price: 240, pack: "1 Kg Pack", app: "Bread & Buns", badge: "", desc: "Keeps rotis, naans, and chapathis soft for hours. Retains internal moisture. Replaces cooking oil.", rate: 4.7, reviews: 20 },
  { id: "horeca-7", name: "Goldsberg Namkeen & Savouries Oil Saver", category: "HoReCa", price: 280, pack: "1 Kg Pack", app: "Savouries & Namkeen", badge: "BESTSELLER", desc: "Revolutionary oil saver blend. Forms micro-barrier to reduce frying oil absorption in namkeens.", rate: 4.9, reviews: 36 },

  // Contract Mfg & Private Label (38-41)
  { id: "contract-1", name: "Private Label Sachet Packing 10g", category: "Contract Mfg", price: 50, pack: "100gm Sachet", app: "Beverages", badge: "NEW", desc: "Contract packaging service for 10g sachets. High-speed automated machinery. Mock pricing is setup fee.", rate: 4.9, reviews: 15 },
  { id: "contract-2", name: "Private Label Bulk Blending", category: "Contract Mfg", price: 90, pack: "25 Kg Bulk", app: "Cakes & Pastries", badge: "", desc: "Third party job work and custom recipe blending under NDA. 20,000 Sq.ft facility capacity.", rate: 4.8, reviews: 8 },
  { id: "contract-3", name: "Private Label Drinking Chocolate", category: "Contract Mfg", price: 210, pack: "25 Kg Bulk", app: "Beverages", badge: "NEW", desc: "Bulk manufacturing and custom label branding of drinking chocolate for chains and startups.", rate: 4.7, reviews: 5 },
  { id: "contract-4", name: "Private Label Bread Improver Concentrate", category: "Contract Mfg", price: 280, pack: "25 Kg Bulk", app: "Bread & Buns", badge: "", desc: "Custom strength bread improver concentrate blending in bulk quantities. Delivery pan-India.", rate: 4.8, reviews: 10 }
];

export default function Products() {
  const location = useLocation();
  
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPacks, setSelectedPacks] = useState([]);
  const [selectedApps, setSelectedApps] = useState([]);
  const [priceRange, setPriceRange] = useState(600);
  const [sortBy, setSortBy] = useState("relevance");

  // Lead Modal state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [buyerName, setBuyerName] = useState("");
  const [buyerMobile, setBuyerMobile] = useState("");
  const [buyerCity, setBuyerCity] = useState("");
  const [buyerQty, setBuyerQty] = useState("100 Kg");
  const [modalSuccess, setModalSuccess] = useState(false);

  // Initialize filter state from Header search redirects
  useEffect(() => {
    if (location.state) {
      if (location.state.category && location.state.category !== "All") {
        setSelectedCategories([location.state.category]);
      }
      if (location.state.search) {
        setSearchQuery(location.state.search);
      }
      // Clear history state to prevent reload locking
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const categoriesOptions = ["Bakery", "Beverages", "Ice Cream", "HoReCa", "Contract Mfg"];
  const packsOptions = ["100gm Sachet", "500gm Pouch", "1 Kg Pack", "5 Kg Pack", "25 Kg Bulk"];
  const appsOptions = ["Bread & Buns", "Cakes & Pastries", "Ice Cream", "Beverages", "Cookies & Biscuits", "Savouries & Namkeen", "Indian Sweets"];

  const handleCategoryToggle = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handlePackToggle = (p) => {
    setSelectedPacks(prev => 
      prev.includes(p) ? prev.filter(item => item !== p) : [...prev, p]
    );
  };

  const handleAppToggle = (app) => {
    setSelectedApps(prev => 
      prev.includes(app) ? prev.filter(item => item !== app) : [...prev, app]
    );
  };

  const handleClearAll = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedPacks([]);
    setSelectedApps([]);
    setPriceRange(600);
  };

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((prod) => {
        const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          prod.desc.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCat = selectedCategories.length === 0 || selectedCategories.includes(prod.category);
        const matchesPack = selectedPacks.length === 0 || selectedPacks.includes(prod.pack);
        const matchesApp = selectedApps.length === 0 || selectedApps.includes(prod.app);
        const matchesPrice = prod.price <= priceRange;

        return matchesSearch && matchesCat && matchesPack && matchesApp && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        return 0; // relevance (natural order)
      });
  }, [searchQuery, selectedCategories, selectedPacks, selectedApps, priceRange, sortBy]);

  const handleEnquiryClick = (prod) => {
    setSelectedProduct(prod);
    setModalOpen(true);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (buyerName && buyerMobile && buyerCity) {
      setModalSuccess(true);
      setTimeout(() => {
        setModalSuccess(false);
        setModalOpen(false);
        setBuyerName("");
        setBuyerMobile("");
        setBuyerCity("");
        setSelectedProduct(null);
      }, 3000);
    }
  };

  return (
    <div className="im-products-page">
      {/* Search Result Top Info Bar */}
      <div className="im-products-result-header">
        <div className="container result-header-flex">
          <p className="results-count-text">
            Showing <strong>{filteredProducts.length}</strong> Food Ingredients & Premixes
          </p>
          <div className="results-sorting-controls">
            <div className="sort-control-group">
              <ArrowUpDown size={14} />
              <span>Sort By:</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="relevance">Relevance</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container products-page-body-grid">
        
        {/* LEFT SIDEBAR: FILTERS */}
        <aside className="im-filters-sidebar">
          <div className="sidebar-title-row">
            <h3><Filter size={16} /> Filter By</h3>
            <button onClick={handleClearAll} className="clear-filters-link">Clear All</button>
          </div>

          {/* Search bar inside sidebar */}
          <div className="sidebar-filter-block">
            <h4>Keyword Search</h4>
            <div className="sidebar-search-box">
              <input
                type="text"
                placeholder="Search within results..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={14} className="search-box-icon" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="sidebar-filter-block">
            <h4>Category</h4>
            <div className="checkbox-list">
              {categoriesOptions.map((cat, idx) => (
                <label key={idx} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryToggle(cat)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Pack Size Filter */}
          <div className="sidebar-filter-block">
            <h4>Pack Size</h4>
            <div className="checkbox-list">
              {packsOptions.map((p, idx) => (
                <label key={idx} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedPacks.includes(p)}
                    onChange={() => handlePackToggle(p)}
                  />
                  <span>{p}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Application Filter */}
          <div className="sidebar-filter-block">
            <h4>Application</h4>
            <div className="checkbox-list">
              {appsOptions.map((app, idx) => (
                <label key={idx} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedApps.includes(app)}
                    onChange={() => handleAppToggle(app)}
                  />
                  <span>{app}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="sidebar-filter-block">
            <h4>Max Price: <span className="price-tag-value">₹{priceRange}/kg</span></h4>
            <input
              type="range"
              min="50"
              max="600"
              step="10"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="price-range-slider-input"
            />
            <div className="slider-limits">
              <span>₹50</span>
              <span>₹600</span>
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT: PRODUCT LIST */}
        <main className="im-products-listing-main">
          {filteredProducts.length === 0 ? (
            <div className="no-products-found-card card">
              <h2>No Matching Products Found</h2>
              <p>Try clearing your active filters or searching for another ingredient.</p>
              <button onClick={handleClearAll} className="im-btn im-btn-teal mt-2">
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="im-products-b2b-grid">
              {filteredProducts.map((prod) => (
                <div key={prod.id} className="im-b2b-product-card card">
                  <div className="b2b-img-box">
                    <img src={getProductImage(prod.name, prod.category)} alt={prod.name} className="b2b-product-img-file" />
                    {prod.badge && (
                      <span className={`b2b-badge ${prod.badge === "NEW" ? "badge-red" : "badge-green"}`}>
                        {prod.badge}
                      </span>
                    )}
                  </div>
                  
                  <div className="b2b-card-content">
                    <div className="b2b-header-row">
                      <h3 className="b2b-product-name">{prod.name}</h3>
                      <span className="b2b-category-pill">{prod.category}</span>
                    </div>

                    <p className="b2b-product-desc">{prod.desc}</p>
                    
                    <div className="b2b-specs-row">
                      <span><strong>Pack Size:</strong> {prod.pack}</span>
                      <span><strong>Application:</strong> {prod.app}</span>
                    </div>

                    <div className="b2b-rating-row">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#FFC107" color="#FFC107" />)}
                      </div>
                      <span className="rating-txt">{prod.rate} ({prod.reviews} Reviews)</span>
                    </div>

                    <div className="b2b-price-box">
                      <span className="price-amount">₹{prod.price}</span>
                      <span className="price-unit">/ kilogram</span>
                    </div>

                    <div className="b2b-location-txt">
                      <MapPin size={12} /> Bangalore, Karnataka
                    </div>

                    <div className="b2b-card-buttons-row">
                      <button 
                        onClick={() => handleEnquiryClick(prod)}
                        className="im-btn im-btn-teal btn-enquiry"
                      >
                        Get Best Price
                      </button>
                      <Link 
                        to={`/product/${prod.id}`}
                        className="im-btn im-btn-teal-outline btn-details"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Get Best Price B2B Lead Modal */}
      {modalOpen && selectedProduct && (
        <div className="im-modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="im-lead-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setModalOpen(false)}>
              <X size={20} />
            </button>
            
            {modalSuccess ? (
              <div className="modal-success-state">
                <CheckCircle size={50} className="success-icon" />
                <h3>Requirement Submitted!</h3>
                <p>We have forwarded your request for <strong>{selectedProduct.name}</strong> to the sales desk.</p>
                <p className="note">Our executive will call you within 2-4 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="modal-enquiry-form">
                <h3>Get Instant Quotes</h3>
                <p className="subtitle">Requesting pricing details for <strong>{selectedProduct.name}</strong></p>
                
                <div className="form-group">
                  <label>Selected Product</label>
                  <input type="text" value={selectedProduct.name} disabled className="disabled-input" />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Your Name*</label>
                    <input 
                      type="text" 
                      placeholder="Enter Full Name" 
                      value={buyerName} 
                      onChange={(e) => setBuyerName(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number*</label>
                    <div className="mobile-input-wrapper">
                      <span className="prefix">+91</span>
                      <input 
                        type="tel" 
                        placeholder="Your 10-digit number" 
                        value={buyerMobile} 
                        onChange={(e) => setBuyerMobile(e.target.value)}
                        required 
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Your City*</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Bangalore" 
                      value={buyerCity} 
                      onChange={(e) => setBuyerCity(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Estimated Quantity Needed</label>
                    <select value={buyerQty} onChange={(e) => setBuyerQty(e.target.value)}>
                      <option value="50 Kg">50 - 100 Kg</option>
                      <option value="100 Kg">100 - 500 Kg</option>
                      <option value="500 Kg">500 Kg - 1 Tonne</option>
                      <option value="1000 Kg">Above 1 Tonne</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Add Requirement Details</label>
                  <textarea 
                    rows={3} 
                    placeholder="Provide details about packaging requirement, customized flavour profile, or dispatch dates..."
                  />
                </div>

                <button type="submit" className="modal-submit-btn">
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
