export default function ImageSkeleton() {
  return (
    <div className="w-full h-full animate-pulse rounded-lg overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-sm" style={{ color: '#666666' }}>이미지 로딩 중...</div>
      </div>
    </div>
  );
}
