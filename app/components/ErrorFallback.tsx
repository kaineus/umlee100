'use client';

import { Html } from '@react-three/drei';
import { theme } from '@/app/lib/theme';

export function ErrorFallback({ error }: { error: Error }) {
  console.error('모델 로딩 실패:', error);

  return (
    <>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={theme.accent} />
      </mesh>
      <Html center>
        <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#1a1a1a', border: '0.0625rem solid #333' }}>
          <p className="font-semibold" style={{ color: 'var(--color-accent)' }}>
            모델 로딩 실패: {error.message}
          </p>
        </div>
      </Html>
    </>
  );
}
