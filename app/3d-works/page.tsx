import Image from 'next/image';
import Link from 'next/link';

// 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: '제품 3D 렌더링',
    category: '제품 디자인',
    client: '전자제품 브랜드',
    year: '2023',
    description: '신제품 출시 전 마케팅 자료로 활용할 수 있는 고품질 3D 렌더링 작업입니다. 제품의 디테일과 질감을 사실적으로 표현하는 데 중점을 두었습니다.',
    imageUrl: '/images/3d-work-1.jpg',
    link: '/3d-works/1'
  },
  {
    id: 2,
    title: '건축 시각화',
    category: '건축',
    client: '인테리어 디자인 회사',
    year: '2023',
    description: '신축 주택의 인테리어 디자인을 3D로 시각화한 프로젝트입니다. 공간감과 조명 효과를 통해 실제 완공 후의 모습을 사전에 경험할 수 있도록 구현했습니다.',
    imageUrl: '/images/3d-work-2.jpg',
    link: '/3d-works/2'
  },
  {
    id: 3,
    title: '캐릭터 모델링',
    category: '캐릭터 디자인',
    client: '게임 개발사',
    year: '2022',
    description: '모바일 게임에 등장하는 캐릭터의 3D 모델링 작업입니다. 귀엽고 친근한 이미지와 게임 내 움직임을 고려한 디자인으로 제작했습니다.',
    imageUrl: '/images/3d-work-3.jpg',
    link: '/3d-works/3'
  },
  {
    id: 4,
    title: '제품 애니메이션',
    category: '애니메이션',
    client: '가전제품 브랜드',
    year: '2022',
    description: '신제품의 주요 기능을 설명하는 3D 애니메이션 작업입니다. 복잡한 메커니즘을 시각적으로 이해하기 쉽게 표현했습니다.',
    imageUrl: '/images/3d-work-4.jpg',
    link: '/3d-works/4'
  },
];

export default function ThreeDWorks() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">3D 작업물</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          사실적인 표현과 창의적인 접근으로 만든 다양한 3D 프로젝트입니다.
          제품 렌더링부터 건축 시각화, 캐릭터 모델링까지 다양한 분야의 작업물을 선보입니다.
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
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{project.category} | {project.client} | {project.year}</p>
          </div>
          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        
        <Link href={project.link} className="inline-flex items-center text-purple-600 font-medium">
          더 보기 <span className="ml-1 group-hover:ml-2 transition-all">→</span>
        </Link>
      </div>
    </div>
  );
}
