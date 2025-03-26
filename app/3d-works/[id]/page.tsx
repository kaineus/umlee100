'use client';

import { useEffect, useState } from 'react';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';
import Model3DDetailed from '../../components/Model3DDetailed';

// 프로젝트 데이터 (app/3d-works/page.tsx와 동일한 데이터 사용)
const projects = [
  {
    id: 1,
    title: '델피노 캐릭터',
    category: 'character',
    client: '개인 프로젝트',
    year: '2024',
    tags: ['캐릭터 디자인', '3D 모델링', '블렌더'],
    description: '블렌더를 사용하여 제작한 캐릭터 모델링. 친근하고 생동감 있는 캐릭터로 다양한 포즈와 표정을 취할 수 있도록 리깅되었습니다. 게임, 애니메이션, 마케팅 등 다양한 분야에서 활용 가능합니다.',
    imageUrl: '/models/delphino.glb',
    link: '#',
    fullDescription: `이 3D 캐릭터는 블렌더를 사용하여 처음부터 끝까지 직접 제작하였습니다. 
    
    모델링부터 UV 매핑, 텍스처링, 리깅, 그리고 포징까지 전체 제작 과정을 담당했습니다. 귀여운 외모와 함께 실용적인 토폴로지를 갖추고 있어 게임이나 애니메이션에서 효율적으로 사용할 수 있습니다.
    
    특징:
    - 최적화된 폴리곤 수로 실시간 렌더링에 적합
    - 완전한 리깅 시스템으로 자연스러운 애니메이션 가능
    - PBR 워크플로우를 통한 고품질 텍스처
    - 캐릭터 디자인부터 최종 결과물까지 모두 독자적으로 제작`,
  },
  {
    id: 2,
    title: '모던 인테리어 디자인',
    category: 'architecture',
    client: '인테리어 스튜디오',
    year: '2023',
    tags: ['인테리어', '건축 시각화', 'Blender'],
    description: '현대적인 미니멀 스타일의 인테리어 디자인 시각화 프로젝트입니다.',
    imageUrl: '/images/3d-work-2.jpg',
    link: '/3d-works/2',
    fullDescription: '이 프로젝트는 현대적인 미니멀 스타일의 인테리어를 3D로 시각화한 작업입니다. 자연광과 인공조명의 조화, 다양한 텍스처의 활용, 그리고 실용적이면서도 세련된 공간 구성을 중점으로 작업했습니다. 클라이언트의 비전을 3D로 구현하여 실제 시공 전에 완성된 공간을 미리 체험할 수 있도록 했습니다.',
  },
  {
    id: 3,
    title: '미래형 전자제품 콘셉트',
    category: 'product',
    client: '가전 브랜드',
    year: '2023',
    tags: ['제품 디자인', '컨셉 아트', '3D 렌더링'],
    description: '미래지향적인 스마트 홈 기기의 콘셉트 디자인과 3D 시각화 작업입니다.',
    imageUrl: '/images/3d-work-3.jpg',
    link: '/3d-works/3',
    fullDescription: '이 프로젝트는 가전 브랜드의 미래형 스마트 홈 기기 콘셉트를 3D로 구현한 작업입니다. 형태, 기능, 사용자 경험을 종합적으로 고려하여 혁신적이면서도 실현 가능한 디자인을 제시했습니다. 다양한 재질과 조명 효과를 통해 제품의 특성을 강조하고 마케팅 자료로 활용할 수 있는 퀄리티의 렌더링을 제공했습니다.',
  },
  {
    id: 4,
    title: '게임 환경 아트',
    category: 'animation',
    client: '게임 스튜디오',
    year: '2022',
    tags: ['게임 아트', '환경 디자인', 'Unity'],
    description: 'RPG 게임을 위한 판타지 세계의 환경 아트와 에셋 제작 프로젝트입니다.',
    imageUrl: '/images/3d-work-4.jpg',
    link: '/3d-works/4',
    fullDescription: '이 프로젝트는 판타지 RPG 게임을 위한 환경 아트 및 에셋 제작 작업입니다. 신비로운 세계관에 맞는 건축물, 자연 요소, 소품 등을 디자인하고 모델링했습니다. 게임 엔진 내에서의 최적화를 고려하여 효율적인 모델과 텍스처를 제작했으며, 몰입감 있는 게임 경험을 위한 디테일을 놓치지 않았습니다.',
  }
];

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
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
          <Link href="/3d-works" className="text-blue-500 hover:underline flex items-center justify-center">
            <FiArrowLeft className="mr-2" /> 3D 작업 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/3d-works" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <FiArrowLeft className="mr-2" /> 3D 작업 목록으로 돌아가기
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
            {project.category === 'character' ? (
              <div className="bg-gray-100 rounded-lg overflow-hidden h-[500px]">
                <Model3DDetailed url={project.imageUrl} />
              </div>
            ) : (
              <div className="bg-gray-100 rounded-lg overflow-hidden h-[500px] flex items-center justify-center">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-contain"
                />
              </div>
            )}
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
            
            {project.link !== '#' && (
              <div>
                <a 
                  href={project.link.startsWith('http') ? project.link : `https://${project.link}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  프로젝트 보기 <FiExternalLink className="ml-1" />
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
        
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-semibold mb-6">다른 3D 작업물</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map(p => (
                <Link href={`/3d-works/${p.id}`} key={p.id} className="group">
                  <div className="relative h-48 mb-3 overflow-hidden rounded-lg bg-gray-100">
                    <img 
                      src={p.imageUrl.includes('.glb') ? '/images/3d-placeholder.jpg' : p.imageUrl}
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