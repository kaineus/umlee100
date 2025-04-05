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
  {
    id: '1',
    title: '델피노 리조트',
    categories: ['리조트', '3D 모델링', '공빌더'],
    technologies: ['Gongbuilder', 'CAD', 'Three.js'],
    description: `
      <p>이 프로젝트는 델피노 리조트의 동쪽 구역을 3D 모델링한 작업입니다.</p>
      
      <p>리조트의 특징적인 건축 양식과 자연 환경을 세밀하게 구현하기 위해 노력했습니다. 건물의 곡선적인 디자인 요소와 주변 조경의 조화를 중점적으로 표현했습니다.</p>
      
      <p>제작 과정에서는 공빌더를 주요 도구로 사용했으며, 실제 건축물의 비율과 구조를 정확하게 재현하기 위해 참고 자료를 철저히 분석했습니다.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>정교한 건축 디테일 표현</li>
        <li>주변 환경과의 자연스러운 통합</li>
        <li>최적화된 모델링으로 실시간 렌더링에 적합</li>
        <li>다양한 각도에서의 시각적 완성도 고려</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/delphino_east.png',
    modelUrl: 'r2://delphino_east.glb'
  },
  {
    id: '2',
    title: '델피노 리조트 서쪽',
    categories: ['리조트', '3D 모델링', '공빌더'],
    technologies: ['Gongbuilder', 'CAD', 'Three.js'],
    description: `
      <p>델피노 리조트의 서쪽 구역을 상세하게 3D 모델링한 프로젝트입니다.</p>
      
      <p>이 모델링 작업에서는 서쪽 구역의 특징적인 건축 디자인과 넓은 조경 공간을 중점적으로 표현했습니다. 건물의 세부 구조와 주변 환경 요소를 정밀하게 재현하기 위해 다양한 텍스처와 모델링 기법을 활용했습니다.</p>
      
      <p>제작 과정에서는 실제 건축물의 비율과 디자인 철학을 존중하며, 시각적으로 인상적인 결과물을 만들기 위해 노력했습니다.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>복잡한 건축 구조의 정확한 재현</li>
        <li>조경 요소와 건물의 조화로운 배치</li>
        <li>다양한 재질과 텍스처를 통한 현실감 있는 표현</li>
        <li>최적화된 모델링으로 다양한 환경에서 활용 가능</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/delphino_west.png',
    modelUrl: 'r2://delphino_west.glb'
  },
  {
    id: '3',
    title: '한양대 지하철역',
    categories: ['지하철', '3D 모델링', '공빌더'],
    technologies: ['Gongbuilder', 'CAD', 'Three.js'],
    description: `
      <p>한양대 지하철역의 복잡한 내부 구조를 상세하게 3D 모델링한 프로젝트입니다.</p>
      
      <p>이 작업에서는 지하철역의 특징적인 공간 구성과 승객 흐름을 고려한 모델링에 중점을 두었습니다. 역사 내 다양한 시설물과 안내 표지판, 통로 등을 실제와 유사하게 재현하기 위해 노력했습니다.</p>
      
      <p>모델링 과정에서는 실제 측정 데이터를 바탕으로 정확한 비율과 구조를 구현했으며, 조명 효과를 통해 지하 공간의 분위기를 효과적으로 표현했습니다.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>실제 역사의 정확한 구조적 재현</li>
        <li>효율적인 승객 동선 설계 반영</li>
        <li>지하 공간의 독특한 조명 효과 표현</li>
        <li>안전 및 편의 시설의 세밀한 모델링</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/hanyang.png',
    modelUrl: 'r2://hanyang.glb'
  },
  {
    id: '4',
    title: '장지역',
    categories: ['지하철', '3D 모델링', '공빌더'],
    technologies: ['Gongbuilder', 'CAD', 'Three.js'],
    description: `
      <p>장지역의 독특한 구조와 내부 시설을 3D로 모델링한 프로젝트입니다.</p>
      
      <p>장지역만의 특징적인 디자인 요소와 공간 배치를 중심으로 모델링을 진행했습니다. 실제 역사의 주요 구조물과 내부 시설물을 정확하게 재현하기 위해 현장 조사와 자료 수집에 많은 시간을 투자했습니다.</p>
      
      <p>특히 역사 내 이동 동선과 접근성을 고려한 설계 철학을 3D 모델에 반영하기 위해 노력했으며, 다양한 재질과 조명 효과를 통해 공간의 실제 분위기를 구현했습니다.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>장지역만의 고유한 디자인 특성 반영</li>
        <li>승객 편의를 고려한 공간 구성 모델링</li>
        <li>정확한 크기와 비율로 실제감 있는 재현</li>
        <li>다양한 시설물의 세밀한 디테일 표현</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/jangji.png',
    modelUrl: 'r2://jangji.glb'
  },
  {
    id: '5',
    title: '문정역',
    categories: ['지하철', '3D 모델링', '공빌더'],
    technologies: ['Gongbuilder', 'CAD', 'Three.js'],
    description: `
      <p>문정역의 공간 구성과 디자인 특성을 상세하게 3D 모델링한 프로젝트입니다.</p>
      
      <p>문정역의 고유한 디자인 언어와 공간 활용 방식을 모델링 작업에 반영했습니다. 실제 역사의 건축적 특징과 내부 시설물을 정확하게 재현하기 위해 다양한 참고 자료를 활용했습니다.</p>
      
      <p>이 작업에서는 특히 지하 공간의 개방감과 자연광 활용 방식에 주목하여, 공간의 분위기를 효과적으로 표현하기 위한 모델링과 조명 설정에 집중했습니다.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>문정역의 독특한 건축 구조 표현</li>
        <li>자연광과 인공 조명의 조화로운 표현</li>
        <li>역사 내 다양한 기능 공간의 세밀한 모델링</li>
        <li>실제 사용자 경험을 고려한 디자인 요소 재현</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/munjeong.png',
    modelUrl: 'r2://munjeong.glb'
  },
  {
    id: '6',
    title: '까치산역',
    categories: ['지하철', '3D 모델링', '공빌더'],
    technologies: ['Gongbuilder', 'CAD', 'Three.js'],
    description: `
      <p>까치산역의 복잡한 환승 체계와 내부 공간을 3D로 모델링한 프로젝트입니다.</p>
      
      <p>여러 노선이 교차하는 환승역의 특성을 반영하여, 복잡한 동선과 층간 연결 구조를 정확하게 모델링하는 데 주력했습니다. 실제 역사의 구조적 특징과 공간 배치를 바탕으로 사실적인 3D 모델을 구현했습니다.</p>
      
      <p>특히 승객의 이동 효율성과 직관적인 길찾기를 위한 설계 요소들을 모델에 반영하며, 환승역으로서의 기능적 특성을 강조했습니다.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>복잡한 환승 구조의 명확한 시각화</li>
        <li>효율적인 승객 동선 설계 반영</li>
        <li>다층 구조의 정확한 모델링</li>
        <li>안내 시스템과 시설물의 상세한 표현</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/kkachisan.png',
    modelUrl: 'r2://kkachisan.glb'
  },
  {
    id: '7',
    title: '신답역',
    categories: ['지하철', '3D 모델링', '공빌더'],
    technologies: ['Gongbuilder', 'CAD', 'Three.js'],
    description: `
      <p>신답역의 독특한 공간 구성과 아늑한 분위기를 3D로 모델링한 프로젝트입니다.</p>
      
      <p>신답역만의 특징적인 디자인 요소와 공간 활용 방식에 초점을 맞추어 모델링을 진행했습니다. 역사의 컴팩트한 구조와 효율적인 공간 배치를 정확하게 표현하기 위해 노력했습니다.</p>
      
      <p>이 작업에서는 실제 역사의 재료 질감과 조명 분위기를 사실적으로 재현하는 데 중점을 두었으며, 사용자 경험을 고려한 다양한 디자인 요소들을 세심하게 모델링했습니다.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>아늑한 공간감을 살린 모델링</li>
        <li>최적화된 동선과 공간 배치의 시각화</li>
        <li>고유한 디자인 언어의 정확한 표현</li>
        <li>실제 재료 질감과 조명 효과의 사실적 구현</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/sindap.png',
    modelUrl: 'r2://sindap.glb'
  },
  {
    id: '8',
    title: '신설역',
    categories: ['지하철', '3D 모델링', '공빌더'],
    technologies: ['Gongbuilder', 'CAD', 'Three.js'],
    description: `
      <p>신설역의 현대적 디자인과 기능적 공간 배치를 3D로 모델링한 프로젝트입니다.</p>
      
      <p>최신 지하철 역사의 디자인 트렌드와 사용자 중심 설계 철학이 반영된 신설역의 특징을 모델링 작업에 담아냈습니다. 개방감 있는 공간 구성과 효율적인 승객 동선을 중심으로 3D 모델을 구현했습니다.</p>
      
      <p>특히 현대적인 재료와 조명 기법을 통한 역사의 분위기 표현에 주력했으며, 다양한 디지털 안내 시스템과 편의 시설의 세부 디테일을 정확하게 모델링했습니다.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>현대적 디자인 언어의 정확한 표현</li>
        <li>개방감 있는 공간 구성의 효과적인 시각화</li>
        <li>첨단 시설과 디지털 요소의 세밀한 모델링</li>
        <li>다양한 기능 공간의 유기적 연결성 표현</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/sinseol.png',
    modelUrl: 'r2://sinseol.glb'
  },
  {
    id: '9',
    title: 'SKT 타워',
    categories: ['빌딩', '3D 모델링', '공빌더'],
    technologies: ['Gongbuilder', 'CAD', 'Three.js'],
    description: `
      <p>SKT 타워의 웅장한 외관과 도시 랜드마크로서의 존재감을 3D로 모델링한 프로젝트입니다.</p>
      
      <p>독특한 외관 디자인과 도시 스카이라인에서의 시각적 임팩트를 중심으로 모델링 작업을 진행했습니다. 건물의 구조적 특징과 외장재의 질감을 정확하게 표현하기 위해 다양한 참고 자료와 실제 측정 데이터를 활용했습니다.</p>
      
      <p>특히 건물 외관의 커튼월 디자인과 빛의 반사 효과를 사실적으로 구현하는 데 중점을 두었으며, 주변 환경과의 조화를 고려한 모델링을 진행했습니다.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>정확한 구조적 비율과 디테일 표현</li>
        <li>독특한 외관 디자인의 세밀한 구현</li>
        <li>현실적인 재료 질감과 빛 반사 효과</li>
        <li>도시 맥락 속 랜드마크로서의 위상 표현</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/skt_tower.png',
    modelUrl: 'r2://skt_tower.glb'
  },
  {
    id: '10',
    title: '호반 빌딩',
    categories: ['빌딩', '3D 모델링', '공빌더'],
    technologies: ['Gongbuilder', 'CAD', 'Three.js'],
    description: `
      <p>호반 빌딩의 현대적 디자인과 구조적 특징을 3D로 모델링한 프로젝트입니다.</p>
      
      <p>현대 건축의 미학적 요소와 기능적 설계가 조화를 이루는 호반 빌딩의 특성을 모델링 작업에 반영했습니다. 건물의 외관 디자인과 구조적 특징을 정확하게 재현하기 위해 다양한 도면과 실측 자료를 참고했습니다.</p>
      
      <p>특히 건물의 외장재 질감과 디테일한 건축 요소들을 세밀하게 표현하는 데 주력했으며, 도시 환경 속에서의 맥락적 의미를 고려한 모델링을 진행했습니다.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>현대적 건축 디자인의 정확한 재현</li>
        <li>세련된 외장재와 디테일의 사실적 표현</li>
        <li>구조적 특징과 공간 구성의 균형 있는 모델링</li>
        <li>주변 도시 맥락과의 조화 고려</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/hoban.png',
    modelUrl: 'r2://hoban.glb'
  },
  {
    id: '11',
    title: '용산 구청',
    categories: ['빌딩', '3D 모델링', '공빌더'],
    technologies: ['Gongbuilder', 'CAD', 'Three.js'],
    description: `
      <p>용산 지역의 상징적인 타워를 3D로 모델링한 프로젝트입니다.</p>
      
      <p>용산 지역의 도시 재생과 현대적 개발을 상징하는 랜드마크 건물의 특징을 모델링 작업에 담아냈습니다. 건물의 독특한 형태와 구조적 특성을 정확하게 표현하기 위해 다양한 자료 조사와 분석 과정을 거쳤습니다.</p>
      
      <p>특히 건물의 외관 디자인과 도시 스카이라인에서의 시각적 존재감을 효과적으로 표현하는 데 중점을 두었으며, 주변 환경과의 관계성을 고려한 모델링을 진행했습니다.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">특징:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li>독특한 건축 형태의 정확한 구현</li>
        <li>현대적 외장재와 구조체의 세밀한 표현</li>
        <li>도시 맥락 속 랜드마크로서의 위상 표현</li>
        <li>다양한 시점에서의 시각적 임팩트 고려</li>
      </ul>
    `,
    imageUrl: '/images/thumbnails/works/yongsan.png',
    modelUrl: 'r2://yongsan.glb'
  }
]; 