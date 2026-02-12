export type WorkCategory = '컨텐츠디자인' | '3D 작업' | '제품디자인' | '소셜미디어 디자인';

export interface WorkItem {
  id: string;
  title: string;
  category: WorkCategory;
  tags: string[];
  description: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
}

export const worksData: WorkItem[] = [
  // ── 컨텐츠디자인 ──
  {
    id: 'contents-1',
    title: '맥세이프 케이스',
    category: '컨텐츠디자인',
    tags: ['웹 디자인', '온라인 쇼핑몰', '상세페이지'],
    description: '아트굿즈는 아티스트 작품 IP를 활용하여 오픈갤러리에서 기획하는 예술 상품입니다.',
    thumbnail: '/images/works/contents/1.png',
    images: [
      '/images/works/contents/1.png',
    ],
    technologies: ['PhotoShop'],
  },
  {
    id: 'contents-2',
    title: '맥세이프 케이스',
    category: '컨텐츠디자인',
    tags: ['웹 디자인', '온라인 쇼핑몰', '상세페이지'],
    description: '아트굿즈는 아티스트 작품 IP를 활용하여 오픈갤러리에서 기획하는 예술 상품입니다.',
    thumbnail: '/images/works/contents/2.png',
    images: [
      '/images/works/contents/2.png',
    ],
    technologies: ['PhotoShop'],
  },
  {
    id: 'contents-3',
    title: '맥세이프 케이스',
    category: '컨텐츠디자인',
    tags: ['웹 디자인', '온라인 쇼핑몰', '상세페이지'],
    description: '아트굿즈는 아티스트 작품 IP를 활용하여 오픈갤러리에서 기획하는 예술 상품입니다.',
    thumbnail: '/images/works/contents/3.png',
    images: [
      '/images/works/contents/3.png',
    ],
    technologies: ['PhotoShop'],
  },
  {
    id: 'contents-4',
    title: '맥세이프 케이스',
    category: '컨텐츠디자인',
    tags: ['웹 디자인', '온라인 쇼핑몰', '상세페이지'],
    description: '아트굿즈는 아티스트 작품 IP를 활용하여 오픈갤러리에서 기획하는 예술 상품입니다.',
    thumbnail: '/images/works/contents/1.png',
    images: [
      '/images/works/contents/1.png',
    ],
    technologies: ['PhotoShop'],
  },
  {
    id: 'contents-5',
    title: '맥세이프 케이스',
    category: '컨텐츠디자인',
    tags: ['웹 디자인', '온라인 쇼핑몰', '상세페이지'],
    description: '아트굿즈는 아티스트 작품 IP를 활용하여 오픈갤러리에서 기획하는 예술 상품입니다.',
    thumbnail: '/images/works/contents/2.png',
    images: [
      '/images/works/contents/2.png',
    ],
    technologies: ['PhotoShop'],
  },
  {
    id: 'contents-6',
    title: '맥세이프 케이스',
    category: '컨텐츠디자인',
    tags: ['웹 디자인', '온라인 쇼핑몰', '상세페이지'],
    description: '아트굿즈는 아티스트 작품 IP를 활용하여 오픈갤러리에서 기획하는 예술 상품입니다.',
    thumbnail: '/images/works/contents/3.png',
    images: [
      '/images/works/contents/3.png',
    ],
    technologies: ['PhotoShop'],
  },
  // {
  //   id: 'web-2',
  //   title: '코코넛 오일',
  //   category: '컨텐츠디자인',
  //   tags: ['웹 디자인', '온라인 쇼핑몰', '상세페이지'],
  //   description: '이 프로젝트는 코코넛 오일 판매를 위한 상품페이지 제작 작업입니다. 첨가물이 들어있지 않은 100% 코코넛 오일을 표현하기 위해 자연물과 싱그러운 초록색 색감을 사용해 디자인 하였습니다. 익숙하지 않은 코코넛오일을 설명하기 위해 코코넛오일에 대한 설명과 다양한 활용방법을 추가하고, 다양한 용량의 옵션 설명을 통해 원하는 제품을 한눈에 파악하기 쉽도록 가독성에 중점을 두고 작업하였습니다.',
  //   thumbnail: '/images/web-design-features/thumbnails/코코넛오일.jpg',
  //   images: [
  //     '/images/web-design-features/features/2/image1.jpg',
  //   ],
  //   technologies: ['PhotoShop'],
  // },
  // {
  //   id: 'web-3',
  //   title: '르네휘테르 샴푸',
  //   category: '컨텐츠디자인',
  //   tags: ['웹 디자인', '온라인 쇼핑몰', '상세페이지'],
  //   description: '이 프로젝트는 르네휘테르 샴푸 판매를 위한 상품페이지 제작 작업입니다. 식물 추출물을 기반으로 만든 이미지에 맞는 청량한 녹색 색감을 바탕으로 제작하였습니다. 르네휘테르 브랜드의 기업모토인 "아름다운 모발은 건강한 두피에서"를 강조 설명하여 전반에 배치하여 디자인했습니다.',
  //   thumbnail: '/images/web-design-features/thumbnails/르네휘테르 샴푸.jpg',
  //   images: [
  //     '/images/web-design-features/features/3/image1.jpg',
  //   ],
  //   technologies: ['PhotoShop'],
  // },
  // {
  //   id: 'web-4',
  //   title: '팝업 ADs',
  //   category: '컨텐츠디자인',
  //   tags: ['웹 디자인', '온라인 쇼핑몰', '팝업 AD'],
  //   description: '이 프로젝트들은 온라인 쇼핑몰에서 강조하는 이벤트 배너 팝업 및 제품의 홍보를 위한 팝업 광고 이미지 작업물들 입니다. 기간제 이벤트부터 공지사항 및 신제품 홍보를 위한 광고 이미지까지 다양한 팝업 광고 이미지 제작 작업물 입니다.',
  //   thumbnail: '/images/web-design-features/thumbnails/팝업광고.jpg',
  //   images: [
  //     '/images/web-design-features/features/4/image1.jpg',
  //     '/images/web-design-features/features/4/image2.jpg',
  //     '/images/web-design-features/features/4/image3.jpg',
  //     '/images/web-design-features/features/4/image4.jpg',
  //     '/images/web-design-features/features/4/image5.jpg',
  //     '/images/web-design-features/features/4/image6.jpg',
  //     '/images/web-design-features/features/4/image7.jpg',
  //     '/images/web-design-features/features/4/image8.jpg',
  //     '/images/web-design-features/features/4/image9.jpg',
  //     '/images/web-design-features/features/4/image10.jpg',
  //     '/images/web-design-features/features/4/image11.jpg',
  //     '/images/web-design-features/features/4/image12.jpg',
  //     '/images/web-design-features/features/4/image13.jpg',
  //     '/images/web-design-features/features/4/image14.jpg',
  //     '/images/web-design-features/features/4/image15.jpg',
  //     '/images/web-design-features/features/4/image16.jpg',
  //     '/images/web-design-features/features/4/image17.jpg',
  //     '/images/web-design-features/features/4/image18.jpg',
  //     '/images/web-design-features/features/4/image19.jpg',
  //     '/images/web-design-features/features/4/image20.jpg',
  //     '/images/web-design-features/features/4/image21.jpg',
  //   ],
  //   technologies: ['PhotoShop'],
  // },

  // ── 3D 작업 ──
  {
    id: '3d-1',
    title: '델피노 리조트 동쪽',
    category: '3D 작업',
    tags: ['리조트', '3D 모델링'],
    description: '이 프로젝트는 델피노 리조트의 동쪽 구역을 3D 모델링한 프로젝트입니다. 리조트의 특징적인 건물 모양과 구조를 현실감있게 구현하기 위해 노력했습니다. 실제 건축 도면과 현장 답사 자료를 비교 분석하여 구조적인 완성도를 높이고, 다양한 텍스쳐 제작을 통해 건물의 디테일을 높였습니다.',
    thumbnail: '/images/thumbnails/works/delphino_east.png',
    images: ['/images/thumbnails/works/delphino_east.png'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
  },
  {
    id: '3d-2',
    title: '델피노 리조트 서쪽',
    category: '3D 작업',
    tags: ['리조트', '3D 모델링'],
    description: '델피노 리조트의 서쪽 구역을 상세하게 3D 모델링한 프로젝트입니다. 실제 건축 도면과 현장 답사 자료를 비교 분석하여 구조적인 완성도를 높이고, 다양한 텍스쳐 제작을 통해 건물의 디테일을 높였습니다.',
    thumbnail: '/images/thumbnails/works/delphino_west.png',
    images: ['/images/thumbnails/works/delphino_west.png'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
  },
  {
    id: '3d-9',
    title: 'SKT 타워',
    category: '3D 작업',
    tags: ['빌딩', '3D 모델링'],
    description: 'SKT 타워의 웅장한 외관과 도시 랜드마크로서의 존재감을 3D로 모델링한 프로젝트입니다. 독특한 외관 디자인과 시각적 임팩트를 중심으로 모델링 작업을 진행했습니다.',
    thumbnail: '/images/thumbnails/works/skt_tower.png',
    images: ['/images/thumbnails/works/skt_tower.png'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
  },
  {
    id: '3d-10',
    title: '호반 H1',
    category: '3D 작업',
    tags: ['빌딩', '3D 모델링'],
    description: '호반 H1 건물의 현대적 디자인과 구조적 특징을 3D로 모델링한 프로젝트입니다. 현대 건축의 미학적 요소와 기능적 설계가 조화를 이루는 호반 빌딩의 특성을 모델링 작업에 반영했습니다.',
    thumbnail: '/images/thumbnails/works/hoban.png',
    images: ['/images/thumbnails/works/hoban.png'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
  },
  {
    id: '3d-11',
    title: '용산 구청',
    category: '3D 작업',
    tags: ['빌딩', '3D 모델링'],
    description: '용산구청의 독특한 형태와 구조적 특성을 정확하게 구현한 3D 모델링 프로젝트입니다.',
    thumbnail: '/images/thumbnails/works/yongsan.png',
    images: ['/images/thumbnails/works/yongsan.png'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
  },
  {
    id: '3d-3',
    title: '한양대역',
    category: '3D 작업',
    tags: ['지하철', '3D 모델링'],
    description: '지하철 2호선 한양대역을 상세하게 3D 모델링한 작업입니다. 지하철역의 특징적인 공간 구성과 이동경로 흐름을 고려한 모델링에 중점을 두었습니다.',
    thumbnail: '/images/thumbnails/works/hanyang.png',
    images: ['/images/thumbnails/works/hanyang.png'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
  },
  {
    id: '3d-4',
    title: '장지역',
    category: '3D 작업',
    tags: ['지하철', '3D 모델링'],
    description: '지하철 8호선 장지역을 상세하게 3D 모델링한 작업입니다.',
    thumbnail: '/images/thumbnails/works/jangji.png',
    images: ['/images/thumbnails/works/jangji.png'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
  },
  {
    id: '3d-5',
    title: '문정역',
    category: '3D 작업',
    tags: ['지하철', '3D 모델링'],
    description: '지하철 2호선 문정역을 상세하게 3D 모델링한 작업입니다.',
    thumbnail: '/images/thumbnails/works/munjeong.png',
    images: ['/images/thumbnails/works/munjeong.png'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
  },
  {
    id: '3d-6',
    title: '까치산역',
    category: '3D 작업',
    tags: ['지하철', '3D 모델링'],
    description: '지하철 2, 5호선 까치산역을 상세하게 3D 모델링한 작업입니다. 2호선과 5호선이 교차하는 환승역의 특성을 반영하여 복잡한 동선과 층간 연결구조를 정확하게 모델링 하는데 중점을 두었습니다.',
    thumbnail: '/images/thumbnails/works/kkachisan.png',
    images: ['/images/thumbnails/works/kkachisan.png'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
  },
  {
    id: '3d-7',
    title: '신답역',
    category: '3D 작업',
    tags: ['지하철', '3D 모델링'],
    description: '지하철 2호선 신답역을 상세하게 3D 모델링한 작업입니다.',
    thumbnail: '/images/thumbnails/works/sindap.png',
    images: ['/images/thumbnails/works/sindap.png'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
  },
  {
    id: '3d-8',
    title: '신설동역',
    category: '3D 작업',
    tags: ['지하철', '3D 모델링'],
    description: '지하철 2호선 신설동역을 3D 모델링한 작업입니다.',
    thumbnail: '/images/thumbnails/works/sinseol.png',
    images: ['/images/thumbnails/works/sinseol.png'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
  },

  // ── 제품디자인 (추후 추가) ──

  // ── 소셜미디어 디자인 (추후 추가) ──
];

export const workCategories: WorkCategory[] = [
  '소셜미디어 디자인',
  '제품디자인',
  '3D 작업',
  '컨텐츠디자인',
];

export const categorySlugMap: Record<string, WorkCategory> = {
  'social-media': '소셜미디어 디자인',
  'product-design': '제품디자인',
  '3d': '3D 작업',
  'content-design': '컨텐츠디자인',
};

export const categoryToSlug: Record<WorkCategory, string> = {
  '소셜미디어 디자인': 'social-media',
  '제품디자인': 'product-design',
  '3D 작업': '3d',
  '컨텐츠디자인': 'content-design',
};

export function getWorksByCategory(category: WorkCategory): WorkItem[] {
  return worksData.filter((w) => w.category === category);
}
