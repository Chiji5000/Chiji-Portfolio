// src/components/LoadScripts.jsx
import { useEffect } from "react";

function LoadScripts() {
  useEffect(() => {
    const scripts = [
      "./main.js",     // Path to your main.js
      "./plugins.js",  // Path to your plugins.js
    ];

    const scriptElements = scripts.map((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
      return script;
    });

    // Clean up scripts on unmount
    return () => {
      scriptElements.forEach((script) => {
        document.body.removeChild(script);
      });
    };
  }, []);

  return null; // No visual output
}

export default LoadScripts;
