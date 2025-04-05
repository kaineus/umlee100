'use client';

import { useGLTF } from '@react-three/drei';
import { isR2Url, extractR2Key, getR2PublicUrl } from '../lib/r2-config';

export default function Model({ url }: { url: string }) {
  const finalUrl = isR2Url(url) ? getR2PublicUrl(extractR2Key(url)) : url;
  const { scene } = useGLTF(finalUrl); // ❗ try/catch 안 쓰고 최상단에 위치
  return <primitive object={scene} scale={0.8} position={[0, 0, 0]} />;
}
