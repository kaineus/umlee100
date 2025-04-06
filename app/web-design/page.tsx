'use client';

import Image from 'next/image';
import Link from 'next/link';

// 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: '브랜드 웹사이트 리디자인',
    category: '웹사이트',
    client: '패션 브랜드 A',
    year: '2023',
    description: '미니멀하고 모던한 감성의 패션 브랜드 웹사이트 리디자인 프로젝트입니다. 사용자 경험과 브랜드 아이덴티티를 강화하는 방향으로 진행했습니다.',
    imageUrl: '/images/web-design-features/thumbnails/르네휘테르 샴푸.jpg',
    link: '/web-design/1'
  },
  {
    id: 2,
    title: '모바일 앱 UI 디자인',
    category: '모바일 앱',
    client: '핀테크 스타트업',
    year: '2023',
    description: '직관적이고 사용하기 쉬운 핀테크 앱 UI를 디자인했습니다. 복잡한 금융 정보를 쉽게 이해할 수 있도록 시각화하는 데 중점을 두었습니다.',
    imageUrl: '/images/web-design-features/thumbnails/코코넛오일.jpg',
    link: '/web-design/2'
  },
  {
    id: 3,
    title: '이커머스 웹사이트',
    category: '웹사이트',
    client: '라이프스타일 브랜드',
    year: '2022',
    description: '사용자 중심의 쇼핑 경험을 제공하는 이커머스 웹사이트입니다. 제품을 돋보이게 하는 디자인과 원활한 구매 경험을 제공하는 UI/UX를 구현했습니다.',
    imageUrl: '/images/web-design-features/thumbnails/하리보 젤리.jpg',
    link: '/web-design/3'
  },
  {
    id: 4,
    title: '브랜드 아이덴티티 및 웹디자인',
    category: '브랜딩',
    client: '카페 체인',
    year: '2022',
    description: '카페 브랜드의 아이덴티티와 웹사이트를 동시에 디자인한 프로젝트입니다. 따뜻하고 편안한 브랜드 이미지를 디지털 경험으로 전달하는 데 초점을 맞추었습니다.',
    imageUrl: '/images/web-design-features/thumbnails/팝업광고.jpg',
    link: '/web-design/4'
  },
];

export default function WebDesign() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">웹 디자인 프로젝트</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          사용자 중심의 디자인 철학을 바탕으로 한 웹사이트와 모바일 앱 디자인 프로젝트입니다.
          각 프로젝트는 클라이언트의 요구사항과 사용자의 니즈를 균형 있게 반영하여 최적의 결과물을 도출했습니다.
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
    client: string;
    year: string;
    description: string;
    imageUrl: string;
    link: string;
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{project.client} · {project.year}</p>
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
