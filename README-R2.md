# Cloudflare R2 설정 가이드

이 프로젝트는 Cloudflare R2를 스토리지로 사용하여 3D 모델링 파일과 이미지를 저장하고 제공합니다.

## 설정 방법

1. Cloudflare R2 계정 설정
   - [Cloudflare 대시보드](https://dash.cloudflare.com/)에서 R2 서비스 활성화
   - `umlee100` 이름의 버킷 생성
   - API 토큰 생성 (액세스 키 및 시크릿 키)

2. 환경 변수 설정
   - 프로젝트 루트에 `.env.local` 파일을 생성하고 다음 값을 입력:
   
   ```
   CLOUDFLARE_R2_ACCESS_KEY_ID=your_access_key_here
   CLOUDFLARE_R2_SECRET_ACCESS_KEY=your_secret_key_here
   CLOUDFLARE_R2_ENDPOINT=https://your_account_id.r2.cloudflarestorage.com
   CLOUDFLARE_R2_BUCKET=umlee100
   CLOUDFLARE_R2_PUBLIC_URL=https://pub-your_public_url.r2.dev
   ```

3. 공개 액세스 설정
   - Cloudflare R2 대시보드에서 `umlee100` 버킷에 대한 공개 액세스를 설정
   - 공개 URL을 `.env.local` 파일의 `CLOUDFLARE_R2_PUBLIC_URL` 값으로 설정

## 사용 방법

### 파일 업로드

Cloudflare 대시보드를 통해 R2 버킷에 파일을 직접 업로드하세요.

### 3D 모델 표시하기

3D 모델 URL을 `r2://` 프로토콜로 시작하여 참조할 수 있습니다.

```typescript
// 예시: 3d-works/page.tsx
const projects = [
  {
    // ...
    imageUrl: 'r2://yongsan.glb', // R2에 저장된 3D 모델
    // ...
  }
]
```

### 이미지 사용하기

일반 이미지는 Next.js의 Image 컴포넌트와 함께 사용할 수 있습니다.

```jsx
<Image 
  src={`${process.env.CLOUDFLARE_R2_PUBLIC_URL}/이미지파일.jpg`}
  alt="이미지 설명"
  width={600}
  height={400}
/>
```

## 주의사항

1. 공개 URL을 사용하는 경우, 누구나 URL을 알면 파일에 접근할 수 있습니다.
2. 환경 변수 파일(.env.local)은 버전 관리에 포함하지 마세요.
3. API 키는 안전하게 보관하고 주기적으로 갱신하세요. 