import React from "react";
import * as THREE from "three";

export default function AsteroidBelt() {
  const asteroids = [];

  for (let i = 0; i < 400; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 26 + Math.random() * 4;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = (Math.random() - 0.5) * 0.5;

    asteroids.push(
      <mesh key={i} position={[x, y, z]}>
        <sphereGeometry args={[0.1 + Math.random() * 0.2, 6, 6]} />
        <meshStandardMaterial color="#888888" />
      </mesh>
    );
  }

  return <group>{asteroids}</group>;
}
