export default function ImageSkeleton() {
  return (
    <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-gray-400 text-sm">이미지 로딩 중...</div>
      </div>
    </div>
  );
} 