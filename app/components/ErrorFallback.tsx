'use client';

import { Html } from '@react-three/drei';

export function ErrorFallback({ error }: { error: Error }) {
  console.error('모델 로딩 실패:', error);

  return (
    <>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#fb3000" />
      </mesh>
      <Html center>
        <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#1a1a1a', border: '0.0625rem solid #333' }}>
          <p className="font-semibold" style={{ color: '#fb3000' }}>
            모델 로딩 실패: {error.message}
          </p>
        </div>
      </Html>
    </>
  );
}
