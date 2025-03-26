'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, GizmoHelper, GizmoViewport } from '@react-three/drei';
import { Suspense } from 'react';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={0.5} position={[0, -1, 0]} />;
}

export default function Model3D({ url }: { url: string }) {
  return (
    <div className="w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [0, 5, 40], fov: 25 }}
        style={{ background: '#f3f4f6' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model url={url} />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minDistance={30}
          maxDistance={120}
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
      </Canvas>
    </div>
  );
} 