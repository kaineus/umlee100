/**
 * Cloudflare R2 설정 관리
 * 환경변수에서 설정값을 가져옵니다.
 */

// R2 공개 URL (환경변수에서 가져옴)
export const R2_PUBLIC_URL = process.env.CLOUDFLARE_R2_PUBLIC_URL || 'https://pub-72d12d452df34e21a92b52490a74585c.r2.dev';

// R2 URL인지 확인하는 함수
export function isR2Url(url: string): boolean {
  return url.startsWith('r2://');
}

// R2 형식에서 키 추출 (r2://filename.glb -> filename.glb)
export function extractR2Key(url: string): string {
  if (!isR2Url(url)) return url;
  return url.replace('r2://', '');
}

// R2 공개 URL 생성
export function getR2PublicUrl(key: string): string {
  return `${R2_PUBLIC_URL}/${key}`;
} 