'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import ImageSkeleton from './components/ImageSkeleton';

export default function Home() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const featuredWorkSectionRef = useRef<HTMLElement>(null);

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const scrollToFeaturedWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    featuredWorkSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 히어로 섹션 */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">안녕하세요,</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                이엄지<span className="text-black">입니다</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 mb-8">
              창의적인 웹 디자인과 몰입감 있는 3D 경험을 만드는 디자이너입니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={scrollToFeaturedWorks} className="px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors">
                작업물 보기
              </button>
              <Link href="/about" className="px-6 py-3 bg-white border border-neutral-300 rounded-full hover:bg-neutral-100 transition-colors">
                프로필 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 작업 섹션 */}
      <section ref={featuredWorkSectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">주요 작업</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FeaturedWork 
              title="웹 디자인" 
              description="직관적이고 아름다운 UI/UX를 바탕으로 사용자 경험을 향상시키는 웹 디자인"
              image="/images/thumbnails/main/web-design-feature.jpg"
              link="/web-design"
              handleImageError={() => handleImageError('web-design')}
              imageError={imageErrors['web-design']}
            />
            <FeaturedWork 
              title="3D 작업물" 
              description="창의적인 아이디어를 현실감 있는 3D 모델과 애니메이션으로 표현"
              image="/images/thumbnails/main/3d-feature.jpg"
              link="/3d-works"
              handleImageError={() => handleImageError('3d-works')}
              imageError={imageErrors['3d-works']}
            />
          </div>
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">기술 스택</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white py-1 px-4 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-full h-36 relative">
                <Image 
                  src="/images/skills/photoshop.png" 
                  alt="Photoshop" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-white py-1 px-4 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-full h-36 relative">
                <Image 
                  src="/images/skills/cad.png" 
                  alt="CAD" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-white py-1 px-4 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-full h-36 relative">
                <Image 
                  src="/images/skills/excel.png" 
                  alt="Excel" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-white py-1 px-4 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-full h-36 relative">
                <Image 
                  src="/images/skills/powerpoint.png" 
                  alt="PowerPoint" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-white py-1 px-4 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-full h-36 relative">
                <Image 
                  src="/images/skills/gongbuilder.png" 
                  alt="GongBuilder" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 경력 하이라이트 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">경력 하이라이트</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row p-6 bg-neutral-50 rounded-lg shadow-sm">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <p className="font-medium text-gray-700">2020.06 - 2024.01</p>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">(주)플럭시티</h3>
                <p className="text-gray-600">DX콘텐츠그룹 콘텐츠팀 대리</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row p-6 bg-neutral-50 rounded-lg shadow-sm">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <p className="font-medium text-gray-700">2013.02</p>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">서일대학교</h3>
                <p className="text-gray-600">생활가구디자인과</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/about" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              더 자세한 경력 보기 <span className="ml-2"><FiArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// 주요 작업 카드 컴포넌트
interface FeaturedWorkProps {
  title: string;
  description: string;
  image: string;
  link: string;
  handleImageError: () => void;
  imageError: boolean;
}

function FeaturedWork({ title, description, image, link, handleImageError, imageError }: FeaturedWorkProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
      <div className="h-[400px] relative">
        {imageError ? (
          <ImageSkeleton />
        ) : (
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={handleImageError}
          />
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-neutral-200 mb-4">{description}</p>
        <Link href={link} className="inline-flex items-center text-white font-medium">
          더 보기 <span className="ml-1 group-hover:ml-2 transition-all">→</span>
        </Link>
      </div>
    </div>
  );
}
