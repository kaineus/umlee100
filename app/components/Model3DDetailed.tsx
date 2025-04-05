'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { isR2Url, extractR2Key, getR2PublicUrl } from '../lib/r2-config';

function Model({ url }: { url: string }) {
  // R2 URL 처리
  const processedUrl = isR2Url(url)
    ? getR2PublicUrl(extractR2Key(url))
    : url;

  try {
    const { scene } = useGLTF(processedUrl);
    return <primitive object={scene} scale={0.4} position={[0, -1, 0]} />;
  } catch (err) {
    console.error('상세보기 - 모델 로딩 실패:', err);
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }
}

export default function Model3DDetailed({ url }: { url: string }) {
  return (
    <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden relative">
      <Canvas
        camera={{ position: [0, 10, 80], fov: 20 }}
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
          minDistance={50}
          maxDistance={200}
          minAzimuthAngle={-Math.PI}
          maxAzimuthAngle={Math.PI}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
        />
      </Canvas>      
    </div>
  );
} 