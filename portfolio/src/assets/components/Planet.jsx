import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js"; // Correct import
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js"; // If you use text geometry

function Planet() {
  const [font, setFont] = useState(null);

  useEffect(() => {
    const loader = new FontLoader();
    loader.load(
      "/fonts/helvetiker_regular.typeface.json", // Make sure this path is correct and font JSON is served
      (loadedFont) => {
        setFont(loadedFont);
      },
      undefined,
      (error) => {
        console.error("An error happened loading the font:", error);
      }
    );
  }, []);

  if (!font) {
    return null; // or a loader/spinner
  }

  // Example: create text geometry
  const textGeometry = new TextGeometry("Hello Planet", {
    font: font,
    size: 1,
    height: 0.1,
  });

  const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);

  // Use textMesh in your scene, or return a primitive object

  return <primitive object={textMesh} />;
}

export default Planet;
