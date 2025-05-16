import React from "react";

export default function OrbitPath({ radius }) {
  const segments = 64;
  const points = [];

  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * 2 * Math.PI;
    points.push([Math.cos(theta) * radius, 0, Math.sin(theta) * radius]);
  }

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(points.flat())}
          count={points.length}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="white"
        linewidth={1}
        transparent
        opacity={0.2}
      />
    </line>
  );
}
