interface Project {
  id: string;
  title: string;
  categories: string[];
  technologies: string[];
  description: string;
  imageUrl?: string;
  modelUrl: string;
}

export const projectsData: Project[] = [
  // 리조트 카테고리
  {
    id: '1',
    title: '델피노 리조트 동쪽',
    categories: ['리조트', '3D 모델링'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
    description: `
      <p>이 프로젝트는 델피노 리조트의 동쪽 구역을 3D 모델링한 프로젝트입니다.</p>
      <p>리조트의 특징적인 건축 양식과 자연 환경을 세밀하게 구현하기 위해 노력했습니다. 건물의 곡선적인 디자인 요소와 주변 조경의 조화를 중점적으로 표현했습니다.</p>
      <p>제작 과정에서는 공빌더를 주요 도구로 사용했으며, 실제 건축물의 비율과 구조를 정확하게 재현하기 위해 참고 자료를 철저히 분석했습니다.</p>
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>복잡한 건축 구조의 정확한 재현​</li>
        <li>다양한 재질과 텍스쳐 제작을 통한 현실감 있는 표현​</li>
        <li>다양한 환경에서 활용 가능한 최적화된 모델링</li>
        <li>다양한 각도에서의 시각적 완성도 고려</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/delphino_east.png',
    modelUrl: 'r2://delphino_east.glb'
  },
  {
    id: '2',
    title: '델피노 리조트 서쪽',
    categories: ['리조트', '3D 모델링'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
    description: `
      <p>델피노 리조트의 서쪽 구역을 상세하게 3D 모델링한 프로젝트입니다.</p>
      <p>리조트의 특징적인 건물 모양과 구조를 현실감있게 구현하기 위해 노력했습니다.​</p>
      <p>제작과정에서 실제 건축물의 비율과 구조를 정확하게 표현하기 위해 실제 건축 도면과 현장 답사 자료를 비교 분석하여 구조적인 완성도를 높이고, 다양한 텍스쳐 제작을 통해 건물의 디테일을 높였습니다.​</p>
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>복잡한 건축 구조의 정확한 재현</li>
        <li>다양한 각도에서의 시각적 완성도 구현​</li>
        <li>다양한 재질과 텍스처를 통한 현실감 있는 표현</li>
        <li>다양한 환경에서 활용 가능한 최적화된 모델링 ​</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/delphino_west.png',
    modelUrl: 'r2://delphino_west.glb'
  },
  // 빌딩 카테고리
  {
    id: '9',
    title: 'SKT 타워',
    categories: ['빌딩', '3D 모델링'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
    description: `
      <p>SKT 타워의 웅장한 외관과 도시 랜드마크로서의 존재감을 3D로 모델링한 프로젝트입니다.</p>
      <p>독특한 외관 디자인과 시각적 임팩트를 중심으로 모델링 작업을 진행했습니다. 건물의 구조적 특징을 정확하게 표현하기 위해 실제 건축 도면과 현장 답사 측정 데이터를 활용했습니다. 특히 건물 외관 뿐만이 아니라 내부 까지 사실적으로 구현하는데 중점을 두며 모델링 작업 진행했습니다.​</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>정확한 구조적 비율과 디테일 표현</li>
        <li>독특한 외관 디자인의 세밀한 구현</li>
        <li>내부까지 사실적으로 구현​</li>
        <li>도시 맥락 속 랜드마크로서의 위상 표현</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/skt_tower.png',
    modelUrl: 'r2://skt_tower.glb'
  },
  {
    id: '10',
    title: '호반 H1',
    categories: ['빌딩', '3D 모델링'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
    description: `
      <p>호반 H1 건물의 현대적 디자인과 구조적 특징을 3D로 모델링한 프로젝트입니다.</p>
      <p>현대 건축의 미학적 요소와 기능적 설계가 조화를 이루는 호반 빌딩의 특성을 모델링 작업에 반영했습니다. 건물의 외관 디자인과 구조적 특징을 정확하게 재현하기 위해 다양한 도면과 실측 자료를 참고했습니다.</p>
      <p>건물의 외관 디자인과 구조적 특징을 정확하게 재현하기 위해 실제 건축 도면과 현장 답사 실측 자료를 참고했습니다.​</p>
      <p>특히 건물의 외장재 질감과 디테일한 건축 요소들을 세밀하게 표현하는 데 주력했으며, 도시 환경 속에서의 맥락적 의미를 고려한 모델링을 진행했습니다.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>현대적 건축 디자인의 정확한 재현</li>
        <li>세련된 외장재와 디테일의 사실적 표현</li>
        <li>구조적 특징과 공간 구성의 균형 있는 모델링</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/hoban.png',
    modelUrl: 'r2://hoban.glb'
  },
  {
    id: '11',
    title: '용산 구청',
    categories: ['빌딩', '3D 모델링'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
    description: `
      <p>용산구청의 독특한 형태와 구조적 특성을 정확하게 구현한 3D 모델링 프로젝트입니다.</p>
      <p>용산의 랜드마크 건물인 용산구청 건물의 특징을 3D 모델링 작업에 담아냈습니다. 건물의 독특한 형태와 구조적 특징을 정확하게 표현하기 위해 실제 건축 도면과 현장 실측 자료를 참고 했습니다. 특히 건물의 외관 디자인과 외장재의 디자인과 다양한 텍스쳐의 질감을 사실적으로 구현하는 데 중점을 두었으며, 주변 환경과의 조화를 고려한 모델링을 진행하였습니다.​</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>건축 디자인의 독특한 형태의 정확한 구현​</li>
        <li>현대적 외장재와 디테일의 세밀한 표현​</li>
        <li>도시의 랜드마크로서의 위상 표현​</li>
        <li>다양한 각도의 시각적 완성도 표현​</li>
        <li>주변 환경과의 조화를 고려한 작업​</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/yongsan.png',
    modelUrl: 'r2://yongsan.glb'
  },
  // 지하철 카테고리 
  {
    id: '3',
    title: '한양대역',
    categories: ['지하철', '3D 모델링'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
    description: `
      <p>이 프로젝트는 지하철 2호선 한양대역을 상세하게 3D 모델링한 작업입니다.​</p>
      <p>이 작업에서는 지하철역의 특징적인 공간 구성과 이동경로 흐름을 고려한 모델링에 중점을 두었습니다. 역사내 다양한 시설물과 안내 표지판, 통로등을 실제와 유사하게 재현하기위해 노력했습니다.​</p>
      <p>모델링 과정에서는 실제 설계 도면과 현장 답사를 통한 실제 측정 데이터를 바탕으로 정확한 비율과 구조를 현실감있게 구현했습니다.​</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>실제 지하철역사의 정확한 재현​</li>
        <li>안전 및 편의 시설등 다양한 역사 내 시설물의 세밀한 모델링​</li>
        <li>정확한 크기와 비율로 현실적인 재현​</li>
        <li>한양대역의 특징인 지상철의 건물형 외관 구현​</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/hanyang.png',
    modelUrl: 'r2://hanyang.glb'
  },
  {
    id: '4',
    title: '장지역',
    categories: ['지하철', '3D 모델링'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
    description: `
      <p>이 프로젝트는 지하철 8호선 장지역을 상세하게 3D 모델링한 작업입니다.​</p>
      <p>이 작업에서는 지하철역의 특징적인 공간 구성과 이동경로 흐름을 고려한 설계 철학을 모델링에 반영하는데 중점을 두었습니다. 역사내 다양한 시설물과 안내 표지판, 통로등을 실제와 유사하게 재현하기위해 노력했습니다.​</p>
      <p>모델링 과정에서는 실제 설계 도면과 현장 답사를 통한 실제 측정 데이터를 바탕으로 정확한 비율과 구조를 현실감있게 구현했습니다.​</p>
      <p>다양한 재질의 텍스쳐 표현을 사용해 공간의 실제 분위기를 구현했습니다.​</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>실제 지하철역사의 정확한 재현​</li>
        <li>안전 및 편의 시설등 다양한 역사 내 시설물의 세밀한 모델링​</li>
        <li>정확한 크기와 비율로 현실적인 재현​</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/jangji.png',
    modelUrl: 'r2://jangji.glb'
  },
  {
    id: '5',
    title: '문정역',
    categories: ['지하철', '3D 모델링'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
    description: `
      <p>이 프로젝트는 지하철 2호선 문정역을 상세하게 3D 모델링한 작업입니다.​</p>
      <p>이 작업에서는 지하철역의 특징적인 공간 구성과 이동경로 흐름을 고려한 설계 철학을 모델링에 반영하는데 중점을 두었습니다. 역사내 다양한 시설물과 안내 표지판, 통로등을 실제와 유사하게 재현하기위해 노력했습니다.​</p>
      <p>모델링 과정에서는 실제 설계 도면과 현장 답사를 통한 실제 측정 데이터를 바탕으로 정확한 비율과 구조를 현실감있게 구현했습니다.​</p>
      <p>다양한 재질의 텍스쳐 표현을 사용해 공간의 실제 분위기를 구현했습니다.​</p>
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>실제 지하철역사의 정확한 재현​</li>
        <li>안전 및 편의 시설등 다양한 역사 내 시설물의 세밀한 모델링​</li>
        <li>정확한 크기와 비율로 현실적인 재현​</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/munjeong.png',
    modelUrl: 'r2://munjeong.glb'
  },
  {
    id: '6',
    title: '까치산역',
    categories: ['지하철', '3D 모델링'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
    description: `
      <p>이 프로젝트는 지하철 2, 5호선 까치산역을 상세하게 3D 모델링한 작업입니다.​</p>
      <p>이 작업에서는 2호선과 5호선이 교차하는 환승역의 특성을 반영하여 복잡한 동선과 층간 연결구조를 정확하게 모델링 하는데 중점을 두었습니다.​</p>
      <p>특히 승객의 이동 효율성과 직관적인 길찾기를 위한 설계 요소들을 모델링에 반영하여 환승역으로서의 기능적 특성을 강조하고,​</p>
      <p>역사내 다양한 시설물과 안내 표지판, 통로등을 실제와 유사하게 재현하기위해 노력했습니다.​</p>
      <p>모델링 과정에서는 실제 설계 도면과 현장 답사를 통한 실제 측정 데이터를 바탕으로 정확한 비율과 구조를 현실감있게 구현했습니다.​</p>
      <p>다양한 재질의 텍스쳐 표현을 사용해 공간의 실제 분위기를 구현했습니다.​</p>
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>실제 지하철역사의 정확한 재현​</li>
        <li>환승역의 특성에 맞는 복잡한 동선과 층간 연결구조의 정확한 재현​</li>
        <li>안전 및 편의 시설등 다양한 역사 내 시설물의 세밀한 모델링​</li>
        <li>정확한 크기와 비율로 현실적인 재현​</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/kkachisan.png',
    modelUrl: 'r2://kkachisan.glb'
  },
  {
    id: '7',
    title: '신답역',
    categories: ['지하철', '3D 모델링'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
    description: `
      <p>이 프로젝트는 지하철 2호선 신답역을 상세하게 3D 모델링한 작업입니다.​</p>
      <p>이 작업에서는 신답역만의 독특한 공간구성과 아늑한 분위기를 재현하는데 중점을 두고 작업했습니다.​</p>
      <p>역사내 다양한 시설물과 안내 표지판, 통로등을 실제와 유사하게 재현하기위해 노력했습니다.​</p> 
      <p>모델링 과정에서는 실제 설계 도면과 현장 답사를 통한 실제 측정 데이터를 바탕으로 정확한 비율과 구조를 현실감있게 구현했습니다.​</p>
      <p>다양한 재질의 텍스쳐 표현을 사용해 공간의 실제 분위기를 구현했습니다.​</p>
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>실제 지하철역사의 정확한 재현​</li>
        <li>신답역만의 독특한 공간구성을 살린 모델링​</li>
        <li>안전 및 편의 시설등 다양한 역사 내 시설물의 세밀한 모델링​</li>
        <li>정확한 크기와 비율로 현실적인 재현​</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/sindap.png',
    modelUrl: 'r2://sindap.glb'
  },
  {
    id: '8',
    title: '신설동역',
    categories: ['지하철', '3D 모델링'],
    technologies: ['Gongbuilder', 'CAD', 'PhotoShop'],
    description: `
      <p></p>이 프로젝트는 지하철 2호선 신설동역을 3D 모델링한 작업입니다.​</p>
      <p>역사내 다양한 시설물과 안내 표지판, 통로등를 실제와 유사하게 재현하기위해 노력했습니다.​</p>
      <p>모델링 과정에서는 실제 설계 도면과 현장 답사를 통한 실제 측정 데이터를 바탕으로 정확한 비율과 구조를 현실감있게 구현했습니다.​</p>
      <p>다양한 재질의 텍스쳐 표현을 사용해 공간의 실제 분위기를 구현했습니다.​</p>
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>실제 지하철역사의 정확한 재현​</li>
        <li>안전 및 편의 시설등 다양한 역사 내 시설물의 세밀한 모델링​</li>
        <li>정확한 크기와 비율로 현실적인 재현​</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/sinseol.png',
    modelUrl: 'r2://sinseol.glb'
  }
]; 