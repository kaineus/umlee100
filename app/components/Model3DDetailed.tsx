'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, GizmoHelper, GizmoViewport, Environment, Stats } from '@react-three/drei';
import { Suspense, useState } from 'react';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={0.6} position={[0, -1, 0]} />;
}

export default function Model3DDetailed({ url }: { url: string }) {
  const [showStats, setShowStats] = useState(false);
  
  return (
    <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden relative">
      <Canvas
        camera={{ position: [0, 5, 40], fov: 25 }}
        style={{ background: 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />
        <Suspense fallback={null}>
          <Model url={url} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minDistance={30}
          maxDistance={160}
          minAzimuthAngle={-Math.PI}
          maxAzimuthAngle={Math.PI}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
        />
        <GizmoHelper
          alignment="bottom-right"
          margin={[80, 80]}
        >
          <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
        </GizmoHelper>
        {showStats && <Stats />}
      </Canvas>      
    </div>
  );
} 