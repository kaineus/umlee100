import { S3Client } from '@aws-sdk/client-s3';
import { getR2PublicUrl as getPublicUrl } from './r2-config';

// Cloudflare R2 클라이언트 설정
export const r2Client = new S3Client({
  region: 'auto',
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY || ''
  }
});

// R2 버킷 이름 - 환경 변수에서 가져오거나 고정값 사용
export const bucketName = process.env.CLOUDFLARE_R2_BUCKET || 'umlee100';

// r2-config.ts의 getR2PublicUrl 함수를 재내보내기
export { getPublicUrl as getR2PublicUrl }; 