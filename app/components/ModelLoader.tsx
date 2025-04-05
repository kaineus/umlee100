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
      <div className="bg-white p-4 rounded-lg shadow-lg text-center">
        <FaSpinner className="animate-spin text-blue-500 mx-auto text-2xl mb-2" />
        <p className="text-gray-700 font-semibold">모델 로딩중... {progress.toFixed(0)}%</p>
      </div>
    </Html>
  );
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
