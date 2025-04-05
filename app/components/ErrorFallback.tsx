'use client';

import { Html } from '@react-three/drei';

export function ErrorFallback({ error }: { error: Error }) {
  console.error('모델 로딩 실패:', error);

  return (
    <>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <Html center>
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <p className="text-red-500 font-semibold">
            모델 로딩 실패: {error.message}
          </p>
        </div>
      </Html>
    </>
  );
}
