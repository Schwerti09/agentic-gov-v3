'use client';

import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Nodes() {
  const group = React.useRef<THREE.Group>(null);

  React.useEffect(() => {
    if (!group.current) return;
    group.current.rotation.y = 0.6;
  }, []);

  const nodes = React.useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 6,
        ),
        risk: Math.random(),
      })),
    [],
  );

  return (
    <group ref={group}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 8, 5]} intensity={1.0} />
      <mesh>
        <sphereGeometry args={[0.01]} />
        <meshStandardMaterial transparent opacity={0} />
      </mesh>

      {nodes.map((n) => (
        <mesh key={n.id} position={[n.position.x, n.position.y, n.position.z]}>
          <sphereGeometry args={[0.18, 24, 24]} />
          <meshStandardMaterial color={n.risk > 0.7 ? '#FF3B30' : n.risk > 0.4 ? '#FFAA00' : '#00CC88'} />
        </mesh>
      ))}
    </group>
  );
}

export default function RiskGraph3D() {
  return (
    <div className="h-full w-full rounded-2xl overflow-hidden border border-white/10">
      <Canvas camera={{ position: [0, 2.2, 7], fov: 45 }}>
        <fog attach="fog" args={['#000000', 6, 14]} />
        <Nodes />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}
