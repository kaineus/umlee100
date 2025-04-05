'use client';

// 클라이언트 측에서 R2 파일 URL 생성 헬퍼 함수
export function getR2PublicUrl(key: string): string {
  // 클라이언트 환경 변수 사용
  const publicUrlBase = process.env.CLOUDFLARE_R2_PUBLIC_URL || 
    `https://${process.env.CLOUDFLARE_R2_BUCKET || 'umlee100'}.r2.cloudflarestorage.com`;
    
  return `${publicUrlBase}/${key}`;
} 