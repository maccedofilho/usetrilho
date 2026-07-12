"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import type { Group } from "three";

type Pointer = {
  x: number;
  y: number;
};

function RailObject({ pointer }: { pointer: Pointer }) {
  const group = useRef<Group>(null);
  const { invalidate } = useThree();

  useEffect(() => {
    invalidate();
  }, [invalidate, pointer]);

  useFrame(() => {
    if (!group.current) {
      return;
    }

    const targetX = 0.38 + pointer.y * 0.14;
    const targetY = -0.48 + pointer.x * 0.18;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.06;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.06;

    if (
      Math.abs(targetX - group.current.rotation.x) > 0.001 ||
      Math.abs(targetY - group.current.rotation.y) > 0.001
    ) {
      invalidate();
    }
  });

  return (
    <group ref={group} rotation={[0.38, -0.48, -0.1]} scale={1.08}>
      <mesh position={[0.18, 0, -0.22]}>
        <torusGeometry args={[1.08, 0.25, 8, 48]} />
        <meshBasicMaterial color="#f7efe6" />
        <Edges color="#1c1611" threshold={12} />
      </mesh>
      {[-0.58, 0, 0.58].map((y, index) => (
        <mesh
          key={y}
          position={[index === 1 ? 0.15 : -0.08, y, 0.12 + index * 0.08]}
          rotation={[0, 0, -0.08]}
        >
          <boxGeometry args={[3.35, 0.26, 0.34]} />
          <meshBasicMaterial color={index === 1 ? "#1c1611" : "#ff5c00"} />
          <Edges color="#1c1611" threshold={12} />
        </mesh>
      ))}
      <mesh position={[1.04, 0.72, 0.58]}>
        <sphereGeometry args={[0.2, 16, 12]} />
        <meshBasicMaterial color="#d64500" />
        <Edges color="#1c1611" threshold={12} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  const [pointer, setPointer] = useState<Pointer>({ x: 0, y: 0 });

  return (
    <div
      className="hero-canvas"
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        setPointer({
          x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
          y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
        });
      }}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 38 }}
        dpr={[1, 1.5]}
        frameloop="demand"
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      >
        <RailObject pointer={pointer} />
      </Canvas>
    </div>
  );
}
