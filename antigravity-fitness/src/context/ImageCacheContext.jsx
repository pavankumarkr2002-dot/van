import { createContext, useContext, useState, useEffect } from "react";

const ImageCacheContext = createContext();

export function ImageCacheProvider({ children }) {
  const [apiKey, setApiKeyState] = useState(() => {
    return localStorage.getItem("antigravity_gemini_api_key") || "";
  });
  const [imageCache, setImageCache] = useState({});
  const [loadingPrompts, setLoadingPrompts] = useState({});

  const setApiKey = (key) => {
    setApiKeyState(key);
    localStorage.setItem("antigravity_gemini_api_key", key);
  };

  const generateImage = async (promptKey, promptText) => {
    // If already cached, return it
    if (imageCache[promptKey]) {
      return imageCache[promptKey];
    }

    // If already loading this prompt, wait
    if (loadingPrompts[promptKey]) {
      return null;
    }

    if (!apiKey) {
      return null;
    }

    setLoadingPrompts(prev => ({ ...prev, [promptKey]: true }));

    try {
      // Clean up the key if there is whitespace
      const cleanKey = apiKey.trim();
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${cleanKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: promptText }] }],
            generationConfig: { responseModalities: ["TEXT", "IMAGE"] }
          })
        }
      );

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.statusText}`);
      }

      const data = await response.json();
      const candidates = data.candidates;
      if (!candidates || candidates.length === 0) {
        throw new Error("No candidates returned from Gemini API");
      }

      const parts = candidates[0].content?.parts || [];
      const inlineDataPart = parts.find(p => p.inlineData)?.inlineData;

      if (inlineDataPart) {
        const base64Url = `data:${inlineDataPart.mimeType};base64,${inlineDataPart.data}`;
        setImageCache(prev => ({ ...prev, [promptKey]: base64Url }));
        return base64Url;
      } else {
        console.warn(`No inline image data found for prompt key: ${promptKey}`);
        return null;
      }
    } catch (err) {
      console.error(`Error generating image for ${promptKey}:`, err);
      return null;
    } finally {
      setLoadingPrompts(prev => ({ ...prev, [promptKey]: false }));
    }
  };

  return (
    <ImageCacheContext.Provider value={{ apiKey, setApiKey, imageCache, generateImage, loadingPrompts }}>
      {children}
    </ImageCacheContext.Provider>
  );
}

export function useImageCache() {
  const context = useContext(ImageCacheContext);
  if (!context) {
    throw new Error("useImageCache must be used within an ImageCacheProvider");
  }
  return context;
}
