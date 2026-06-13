import { Package, HelpCircle } from "lucide-react";

export default function ProductRowCard({ 
  name, 
  description, 
  dosage, 
  packSize, 
  packing, 
  image, 
  colours, 
  flavours 
}) {
  const finalPack = packSize || packing;

  return (
    <div className="product-row-card">
      <div className="product-card-image-wrapper">
        <img src={image} alt={name} className="product-card-image" loading="lazy" />
      </div>
      <div className="product-card-details">
        <h3 className="product-card-title">{name}</h3>
        <p className="product-card-description">{description}</p>
        
        <div className="product-meta-specs">
          {dosage && (
            <div className="spec-item">
              <span className="spec-label">Dosage:</span>
              <span className="spec-val">{dosage}</span>
            </div>
          )}

          {finalPack && (
            <div className="spec-item">
              <span className="spec-label">Pack Size:</span>
              <span className="spec-val">
                <Package size={14} className="spec-icon" /> {finalPack}
              </span>
            </div>
          )}
          
          {colours && (
            <div className="spec-item full-width-spec">
              <span className="spec-label">Colours:</span>
              <span className="spec-val-badge-container">
                {colours.split("|").map((col, idx) => (
                  <span key={idx} className="spec-val-badge">{col.trim()}</span>
                ))}
              </span>
            </div>
          )}

          {flavours && (
            <div className="spec-item full-width-spec">
              <span className="spec-label">Flavours:</span>
              <span className="spec-val-badge-container">
                {flavours.split("|").map((flav, idx) => (
                  <span key={idx} className="spec-val-badge accent">{flav.trim()}</span>
                ))}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
