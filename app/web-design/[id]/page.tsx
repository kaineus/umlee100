'use client';

import { useEffect, useState } from 'react';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

// 프로젝트 데이터 (app/web-design/page.tsx와 같은 형식)
const projects = [
  {
    id: 1,
    title: '패션 브랜드 웹사이트',
    category: '웹사이트',
    client: '패션 브랜드',
    year: '2024',
    tags: ['웹 디자인', '반응형', 'E-커머스'],
    description: '미니멀한 디자인의 패션 브랜드 온라인 쇼핑몰 웹사이트입니다.',
    imageUrl: '/images/web-design-1.jpg',
    link: 'https://example.com/fashion',
    fullDescription: `이 프로젝트는 고급 패션 브랜드의 온라인 쇼핑몰 웹사이트입니다. 브랜드의 미니멀하고 세련된 이미지를 온라인에서도 일관되게 표현하는 데 중점을 두었습니다.
    
    사용자 경험을 최우선으로 생각하여 직관적인 탐색 구조와 깔끔한 제품 전시를 제공합니다. 모바일 퍼스트 접근 방식으로 설계되어 모든 디바이스에서 최적의 경험을 제공합니다.
    
    기술적으로는 Next.js와 Tailwind CSS를 활용하여 빠른 로딩 속도와 부드러운 페이지 전환 효과를 구현했습니다. 또한 Shopify와의 연동을 통해 안정적인 E-커머스 기능을 제공합니다.`,
    projectImages: [
      '/images/web-design-1-detail-1.jpg',
      '/images/web-design-1-detail-2.jpg',
      '/images/web-design-1-detail-3.jpg',
    ]
  },
  {
    id: 2,
    title: '여행 예약 플랫폼',
    category: '웹 애플리케이션',
    client: '여행 스타트업',
    year: '2023',
    tags: ['UI/UX 디자인', '웹 개발', '반응형'],
    description: '현지 경험을 중심으로 한 여행 예약 플랫폼의 UI/UX 디자인 및 개발 프로젝트입니다.',
    imageUrl: '/images/web-design-2.jpg',
    link: 'https://example.com/travel',
    fullDescription: `이 프로젝트는 현지 경험을 중심으로 한 여행 예약 플랫폼의 디자인 및 개발 작업입니다. 사용자들이 쉽게 여행 목적지를 탐색하고 현지 경험을 예약할 수 있는 직관적인 인터페이스를 디자인했습니다.
    
    핵심 기능으로는 위치 기반 추천, 실시간 예약 시스템, 현지 가이드와의 연결, 개인화된 여행 계획 등이 있습니다. 복잡한 기능들을 단순하고 명확한 UI로 구현하여 사용자 만족도를 높였습니다.
    
    기술적으로는 React, Node.js, MongoDB를 활용한 풀스택 개발을 진행했으며, 지도 API 연동과 결제 시스템 통합에 중점을 두었습니다.`,
    projectImages: [
      '/images/web-design-2-detail-1.jpg',
      '/images/web-design-2-detail-2.jpg',
      '/images/web-design-2-detail-3.jpg',
    ]
  },
  {
    id: 3,
    title: '음식 배달 모바일 앱',
    category: '모바일 앱',
    client: '푸드테크 기업',
    year: '2023',
    tags: ['모바일 디자인', 'UI/UX', '앱 프로토타입'],
    description: '직관적인 사용자 경험을 제공하는 음식 배달 모바일 앱 디자인 프로젝트입니다.',
    imageUrl: '/images/web-design-3.jpg',
    link: 'https://example.com/food-app',
    fullDescription: `이 프로젝트는 사용자 경험을 최우선으로 한 음식 배달 모바일 앱 디자인입니다. 사용자가 쉽고 빠르게 음식을 주문할 수 있도록 직관적인 UI와 매끄러운 주문 프로세스를 디자인했습니다.
    
    다양한 사용자 조사와 테스트를 통해 실제 사용자의 니즈를 반영한 디자인을 완성했으며, 특히 음식 검색, 맞춤 추천, 주문 추적 기능에 중점을 두었습니다.
    
    Figma를 사용하여 디자인 시스템을 구축하고 프로토타입을 제작했으며, 개발 팀과의 협업을 통해 디자인이 정확히 구현되도록 지원했습니다.`,
    projectImages: [
      '/images/web-design-3-detail-1.jpg',
      '/images/web-design-3-detail-2.jpg',
      '/images/web-design-3-detail-3.jpg',
    ]
  },
  {
    id: 4,
    title: '기업 브랜딩 및 웹사이트',
    category: '브랜딩',
    client: '컨설팅 회사',
    year: '2022',
    tags: ['브랜드 아이덴티티', '웹 디자인', '콘텐츠 전략'],
    description: '전문 컨설팅 기업의 브랜드 아이덴티티 개발 및 웹사이트 디자인 프로젝트입니다.',
    imageUrl: '/images/web-design-4.jpg',
    link: 'https://example.com/consulting',
    fullDescription: `이 프로젝트는 전문 컨설팅 기업의 브랜드 아이덴티티 개발부터 웹사이트 구현까지의 종합적인 작업입니다. 클라이언트의 비전과 가치를 시각적으로 전달하는 브랜드 아이덴티티를 개발하고, 이를 웹사이트에 일관되게 적용했습니다.
    
    로고, 색상 팔레트, 타이포그래피 등의 브랜드 요소를 개발하고, 이를 기반으로 기업의 전문성과 신뢰성을 전달하는 웹사이트를 디자인했습니다. 특히 콘텐츠 전략에 중점을 두어 기업의 서비스와 가치를 효과적으로 전달할 수 있도록 했습니다.
    
    반응형 디자인을 적용하여 모든 디바이스에서 최적의 경험을 제공하고, WordPress를 활용하여 클라이언트가 쉽게 콘텐츠를 관리할 수 있는 시스템을 구축했습니다.`,
    projectImages: [
      '/images/web-design-4-detail-1.jpg',
      '/images/web-design-4-detail-2.jpg',
      '/images/web-design-4-detail-3.jpg',
    ]
  }
];

interface PageProps {
  params: {
    id: string;
  };
}

export default function WebProjectDetailPage({ params }: PageProps) {
  const [project, setProject] = useState<any>(null);
  
  useEffect(() => {
    const projectId = parseInt(params.id);
    const foundProject = projects.find(p => p.id === projectId);
    setProject(foundProject);
  }, [params.id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">로딩 중...</h1>
          <Link href="/web-design" className="text-blue-500 hover:underline flex items-center justify-center">
            <FiArrowLeft className="mr-2" /> 웹 디자인 작업 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/web-design" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <FiArrowLeft className="mr-2" /> 웹 디자인 작업 목록으로 돌아가기
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string, index: number) => (
            <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-[500px] flex items-center justify-center">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">프로젝트 정보</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-sm">클라이언트</p>
                  <p className="font-medium">{project.client}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">연도</p>
                  <p className="font-medium">{project.year}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">카테고리</p>
                  <p className="font-medium">{project.category}</p>
                </div>
              </div>
            </div>
            
            {project.link && (
              <div>
                <a 
                  href={project.link.startsWith('http') ? project.link : `https://${project.link}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  웹사이트 방문하기 <FiExternalLink className="ml-1" />
                </a>
              </div>
            )}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">프로젝트 설명</h2>
          <div className="prose max-w-none">
            {project.fullDescription.split('\n\n').map((paragraph: string, idx: number) => (
              <p key={idx} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {project.projectImages && project.projectImages.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">프로젝트 이미지</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.projectImages.map((img: string, idx: number) => (
                <div key={idx} className="bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={img} 
                    alt={`${project.title} - 상세 이미지 ${idx + 1}`} 
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-semibold mb-6">다른 웹 디자인 작업물</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map(p => (
                <Link href={`/web-design/${p.id}`} key={p.id} className="group">
                  <div className="relative h-48 mb-3 overflow-hidden rounded-lg bg-gray-100">
                    <img 
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium text-lg group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600">{p.category}</p>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
} 