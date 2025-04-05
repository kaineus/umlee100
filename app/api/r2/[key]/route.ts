import { NextRequest, NextResponse } from 'next/server';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { r2Client } from '@/app/lib/cloudflare';
import { getR2PublicUrl } from '@/app/lib/r2-config';

// API 라우트 핸들러
export async function GET(
  request: NextRequest,
  { params }: { params: { key: string } }
) {
  const key = params.key;
  
  if (!key) {
    return NextResponse.json({ error: '파일 키가 지정되지 않았습니다' }, { status: 400 });
  }
  
  try {
    const bucketName = process.env.CLOUDFLARE_R2_BUCKET || '';

    // R2에서 객체 가져오기
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    });
    
    const response = await r2Client.send(command);
    const contentType = response.ContentType || 'application/octet-stream';
    
    // body가 null이면 에러 반환
    if (!response.Body) {
      return NextResponse.json(
        { error: '파일 내용을 가져올 수 없습니다.' },
        { status: 404 }
      );
    }

    // 스트림을 바이트 배열로 변환
    const bytes = await response.Body.transformToByteArray();
    
    // 공개 URL로 리디렉션 (getR2PublicUrl 함수 사용)
    return NextResponse.redirect(getR2PublicUrl(key));
  } catch (error) {
    console.error('R2 객체 가져오기 오류:', error);
    return NextResponse.json(
      { error: '파일을 가져오는 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 