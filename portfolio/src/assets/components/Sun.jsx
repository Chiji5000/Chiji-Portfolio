import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Sun() {
  const sunRef = useRef();
  const materialRef = useRef();

  useFrame(({ clock }) => {
    // Rotate the sun slowly
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.001;
    }

    // Flicker effect: oscillate emissiveIntensity between ~1.5 and 2.5 smoothly
    if (materialRef.current) {
      const flicker = 2 + Math.sin(clock.elapsedTime * 10) * 0.5;
      materialRef.current.emissiveIntensity = flicker;

      // Optional: subtle emissive color flicker from orange to yellowish-orange
      const flickerColorValue = 0.7 + Math.sin(clock.elapsedTime * 10) * 0.3;
      materialRef.current.emissive.setRGB(1, flickerColorValue, 0); // RGB with flickering green channel for warmth
    }
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[4, 64, 64]} />
      <meshStandardMaterial
        ref={materialRef}
        emissive="orange"
        emissiveIntensity={2}
        color="yellow"
        roughness={0.4}
        metalness={0.2}
      />
    </mesh>
  );
}
