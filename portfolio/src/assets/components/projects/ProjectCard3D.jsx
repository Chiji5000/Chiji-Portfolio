// src/components/ProjectCard3D.jsx
import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "@react-three/drei";

const ProjectCard3D = ({ imageSrc, title, onClick }) => {
  const meshRef = useRef();
  // Load texture from image source
  const texture = useLoader(THREE.TextureLoader, imageSrc);

  // Slowly rotate card
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(Date.now() / 2000) * 0.05; // slight vertical oscillation
    }
  });

  return (
    <mesh
      ref={meshRef}
      onClick={onClick}
      scale={[2, 3, 0.1]} // card aspect ratio ~2:3
      castShadow
      receiveShadow
    >
      {/* Plane geometry to display texture */}
      <planeGeometry args={[1, 1.5]} />
      <meshStandardMaterial map={texture} />

      {/* Title below the card using Html overlay */}
      <Html position={[0, -1, 0]} center>
        <div
          style={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            width: "120px",
          }}
        >
          {title}
        </div>
      </Html>
    </mesh>
  );
};

export default ProjectCard3D;
