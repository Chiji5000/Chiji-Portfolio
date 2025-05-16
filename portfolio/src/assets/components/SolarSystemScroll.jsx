import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";

// --- Twinkling Star Component ---
const TwinklingStar = ({ position }) => {
  const starRef = useRef();
  useFrame(({ clock }) => {
    if (starRef.current) {
      // Flicker opacity between 0.3 and 1.0 using sine wave
      starRef.current.material.opacity = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(clock.getElapsedTime() * 10 + position[0]));
    }
  });
  return (
    <mesh position={position} ref={starRef}>
      <sphereGeometry args={[0.1, 6, 6]} />
      <meshBasicMaterial color="white" transparent opacity={0.8} />
    </mesh>
  );
};

// --- Orbit Line Component ---
const OrbitLine = ({ radius }) => {
  const segments = 64;
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * 2 * Math.PI;
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    return pts;
  }, [radius]);

  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  return (
    <lineLoop geometry={geometry}>
      <lineBasicMaterial attach="material" color="gray" linewidth={1} />
    </lineLoop>
  );
};

// --- Moving Comet Component ---
const MovingComet = () => {
  const cometRef = useRef();
  // Randomize initial position & speed on mount
  const { startAngle, speed, radius, height } = useMemo(() => ({
    startAngle: Math.random() * Math.PI * 2,
    speed: 0.8 + Math.random() * 1.2,
    radius: 35 + Math.random() * 10,
    height: -2 + Math.random() * 4,
  }), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const angle = (startAngle + t * speed) % (Math.PI * 2);
    if (cometRef.current) {
      // Move comet in a circular path with some height offset
      cometRef.current.position.set(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      );
      // Rotate comet to face direction of motion (approx)
      cometRef.current.rotation.y = -angle;
    }
  });

  return (
    <mesh ref={cometRef}>
      <sphereGeometry args={[0.15, 8, 8]} />
      <meshBasicMaterial color="white" />
      {/* Comet Tail: a stretched cone with additive blending */}
      <mesh position={[-0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.1, 0.6, 8]} />
        <meshBasicMaterial
          color="white"
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </mesh>
  );
};

const Planet = ({ name, color, size, distance, speed, ring, moons }) => {
  const planetRef = useRef();
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * speed; // revolution
    }
    if (planetRef.current) {
      planetRef.current.rotation.y = t * 0.5; // self-rotation
    }
  });

  return (
    <group ref={groupRef}>
      {/* Orbit Line */}
      <OrbitLine radius={distance} />

      <mesh ref={planetRef} position={[distance, 0, 0]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {ring && (
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[distance, 0, 0]}>
          <ringGeometry args={[size * 1.2, size * 1.8, 64]} />
          <meshBasicMaterial color={ring.color} side={THREE.DoubleSide} />
        </mesh>
      )}

      {moons &&
        moons.map((moon, index) => (
          <mesh
            key={index}
            position={[distance + moon.distance, 0, 0]}
            rotation={[0, 0, 0]}
          >
            <sphereGeometry args={[moon.size, 16, 16]} />
            <meshStandardMaterial color={moon.color} />
          </mesh>
        ))}

      <Text
        position={[distance, size + 0.5, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
};

const SolarSystemScroll = () => {
  // Generate random positions for twinkling stars outside main stars component
  const twinkleStarsPositions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push([
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 100 + 20,
        (Math.random() - 0.5) * 200,
      ]);
    }
    return arr;
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 20, 70], fov: 45 }}
      style={{ height: "100vh", background: "black" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} intensity={3} />
      <Stars radius={300} depth={60} count={10000} factor={7} fade />
      <OrbitControls enableZoom={true} />

      {/* Sun with Lens Flare Glow */}
      <group>
        <mesh>
          <sphereGeometry args={[4, 64, 64]} />
          <meshStandardMaterial emissive="orange" emissiveIntensity={1.5} />
        </mesh>

        {/* Glow Halo */}
        <mesh>
          <ringGeometry args={[4.2, 5, 64]} />
          <meshBasicMaterial
            color="orange"
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>
      <Text
        position={[0, 5.5, 0]}
        fontSize={1}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Sun
      </Text>

      {/* Planets */}
      <Planet name="Mercury" color="gray" size={0.3} distance={6} speed={0.8} />
      <Planet name="Venus" color="yellow" size={0.5} distance={8} speed={0.7} />
      <Planet
        name="Earth"
        color="blue"
        size={0.5}
        distance={10}
        speed={0.6}
        moons={[{ size: 0.1, distance: 1, color: "white" }]}
      />
      <Planet
        name="Mars"
        color="red"
        size={0.4}
        distance={12}
        speed={0.5}
        moons={[{ size: 0.1, distance: 1.2, color: "gray" }]}
      />
      <Planet
        name="Jupiter"
        color="orange"
        size={1.2}
        distance={16}
        speed={0.4}
        moons={[
          { size: 0.2, distance: 1.4, color: "white" },
          { size: 0.15, distance: 2, color: "gray" },
        ]}
      />
      <Planet
        name="Saturn"
        color="goldenrod"
        size={1.1}
        distance={20}
        speed={0.3}
        ring={{ color: "wheat" }}
        moons={[{ size: 0.15, distance: 1.6, color: "white" }]}
      />
      <Planet
        name="Uranus"
        color="lightblue"
        size={0.9}
        distance={24}
        speed={0.2}
        ring={{ color: "lightgray" }}
      />
      <Planet
        name="Neptune"
        color="blue"
        size={0.8}
        distance={28}
        speed={0.1}
      />
      <Planet
        name="Pluto"
        color="white"
        size={0.2}
        distance={32}
        speed={0.05}
      />

      {/* Asteroid belt */}
      {[...Array(100)].map((_, i) => {
        const angle = (i / 100) * Math.PI * 2;
        const radius = 14 + Math.random() * 1.5;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              (Math.random() - 0.5) * 0.3,
              Math.sin(angle) * radius,
            ]}
          >
            <sphereGeometry args={[0.05, 6, 6]} />
            <meshStandardMaterial color="gray" />
          </mesh>
        );
      })}
      {/* Twinkling Stars */}
      {twinkleStarsPositions.map((pos, idx) => (
        <TwinklingStar key={idx} position={pos} />
      ))}

      {/* Moving Comets */}
      {[...Array(3)].map((_, idx) => (
        <MovingComet key={idx} />
      ))}
    </Canvas>
  );
};
      
export default SolarSystemScroll
