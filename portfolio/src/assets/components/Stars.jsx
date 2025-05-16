import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Stars({
  starCount,
  radius,
  size,
  color,
  galaxyDisk = false,
  rotationSpeed = 0,
}) {
  const points = useRef();

  const positions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const r = galaxyDisk
      ? radius * Math.sqrt(Math.random())
      : Math.random() * radius;
    const theta = Math.random() * 2 * Math.PI;
    const phi = galaxyDisk
      ? (Math.random() - 0.5) * 0.1
      : Math.acos(2 * Math.random() - 1);

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    positions.set([x, y, z], i * 3);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  useFrame(() => {
    if (points.current) {
      points.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial color={color} size={size} sizeAttenuation />
    </points>
  );
}
