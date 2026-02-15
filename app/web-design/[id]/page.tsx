'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiArrowLeft, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

// 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: '하리보 젤리',
    categories: ['웹사이트', '온라인 쇼핑몰', '상세 페이지'],
    client: '패션 브랜드',
    year: '2024',
    tags: ['웹 디자인', '컨텐츠 디자인', '온라인 쇼핑몰', '상세페이지'],
    description: '이 프로젝트는 하리보 골드베렌 판매를 위한 상품페이지 제작 작업입니다.',
    imageUrl: '/images/web-design-features/thumbnails/하리보 젤리.jpg',
    images: [
      '/images/web-design-features/features/1/image1.jpg',
      '/images/web-design-features/features/1/image2.jpg',
    ],
    imageLayout: 'vertical',
    technologies: ['PhotoShop'],
    fullDescription: `이 프로젝트는 하리보 골드베렌 판매를 위한 상품페이지 제작 작업입니다. 하리보의 상징적인 색감을 사용해 상품페이지에서 통일성을 주도록 제작하였습니다. 또한 인공 합성물을 사용하지 않고 과일로 맛을 낸 특징을 사용하여 과일 이미지를 같이 배치함으로써 젤리의 색감과 맛을 시각적으로 표현하였습니다.​`,
  },
  {
    id: 2,
    title: '코코넛 오일',
    categories: ['웹사이트', '온라인 쇼핑몰', '상세 페이지'],
    client: '여행 스타트업',
    year: '2023',
    tags: ['웹 디자인', '컨텐츠 디자인', '온라인 쇼핑몰', '상세페이지'],
    description: '현지 경험을 중심으로 한 여행 예약 플랫폼의 UI/UX 디자인 및 개발 프로젝트입니다.',
    imageUrl: '/images/web-design-features/thumbnails/코코넛오일.jpg',
    images: [
      '/images/web-design-features/features/2/image1.jpg'
    ],
    imageLayout: 'vertical',
    technologies: ['PhotoShop'],
    fullDescription: `이 프로젝트는 코코넛 오일 판매를 위한 상품페이지 제작 작업입니다. 첨가물이 들어있지 않은 100% 코코넛 오일을 표현하기 위해 자연물과 싱그러운 초록색 색감을 사용해 디자인 하였습니다. 익숙하지 않은 코코넛오일을 설명하기 위해 코코넛오일에 대한 설명과 다양한 활용방법을 추가하고, 다양한 용량의 옵션 설명을 통해 원하는 제품을 한눈에 파악하기 쉽도록 가독성에 중점을 두고 작업하였습니다.​`,
  },
  {
    id: 3,
    title: '르네휘테르 샴푸',
    categories: ['웹사이트', '온라인 쇼핑몰', '상세 페이지'],
    client: '푸드테크 기업',
    year: '2023',
    tags: ['웹 디자인', '컨텐츠 디자인', '온라인 쇼핑몰', '상세페이지'],
    description: '직관적인 사용자 경험을 제공하는 음식 배달 모바일 앱 디자인 프로젝트입니다.',
    imageUrl: '/images/web-design-features/thumbnails/르네휘테르 샴푸.jpg',
    images: [
      '/images/web-design-features/features/3/image1.jpg'
    ],
    imageLayout: 'vertical',
    technologies: ['PhotoShop'],
    fullDescription: `이 프로젝트는 르네휘테르 샴푸 판매를 위한 상품페이지 제작 작업입니다. 식물 추출물을 기반으로 만든 이미지에 맞는 청량한 녹색 색감을 바탕으로 제작하였습니다.​

르네휘테르 브랜드의 기업모토인 '아름다운 모발은 건강한 두피에서' 를 강조 설명하여 전반에 배치하여 디자인했습니다. 또한 샴푸에 들어간 첨가물의 사진을 추가하여 직관적으로 표현하였고, 제품 종류와 각 제품에 대한 설명을 추가하여 본인에게 맞는 샴푸를 선택 할 수 있도록 제작 하였습니다.​`,
  },
  {
    id: 4,
    title: '팝업 ADs',
    categories: ['웹사이트', '온라인 쇼핑몰', '팝업 AD'],
    client: '컨설팅 회사',
    year: '2022',
    tags: ['웹 디자인', '컨텐츠 디자인', '온라인 쇼핑몰', '팝업 AD'],
    description: '전문 컨설팅 기업의 브랜드 아이덴티티 개발 및 웹사이트 디자인 프로젝트입니다.',
    imageUrl: '/images/web-design-features/thumbnails/팝업광고.jpg',
    images: [
      '/images/web-design-features/features/4/image1.jpg',
      '/images/web-design-features/features/4/image2.jpg',
      '/images/web-design-features/features/4/image3.jpg',
      '/images/web-design-features/features/4/image4.jpg',
      '/images/web-design-features/features/4/image5.jpg',
      '/images/web-design-features/features/4/image6.jpg',
      '/images/web-design-features/features/4/image7.jpg',
      '/images/web-design-features/features/4/image8.jpg',
      '/images/web-design-features/features/4/image9.jpg',
      '/images/web-design-features/features/4/image10.jpg',
      '/images/web-design-features/features/4/image11.jpg',
      '/images/web-design-features/features/4/image12.jpg',
      '/images/web-design-features/features/4/image13.jpg',
      '/images/web-design-features/features/4/image14.jpg',
      '/images/web-design-features/features/4/image15.jpg',
      '/images/web-design-features/features/4/image16.jpg',
      '/images/web-design-features/features/4/image17.jpg',
      '/images/web-design-features/features/4/image18.jpg',
      '/images/web-design-features/features/4/image19.jpg',
      '/images/web-design-features/features/4/image20.jpg',
      '/images/web-design-features/features/4/image21.jpg',
    ],
    imageLayout: 'horizontal',
    technologies: ['PhotoShop'],
    fullDescription: `이 프로젝트들은 온라인 쇼핑몰에서 강조하는 이벤트 배너 팝업 및 제품의 홍보를 위한 팝업 광고 이미지 작업물들 입니다. 기간제 이벤트부터 공지사항 및 신제품 홍보를 위한 광고 이미지까지 다양한 팝업 광고 이미지 제작 작업물 입니다. 포토샵을 메인으로 사용해 제작하였으며, 각각 내용과 상품에 맞는 색감과 이미지를 이용하여 강조하고싶은 내용을 한 눈에 볼 수 있도록 디자인 하였으며, 이미지 한 컷으로 내용을 전달하기 위해 가독성에 중점을 두고 디자인 제작 하였습니다.​`,
  }
];


export default function WebProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const projectId = parseInt(id as string);
    const foundProject = projects.find(p => p.id === projectId);
    setProject(foundProject);
    setCurrentSlide(0);
    setImageError(false);
  }, [id]);

  const nextSlide = () => {
    if (project && project.images) {
      setCurrentSlide((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (project && project.images) {
      setCurrentSlide((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#000' }}>
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4 text-white">로딩 중...</h1>
          <Link href="/web-design" className="flex items-center justify-center transition-colors duration-300" style={{ color: '#fb3000' }}>
            <FiArrowLeft className="mr-2" /> 웹 디자인 작업 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const isVerticalLayout = imageError ? false : project.imageLayout === 'vertical';

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000' }}>
      <div className="section-container py-16">
        <div className="mb-6">
          <Link
            href="/web-design"
            className="inline-flex items-center transition-colors duration-300"
            style={{ color: '#999' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#999')}
          >
            <FiArrowLeft className="mr-2" /> 웹 디자인 작업 목록으로 돌아가기
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-2 text-white">{project.title}</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags && project.tags.map((tag: string, index: number) => (
            <span key={index} className="tag-dark">{tag}</span>
          ))}
        </div>

        {/* 세로형 레이아웃 */}
        {isVerticalLayout && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7">
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#111' }}>
                <div className="relative h-[1200px] md:h-[1600px] lg:h-[2000px] xl:h-[2400px] w-full">
                  {project.images && project.images.length > 0 ? (
                    <>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.images[currentSlide]}
                          alt={`${project.title} - 이미지 ${currentSlide + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 800px"
                          className="object-contain"
                          priority
                          onError={handleImageError}
                        />
                      </div>
                      <NavButton direction="prev" onClick={prevSlide} />
                      <NavButton direction="next" onClick={nextSlide} />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Image src={project.imageUrl} alt={project.title} fill className="object-contain" priority />
                    </div>
                  )}
                </div>
              </div>
              <ThumbnailGallery images={project.images} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-8">
                <ProjectInfoCard project={project} />
                <ProjectDescription project={project} />
              </div>
            </div>
          </div>
        )}

        {/* 가로형 레이아웃 */}
        {!isVerticalLayout && (
          <>
            <div className="mb-12">
              <div className="overflow-hidden">
                <div className="relative h-[500px] md:h-[600px] w-full" style={{ backgroundColor: '#111' }}>
                  {project.images && project.images.length > 0 ? (
                    <>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.images[currentSlide]}
                          alt={`${project.title} - 이미지 ${currentSlide + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 1200px"
                          className="object-contain"
                          priority
                          onError={handleImageError}
                        />
                      </div>
                      <NavButton direction="prev" onClick={prevSlide} />
                      <NavButton direction="next" onClick={nextSlide} />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Image src={project.imageUrl} alt={project.title} fill className="object-contain" priority />
                    </div>
                  )}
                </div>
              </div>
              <ThumbnailGallery images={project.images} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <ProjectDescription project={project} />
              </div>
              <div>
                <ProjectInfoCard project={project} />
              </div>
            </div>
          </>
        )}

        {/* 다른 작업물 섹션 */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-white">다른 웹 디자인 작업물</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map(p => (
                <Link href={`/web-design/${p.id}`} key={p.id} className="group project-card">
                  <div className="relative h-48 project-card__image">
                    <Image
                      src={p.imageUrl}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                    <div className="project-card__overlay" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg text-white transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function NavButton({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) {
  const isLeft = direction === 'prev';
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-md z-10 transition-colors duration-300"
      style={{
        [isLeft ? 'left' : 'right']: '1rem',
        backgroundColor: 'rgba(26,26,26,0.8)',
        color: '#fff',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(26,26,26,1)')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(26,26,26,0.8)')}
      aria-label={isLeft ? '이전 이미지' : '다음 이미지'}
    >
      {isLeft ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
    </button>
  );
}

function ThumbnailGallery({ images, currentSlide, setCurrentSlide }: { images: string[]; currentSlide: number; setCurrentSlide: (i: number) => void }) {
  if (!images || images.length <= 1) return null;
  return (
    <div className="mt-4 flex space-x-2 overflow-x-auto py-2">
      {images.map((img: string, idx: number) => (
        <button
          key={idx}
          onClick={() => setCurrentSlide(idx)}
          className="flex-shrink-0 relative w-20 h-20 rounded-md overflow-hidden transition-all"
          style={{
            outline: currentSlide === idx ? '0.125rem solid #fb3000' : '0.0625rem solid #333',
            opacity: currentSlide === idx ? 1 : 0.7,
            transform: currentSlide === idx ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <Image src={img} alt={`썸네일 ${idx + 1}`} fill sizes="80px" className="object-cover" />
        </button>
      ))}
    </div>
  );
}

function ProjectInfoCard({ project }: { project: any }) {
  return (
    <>
      <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#1a1a1a' }}>
        <h2 className="text-xl font-semibold mb-4 text-white">프로젝트 정보</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm" style={{ color: '#666' }}>사용 기술</p>
            {project.technologies.map((technology: string, index: number) => (
              <div key={index} className="w-12 h-12 relative">
                <Image
                  src={`/images/skill-icons/${technology}.png`}
                  alt={technology}
                  title={technology}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm" style={{ color: '#666' }}>카테고리</p>
            {project.categories.map((category: string, index: number) => (
              <span key={index} className="font-medium text-white">
                {category}
                {index < project.categories.length - 1 && ' / '}
              </span>
            ))}
          </div>
        </div>
      </div>

      {project.link && (
        <a
          href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mb-6"
        >
          웹사이트 방문하기 <FiExternalLink className="ml-2" />
        </a>
      )}
    </>
  );
}

function ProjectDescription({ project }: { project: any }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-white">프로젝트 설명</h2>
      <div className="prose-dark">
        {project.fullDescription.split('\n\n').map((paragraph: string, idx: number) => (
          <p key={idx} className="mb-4" style={{ color: '#999' }}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
