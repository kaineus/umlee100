'use client';

import Image from 'next/image';
import Link from 'next/link';

// 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: '하리보',
    category: '웹사이트',
    description: '하리보 골드베렌의 상징적인 색감과 인공물을 사용하지 않은 특성을 고려해 디자인한 하리보 판매 상세페이지 작업입니다.',
    imageUrl: '/images/web-design-features/thumbnails/하리보 젤리.jpg',
    link: '/web-design/1',
    tags: ['웹 디자인', '컨텐츠 디자인', '상세페이지']
  },
  {
    id: 2,
    title: '코코넛오일',
    category: '모바일 앱',
    description: '엑스트라버진 코코넛 오일의 첨가물이 들어있지않은 깨끗한 이미지를 위한 초록색 색감을 사용해 디자인한 판매 상세페이지 작업입니다',
    imageUrl: '/images/web-design-features/thumbnails/코코넛오일.jpg',
    link: '/web-design/2',
    tags: ['웹 디자인', '컨텐츠 디자인', '상세페이지']
  },
  {
    id: 3,
    title: '르네 휘테르',
    category: '웹사이트',
    description: '식물 추출물을 기반으로 만든 이미지에 맞는 청량한 녹색 색감을 바탕으로 제작한 르네휘테르 샴푸 판매 상품페이지 제작 작업입니다.​',
    imageUrl: '/images/web-design-features/thumbnails/르네휘테르 샴푸.jpg',
    link: '/web-design/3',
    tags: ['웹 디자인', '컨텐츠 디자인', '상세페이지']
  },
  {
    id: 4,
    title: '팝업 ADs',
    category: '브랜딩',
    description: '온라인 쇼핑몰에서 강조하는 이벤트 배너 팝업 및 제품의 홍보를 위한 팝업 광고 이미지 작업입니다. ​',
    imageUrl: '/images/web-design-features/thumbnails/팝업광고.jpg',
    link: '/web-design/4',
    tags: ['웹 디자인', '컨텐츠 디자인', '팝업 AD']
  },
];

export default function WebDesign() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">웹 / 컨텐츠 디자인</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          온라인 쇼핑몰에서의 팝업 광고 및 제품 상세페이지를 디자인한 웹 / 컨텐츠 디자인 작업물 입니다. 각 프로젝트는 쇼핑몰에서의 강조하고 싶은 판매 포인트와 제품의 특성을 균형있게 반영하여 최적의 결과물을 제작했습니다.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
    link: string;
    tags: string[];
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
      <Link href={`/web-design/${project.id}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">
          <Link href={`/web-design/${project.id}`} className="hover:text-blue-600 transition-colors">
            {project.title}
          </Link>
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <Link 
          href={`/web-design/${project.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
        >
          더 보기 <span className="ml-1 group-hover:ml-2 transition-all">→</span>
        </Link>
      </div>
    </div>
  );
}
