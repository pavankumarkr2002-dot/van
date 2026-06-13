import { useEffect, useState } from "react";
import { useImageCache } from "../context/ImageCacheContext";
import { Image as ImageIcon, Sparkles, KeyRound } from "lucide-react";

export default function ImagePlaceholder({ 
  promptKey, 
  promptText, 
  alt = "AntiGravity Fitness Equipment", 
  className = "", 
  aspectRatio = "16/9" 
}) {
  const { apiKey, imageCache, generateImage, loadingPrompts } = useImageCache();
  const [hasAttempted, setHasAttempted] = useState(false);

  const imageUrl = imageCache[promptKey];
  const isLoading = loadingPrompts[promptKey] || (apiKey && !imageUrl && !hasAttempted);

  useEffect(() => {
    if (apiKey && !imageUrl && !isLoading && !hasAttempted) {
      setHasAttempted(true);
      generateImage(promptKey, promptText);
    }
  }, [apiKey, imageUrl, isLoading, hasAttempted, promptKey, promptText, generateImage]);

  // If API key is changed, reset attempt state
  useEffect(() => {
    setHasAttempted(false);
  }, [apiKey]);

  const style = {
    aspectRatio: aspectRatio,
    width: "100%",
    display: "block"
  };

  if (isLoading) {
    return (
      <div className={`skeleton-placeholder pulsing ${className}`} style={style}>
        <div className="skeleton-content">
          <Sparkles className="skeleton-sparkles-icon" size={24} />
          <span>Generating AI Image...</span>
        </div>
      </div>
    );
  }

  if (imageUrl) {
    return (
      <img 
        src={imageUrl} 
        alt={alt} 
        className={`fade-in-image ${className}`} 
        style={{ ...style, objectFit: "cover" }} 
        loading="lazy"
      />
    );
  }

  // Fallback state if no API key or generation failed
  return (
    <div className={`fallback-placeholder-card ${className}`} style={style}>
      <div className="fallback-inner">
        <ImageIcon className="fallback-image-icon" size={32} />
        <h4>{alt}</h4>
        {!apiKey ? (
          <p className="api-notice">
            <KeyRound size={12} className="inline-icon" /> Set Gemini API key to generate
          </p>
        ) : (
          <p className="api-notice error">
            Generation failed. Check API key.
          </p>
        )}
      </div>
    </div>
  );
}
