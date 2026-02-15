'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html, useProgress } from '@react-three/drei';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Model from './Model';
import { ErrorFallback } from './ErrorFallback';
import { FaSpinner } from 'react-icons/fa';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#1a1a1a', border: '0.0625rem solid #333' }}>
        <FaSpinner className="animate-spin mx-auto text-2xl mb-2" style={{ color: 'var(--color-accent)' }} />
        <p className="font-semibold" style={{ color: '#999' }}>모델 로딩중... {progress.toFixed(0)}%</p>
      </div>
    </Html>
  );
}

export default function Model3DDetailed({ url }: { url: string }) {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden relative" style={{ backgroundColor: '#111111' }}>
      <Canvas
        camera={{ position: [0, 10, 80], fov: 20 }}
        style={{ background: 'linear-gradient(to bottom, #111111, #000000)' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={<Loader />}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Model url={url} />
            <Environment preset="city" />
          </ErrorBoundary>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
