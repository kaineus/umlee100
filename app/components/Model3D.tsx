'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import { isR2Url, extractR2Key, getR2PublicUrl } from '../lib/r2-config';

// 모델 컴포넌트
function Model({ url }: { url: string }) {
  // R2 URL 처리
  const processedUrl = isR2Url(url)
    ? getR2PublicUrl(extractR2Key(url))
    : url;

  try {
    const { scene } = useGLTF(processedUrl);
    return <primitive object={scene} scale={0.8} position={[0, 0, 0]} />;
  } catch (err) {
    console.error('모델 로딩 실패:', err);
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }
}

export default function Model3D({ url }: { url: string }) {
  return (
    <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 35 }}
        style={{ background: 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model url={url} />
        </Suspense>
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          minDistance={10}
          maxDistance={40}
        />
      </Canvas>
    </div>
  );
} 