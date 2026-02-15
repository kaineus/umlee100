export type WorkCategory = '상세페이지' | '이벤트 페이지' | 'SNS 컨텐츠' | '광고 이미지' | '배너';

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

export interface CarouselItem {
  id: string;
  category: WorkCategory;
  thumbnail: string;
  slug: string;
}

export const carouselItems: CarouselItem[] = [
  { id: 'carousel-1', category: '상세페이지', thumbnail: '/images/carousel/detail-page.png', slug: 'detail-page' },
  { id: 'carousel-2', category: '이벤트 페이지', thumbnail: '/images/carousel/event-page.png', slug: 'event-page' },
  { id: 'carousel-3', category: 'SNS 컨텐츠', thumbnail: '/images/carousel/sns-content.png', slug: 'sns-content' },
  { id: 'carousel-4', category: '광고 이미지', thumbnail: '/images/carousel/ad-image.png', slug: 'ad-image' },
  { id: 'carousel-5', category: '배너', thumbnail: '/images/carousel/banner.png', slug: 'banner' },
];

export const worksData: WorkItem[] = [
  // 상세페이지
  {
    id: 'detail-jelhard',
    title: '휴대폰 젤하드케이스',
    category: '상세페이지',
    tags: ['웹사이트', '스마트 스토어', '상세페이지'],
    description:
      '젤하드 휴대폰 케이스 판매를 위한 상품페이지 제작 작업입니다. 작가가 직접 그린 원화를 강조하기 위해 페이지 초반에 작가와 작품 소개를 배치하고, 원화의 감각을 살리는 기술력과 케이스의 내구성까지 한눈에 확인할 수 있도록 구성했습니다.',
    thumbnail: '/images/works/detail-page/1-thumb.webp',
    images: ['/images/works/detail-page/1-detail.png'],
    technologies: ['Figma', 'Photoshop', 'Illustrator'],
  },
  {
    id: 'detail-cardcase-set',
    title: '휴대폰 카드케이스+그립톡 2종 세트',
    category: '상세페이지',
    tags: ['웹사이트', '스마트 스토어', '상세페이지'],
    description:
      '휴대폰 카드케이스와 그립톡 2종 세트 판매를 위한 상품페이지 제작 작업입니다. 작가가 직접 그린 원화를 강조하기 위해 페이지 초반에 작가와 작품 소개를 배치하고, 카드 수납이 가능한 케이스와 동일한 그림을 사용한 그립톡의 조합을 보여주는 목업 파일을 제작했습니다.',
    thumbnail: '/images/works/detail-page/2-thumb.webp',
    images: ['/images/works/detail-page/2-detail.png'],
    technologies: ['Figma', 'Photoshop', 'Illustrator'],
  },
  {
    id: 'detail-magsafe',
    title: '맥세이프 카드지갑',
    category: '상세페이지',
    tags: ['웹사이트', '스마트 스토어', '상세페이지'],
    description:
      '맥세이프 카드지갑 판매를 위한 상품페이지 제작 작업입니다. 작가와 작품 소개를 초반에 배치해 원화를 강조하고, 카드 수납 기능을 보여주는 목업 파일을 제작했습니다.',
    thumbnail: '/images/works/detail-page/3-thumb.webp',
    images: ['/images/works/detail-page/3-detail.png'],
    technologies: ['Figma', 'Photoshop', 'Illustrator'],
  },
  {
    id: 'detail-earphone',
    title: '무선이어폰 케이스',
    category: '상세페이지',
    tags: ['웹사이트', '스마트 스토어', '상세페이지'],
    description:
      '무선 이어폰 케이스 판매를 위한 상품페이지 제작 작업입니다. 작가와 작품 소개를 초반에 배치해 원화를 강조하고, 이어폰 종류별 그림 배치를 보여주는 목업 파일을 제작했습니다.',
    thumbnail: '/images/works/detail-page/4-thumb.webp',
    images: ['/images/works/detail-page/4-detail.png'],
    technologies: ['Figma', 'Photoshop', 'Illustrator'],
  },
  {
    id: 'detail-zfold',
    title: '갤럭시 Z폴드 케이스',
    category: '상세페이지',
    tags: ['웹사이트', '스마트 스토어', '상세페이지'],
    description:
      '갤럭시 Z폴드 케이스 판매를 위한 상품페이지 제작 작업입니다. 작가와 작품 소개를 페이지 초반에 배치해 원화를 강조하고, Z폴드 특성에 맞춰 휴대폰을 접었을 때 그림 배치를 한눈에 확인할 수 있도록 구성하여 제작했습니다.',
    thumbnail: '/images/works/detail-page/5-thumb.webp',
    images: ['/images/works/detail-page/5-detail.png'],
    technologies: ['Figma', 'Photoshop', 'Illustrator'],
  },
  {
    id: 'detail-zflip',
    title: '갤럭시 Z플립 케이스',
    category: '상세페이지',
    tags: ['웹사이트', '스마트 스토어', '상세페이지'],
    description:
      '갤럭시 Z플립 케이스 판매를 위한 상품페이지 제작 작업입니다. 작가와 작품 소개를 페이지 초반에 배치해 원화를 강조하고, Z플립 특성에 맞춰 휴대폰을 접었을 때 그림 배치를 한눈에 확인할 수 있도록 구성하여 제작했습니다.',
    thumbnail: '/images/works/detail-page/6-thumb.webp',
    images: ['/images/works/detail-page/6-detail.png'],
    technologies: ['Figma', 'Photoshop', 'Illustrator'],
  },
  // 이벤트 페이지
  {
    id: 'event-autumn',
    title: '가을 아트굿즈 이벤트',
    category: '이벤트 페이지',
    tags: ['웹사이트', '온라인 쇼핑몰', '이벤트 페이지'],
    description:
      '가을을 맞아, 가을에 어울리는 그림으로 제작된 아트굿즈 할인 이벤트 페이지 제작 작업입니다. 전체적인 콘셉트를 단풍과 가을 분위기로 잡아 붉고 따뜻한 톤으로 구성하고, 사용자가 자연스럽게 이벤트와 제품에 관심을 가질 수 있도록 시각적 흐름을 설계했습니다.',
    thumbnail: '/images/works/event-page/autumn-thumb.png',
    images: ['/images/works/event-page/autumn-detail.png'],
    technologies: ['Figma', 'Photoshop'],
  },
  {
    id: 'event-summer',
    title: '여름 시즌 이벤트',
    category: '이벤트 페이지',
    tags: ['웹사이트', '온라인 쇼핑몰', '이벤트 페이지'],
    description:
      '여름을 맞아 시원한 푸른 톤의 그림을 추천하고, 시각이 감각 기관에서 큰 비중을 차지하여 푸른색을 보면 더운 여름에 시각적 효과가 있다는 과학적 사실을 활용한 이벤트 페이지 제작 작업입니다. 내용과 분위기에 맞춰 전체 색감을 푸른 톤으로 구성하고, 추천 그림과 그림 구독 신청 페이지로 자연스럽게 이어질 수 있도록 설계하여 제작했습니다.',
    thumbnail: '/images/works/event-page/summer-thumb.png',
    images: ['/images/works/event-page/summer-detail.png'],
    technologies: ['Figma', 'Photoshop'],
  },
  {
    id: 'event-child-dev',
    title: '아이발달 이벤트',
    category: '이벤트 페이지',
    tags: ['웹사이트', '온라인 쇼핑몰', '이벤트 페이지'],
    description:
      '성장기 아이들이 그림을 보면 두뇌 발달에 긍정적인 영향을 준다는 과학적 사실을 기반으로, 각 성장 단계와 발달 과정에 맞는 그림을 추천하고 할인 혜택과 고객 후기로 자연스럽게 연결되는 그림 구독 신청 페이지 제작 작업입니다. 페이지 전체는 추천 그림과 내용에 맞춰 시각적으로 일관된 구성을 유지하며, 사용자가 자연스럽게 구독으로 이어질 수 있도록 설계하여 제작했습니다.',
    thumbnail: '/images/works/event-page/summer2-thumb.png',
    images: ['/images/works/event-page/child-dev-detail.png'],
    technologies: ['Figma', 'Photoshop'],
  },
  {
    id: 'event-chuseok',
    title: '추석 이벤트',
    category: '이벤트 페이지',
    tags: ['웹사이트', '온라인 쇼핑몰', '이벤트 페이지'],
    description:
      '추석 기획전을 위한 이벤트 페이지 제작 작업입니다. 추석에 어울리는 그림을 추천하고 할인 혜택을 제공하며, 페이지 전체는 노란빛이 도는 갈색 톤에 색동 포인트를 더해 시즌 분위기를 살렸습니다. 사용자가 추천 그림과 이벤트 내용을 자연스럽게 확인하고, 그림 구독 신청으로 이어질 수 있도록 설계하여 제작했습니다.',
    thumbnail: '/images/works/event-page/chuseok-thumb.png',
    images: ['/images/works/event-page/chuseok-detail.png'],
    technologies: ['Figma', 'Photoshop'],
  },
  {
    id: 'event-christmas',
    title: '크리스마스 이벤트',
    category: '이벤트 페이지',
    tags: ['웹사이트', '온라인 쇼핑몰', '이벤트 페이지'],
    description:
      '크리스마스 기획전을 위한 이벤트 페이지 제작 작업입니다. 크리스마스에 어울리는 그림을 추천하고 할인 혜택을 제공하며, 페이지 전체는 빨간색과 초록색을 활용해 시즌 분위기를 살렸습니다. 사용자가 추천 그림과 이벤트 내용을 자연스럽게 확인하고, 그림 구독 신청으로 이어질 수 있도록 설계하여 제작했습니다.',
    thumbnail: '/images/works/event-page/christmas-thumb.png',
    images: ['/images/works/event-page/christmas-detail.png'],
    technologies: ['Figma', 'Photoshop'],
  },
  {
    id: 'event-yearend',
    title: '연말 이벤트',
    category: '이벤트 페이지',
    tags: ['웹사이트', '온라인 쇼핑몰', '이벤트 페이지'],
    description:
      '연말 기획전을 위한 이벤트 페이지 제작 작업입니다. 나를 위한 선물, 소중한 사람을 위한 선물로 그림 구독을 제안하며, 집에 따뜻함을 더하는 콘셉트로 구성했습니다. 페이지 전체는 내용에 맞춰 따스한 노란색 톤으로 제작되어 사용자가 자연스럽게 이벤트와 그림 구독 신청으로 이어질 수 있도록 설계하여 제작했습니다.',
    thumbnail: '/images/works/event-page/yearend-thumb.png',
    images: ['/images/works/event-page/yearend-detail.png'],
    technologies: ['Figma', 'Photoshop'],
  },
  {
    id: 'event-newyear',
    title: '새해 이벤트',
    category: '이벤트 페이지',
    tags: ['웹사이트', '온라인 쇼핑몰', '이벤트 페이지'],
    description:
      '신년 기획전을 위한 이벤트 페이지 제작 작업입니다. "새해 복 많이 받으세요"라는 메시지와 함께, 복을 상징하는 그림을 추천하고, 새해가 붉은 말의 해라는 의미를 담아 전체 색감을 붉은 톤으로 구성했습니다. 사용자가 추천 그림과 이벤트 내용을 자연스럽게 확인하고, 그림 구독 신청으로 이어질 수 있도록 설계하여 제작했습니다.',
    thumbnail: '/images/works/event-page/newyear-thumb.png',
    images: ['/images/works/event-page/newyear-detail.png'],
    technologies: ['Figma', 'Photoshop'],
  },
  {
    id: 'event-blackfriday',
    title: '블랙프라이데이 이벤트',
    category: '이벤트 페이지',
    tags: ['웹사이트', '온라인 쇼핑몰', '이벤트 페이지'],
    description:
      '연말 결산을 맞아 올해 마지막 할인 혜택을 제공하는 아트굿즈 이벤트 페이지 제작 작업입니다. 첫 구매 시 50% 할인 혜택을 강조하며, 크리스마스 시즌과 겹치는 이벤트인 만큼 페이지 전체를 빨간색 톤으로 구성했습니다. 인기 베스트 상품과 할인 전후 가격을 한눈에 확인할 수 있도록 배치해, 사용자가 자연스럽게 판매페이지로 이어지도록 설계했습니다.',
    thumbnail: '/images/works/event-page/blackfriday-thumb.png',
    images: ['/images/works/event-page/blackfriday-detail.png'],
    technologies: ['Figma', 'Photoshop'],
  },
  // 배너
  {
    id: 'banner-blackfriday',
    title: '블랙프라이데이 아트굿즈 배너',
    category: '배너',
    tags: ['웹사이트', '온라인 쇼핑몰', '배너'],
    description:
      '블랙프라이데이 아트굿즈 할인 프로모션을 위한 배너 이미지 제작 작업입니다. 아트굿즈 판매 홈페이지가 아닌, 연계된 그림 렌탈 홈페이지에 노출되는 배너인 만큼 해당 홈페이지의 베이지 톤과 차분한 무드에 맞춰 디자인했습니다. 홈페이지 특성을 고려해 과한 텍스트는 배제하고, 이미지를 중심으로 간결하게 구성했으며 텍스트는 개발 영역에서 적용될 수 있도록 설계했습니다.',
    thumbnail: '/images/works/banner/1-thumb.png',
    images: ['/images/works/banner/1-detail.png'],
    technologies: ['Figma', 'Photoshop'],
  },
  {
    id: 'banner-yearend',
    title: '아트굿즈 연말결산 배너',
    category: '배너',
    tags: ['웹사이트', '온라인 쇼핑몰', '배너'],
    description:
      '자사몰에서 진행된 아트굿즈 연말 결산 이벤트 홍보를 위한 히어로 배너 제작 작업입니다. 크리스마스 시즌과 함께 진행된 이벤트인 만큼 빨간색을 메인 컬러로 구성하고, 홈페이지 진입 시 가장 먼저 노출되는 배너 특성을 고려해 이벤트 내용을 직관적으로 전달할 수 있도록 제작했습니다.',
    thumbnail: '/images/works/banner/2-thumb.png',
    images: ['/images/works/banner/2-detail.png'],
    technologies: ['Figma', 'Photoshop'],
  },
];

export const workCategories: WorkCategory[] = [
  '상세페이지',
  '이벤트 페이지',
  'SNS 컨텐츠',
  '광고 이미지',
  '배너',
];

export const categorySlugMap: Record<string, WorkCategory> = {
  'detail-page': '상세페이지',
  'event-page': '이벤트 페이지',
  'sns-content': 'SNS 컨텐츠',
  'ad-image': '광고 이미지',
  'banner': '배너',
};

export const categoryToSlug: Record<WorkCategory, string> = {
  '상세페이지': 'detail-page',
  '이벤트 페이지': 'event-page',
  'SNS 컨텐츠': 'sns-content',
  '광고 이미지': 'ad-image',
  '배너': 'banner',
};

export function getWorksByCategory(category: WorkCategory): WorkItem[] {
  return worksData.filter((w) => w.category === category);
}
