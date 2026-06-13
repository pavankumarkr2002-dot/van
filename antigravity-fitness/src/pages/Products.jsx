import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { Search, SlidersHorizontal, ArrowUpDown, X, Check, ShoppingBag } from "lucide-react";

const productsData = [
  // CARDIO
  {
    id: "T-500",
    name: "AntiGravity Pro Treadmill T-500",
    category: "Cardio",
    price: 45999,
    specs: "3.5 HP motor, 0-20 km/h speed range, 120 kg max user weight, 16 automatic incline levels.",
    imgKey: "TREADMILL",
    imgPrompt: "Premium black and orange commercial treadmill, studio product shot, white background, sharp shadows, 3D render quality",
    dateAdded: 202401
  },
  {
    id: "T-800",
    name: "Elite Treadmill T-800",
    category: "Cardio",
    price: 72500,
    specs: "4.5 HP commercial AC motor, 0-22 km/h, 150 kg weight capacity, 20 levels of automatic incline, Bluetooth console.",
    imgKey: "TREADMILL",
    imgPrompt: "Premium black and orange commercial treadmill, studio product shot, white background, sharp shadows, 3D render quality",
    dateAdded: 202405
  },
  {
    id: "E-200",
    name: "Commercial Elliptical E-200",
    category: "Cardio",
    price: 38500,
    specs: "20 electro-magnetic resistance levels, bidirectional stride, 130 kg user capacity, oversized gel pedals.",
    imgKey: "ELLIPTICAL",
    imgPrompt: "Sleek black elliptical cross trainer machine, orange accents, studio product shot on white background, photorealistic",
    dateAdded: 202312
  },
  {
    id: "B-100",
    name: "Magnetic Exercise Bike B-100",
    category: "Cardio",
    price: 22999,
    specs: "8-level magnetic resistance, LCD stats display, 120 kg max capacity, adjustable ergonomic seat.",
    imgKey: "EXERCISE BIKE",
    imgPrompt: "Premium upright exercise bike black and orange color, studio product shot white background, 3D render",
    dateAdded: 202402
  },
  // STRENGTH
  {
    id: "D-Set",
    name: "Rubber Hex Dumbbell Set (5-50kg)",
    category: "Strength",
    price: 28500,
    specs: "Premium hex shape, rubber coated ends, contoured chrome handles. Includes sturdy 3-tier A-frame storage rack.",
    imgKey: "DUMBBELLS",
    imgPrompt: "Set of hexagonal rubber dumbbells 5kg to 50kg on a rack, black and orange, studio product shot",
    dateAdded: 202311
  },
  {
    id: "B-Set",
    name: "Olympic Barbell + Weight Plates Set",
    category: "Strength",
    price: 18999,
    specs: "7ft Olympic bar (20kg, 500 lbs capacity), knurled grip, brass bushings. Includes 100 kg of heavy cast iron plates.",
    imgKey: "BARBELL SET",
    imgPrompt: "Olympic barbell with weight plates set, black iron, studio product shot white background, photorealistic",
    dateAdded: 202403
  },
  {
    id: "Bench",
    name: "Adjustable FID Weight Bench",
    category: "Strength",
    price: 12500,
    specs: "7 backrest angle adjustments, 3 seat angles, 300 kg load capacity. Extra-thick commercial vinyl upholstery.",
    imgKey: "BENCH",
    imgPrompt: "Adjustable weight training bench black vinyl and orange frame, studio product shot white background",
    dateAdded: 202401
  },
  {
    id: "Dip-Station",
    name: "Pull-Up Dip Station",
    category: "Strength",
    price: 8999,
    specs: "Heavy-duty reinforced steel frame, max user weight 150 kg, comfort padded armrests, non-slip handles.",
    imgKey: "PULL-UP STATION",
    imgPrompt: "Heavy duty wall-mounted pull-up station black steel, studio product shot white background",
    dateAdded: 202309
  },
  {
    id: "Kettlebell-Set",
    name: "Cast Iron Kettlebell Set (8-32kg)",
    category: "Strength",
    price: 14500,
    specs: "Matte vinyl coated exterior, flat anti-wobble base, wide handles. 5-piece set (8kg, 12kg, 16kg, 24kg, 32kg).",
    imgKey: "KETTLEBELL SET",
    imgPrompt: "Set of cast iron kettlebells from 8kg to 32kg, matte black with orange weight labels, studio product shot white background",
    dateAdded: 202404
  },
  // MACHINES
  {
    id: "MG-7",
    name: "Multi-Station Home Gym MG-7",
    category: "Machines",
    price: 65000,
    specs: "7 training stations, 100 kg selectorized iron weight stack, steel cables, pulleys, commercial-grade frame.",
    imgKey: "MULTI GYM",
    imgPrompt: "Heavy duty multi-station home gym machine, black powder coat finish, studio product shot white background",
    dateAdded: 202310
  },
  {
    id: "Cable",
    name: "Cable Crossover Machine",
    category: "Machines",
    price: 85000,
    specs: "Dual swivel pulley adjustment system, 2x80 kg independent weight stacks, 20 adjustable vertical positions.",
    imgKey: "CABLE MACHINE",
    imgPrompt: "Professional cable crossover machine black and orange, studio product shot white background, commercial gym",
    dateAdded: 202402
  },
  {
    id: "Rowing-Machine",
    name: "Rowing Machine RM-300",
    category: "Machines",
    price: 35500,
    specs: "10 air-resistance settings, LCD tracking console, folding design for storage, 150 kg max weight capacity.",
    imgKey: "ROWING MACHINE",
    imgPrompt: "Commercial rowing machine black with orange handles, studio product shot white background",
    dateAdded: 202403
  },
  {
    id: "Smith-Machine",
    name: "Smith Machine with Rack",
    category: "Machines",
    price: 95000,
    specs: "Counter-balanced smooth guide bar, dual safety stops, built-in weight storage pegs, commercial plate-loaded gym rack.",
    imgKey: "MULTI GYM",
    imgPrompt: "Heavy duty multi-station home gym machine, black powder coat finish, studio product shot white background",
    dateAdded: 202406
  },
  // ACCESSORIES & RECOVERY
  {
    id: "Bands-Set",
    name: "Loop Resistance Bands Set",
    category: "Accessories",
    price: 1499,
    specs: "5 levels of loop resistance bands (X-Light to X-Heavy), latex-free, compact mesh carry bag included.",
    imgKey: "RESISTANCE BANDS",
    imgPrompt: "Set of premium loop resistance bands in orange and black packaging, studio product shot white background",
    dateAdded: 202308
  },
  {
    id: "Foam-Roller",
    name: "Premium Foam Roller",
    category: "Recovery",
    price: 1999,
    specs: "High-density EVA foam outer shell, hollow core, 60cm length, textured grid nodes for deep tissue massage.",
    imgKey: "FOAM ROLLER",
    imgPrompt: "Orange and black foam roller for muscle recovery, studio product shot white background",
    dateAdded: 202312
  },
  {
    id: "Yoga-Mat",
    name: "Anti-Slip Exercise Mat",
    category: "Accessories",
    price: 2499,
    specs: "6mm thickness, eco-friendly TPE, dual-sided non-slip grip, 183x61cm, includes matching orange carry strap.",
    imgKey: "YOGA MAT",
    imgPrompt: "Premium black yoga/exercise mat with orange AntiGravity logo, rolled and unrolled view, studio product shot",
    dateAdded: 202404
  }
];

export default function Products() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [enquiryList, setEnquiryList] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  // Update filter if redirected with category state
  useEffect(() => {
    if (location.state?.category) {
      setActiveFilter(location.state.category);
      // Clear location state after applying to avoid sticking on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const filters = ["All", "Cardio", "Strength", "Machines", "Accessories", "Recovery"];

  const handleAddEnquiry = (name) => {
    if (!enquiryList.includes(name)) {
      setEnquiryList(prev => [...prev, name]);
    }
    setToastMessage(`Added "${name}" to enquiry list`);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const filteredProducts = useMemo(() => {
    return productsData
      .filter((prod) => {
        const matchesSearch = prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          prod.specs.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeFilter === "All" || prod.category === activeFilter;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        return b.dateAdded - a.dateAdded; // newest
      });
  }, [searchTerm, activeFilter, sortBy]);

  return (
    <div className="anti-products-page">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <Check size={16} className="toast-success-icon" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>All Products</h1>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <span className="current">Products</span>
          </div>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <section className="products-toolbar-section">
        <div className="container toolbar-container">
          
          {/* Search Bar */}
          <div className="search-bar-box">
            <Search className="search-icon" size={18} />
            <input 
              type="text" 
              placeholder="Search equipment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="toolbar-search-input"
            />
          </div>

          {/* Sort Selector */}
          <div className="sort-box">
            <ArrowUpDown className="sort-icon" size={16} />
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="toolbar-sort-select"
            >
              <option value="newest">Newest Launches</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Filter Pills Bar */}
      <div className="filter-pills-bar-sticky">
        <div className="container filter-pills-wrapper">
          <SlidersHorizontal size={14} className="filter-icon-indicator" />
          <div className="filter-pills-scroll">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-pill-btn ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          
          {enquiryList.length > 0 && (
            <Link to="/contact" className="toolbar-enquiry-indicator">
              <ShoppingBag size={14} />
              <span>Enquiries ({enquiryList.length})</span>
            </Link>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <section className="products-grid-section section-padding">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="no-products-found">
              <h3>No equipment matches your search or filters.</h3>
              <button 
                onClick={() => { setSearchTerm(""); setActiveFilter("All"); }}
                className="btn btn-orange mt-2"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="products-4col-grid">
              {filteredProducts.map((prod) => (
                <div key={prod.id} className="bestseller-product-card card">
                  <div className="product-image-box">
                    <ImagePlaceholder
                      promptKey={prod.imgKey}
                      promptText={prod.imgPrompt}
                      alt={prod.name}
                      aspectRatio="16/10"
                    />
                    <span className="product-card-category-badge">{prod.category}</span>
                  </div>
                  <div className="product-card-body">
                    <h3 className="product-card-name">{prod.name}</h3>
                    <p className="product-card-spec-teaser">
                      {prod.specs.substring(0, 75)}...
                    </p>
                    <div className="product-card-price-row">
                      <span className="price-label">Price</span>
                      <span className="price-val">₹{prod.price.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="product-card-action-row">
                      <button 
                        onClick={() => handleAddEnquiry(prod.name)}
                        className="btn btn-orange btn-card-enquiry"
                      >
                        Add to Enquiry
                      </button>
                      <button 
                        onClick={() => setSelectedProduct(prod)}
                        className="btn btn-outline btn-details-link"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Details Modal Overlay */}
      {selectedProduct && (
        <div className="modal-overlay-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="product-details-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>
              <X size={20} />
            </button>
            
            <div className="modal-content-grid">
              <div className="modal-image-panel">
                <ImagePlaceholder
                  promptKey={selectedProduct.imgKey}
                  promptText={selectedProduct.imgPrompt}
                  alt={selectedProduct.name}
                  aspectRatio="16/10"
                />
              </div>
              <div className="modal-details-panel">
                <span className="modal-cat-tag">{selectedProduct.category}</span>
                <h2>{selectedProduct.name}</h2>
                <div className="modal-price">₹{selectedProduct.price.toLocaleString("en-IN")}</div>
                
                <div className="modal-specs-block">
                  <h3>Equipment Specifications:</h3>
                  <p>{selectedProduct.specs}</p>
                </div>
                
                <div className="modal-benefits-list">
                  <div className="benefit-item">✓ Commercial grade build quality</div>
                  <div className="benefit-item">✓ 2 Year comprehensive warranty</div>
                  <div className="benefit-item">✓ Free delivery and assembly in India</div>
                </div>

                <div className="modal-action-buttons">
                  <button 
                    onClick={() => {
                      handleAddEnquiry(selectedProduct.name);
                      setSelectedProduct(null);
                    }}
                    className="btn btn-orange"
                  >
                    Add To Enquiry List
                  </button>
                  <Link 
                    to="/contact" 
                    className="btn btn-outline"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Request Custom Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
