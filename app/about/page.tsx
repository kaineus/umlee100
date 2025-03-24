import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">나에 대하여</h1>
      
      <div className="max-w-4xl mx-auto">
        {/* 프로필 섹션 */}
        <section className="mb-16 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 rounded-full overflow-hidden mx-auto">
              <Image
                src="/images/profile.jpg"
                alt="이엄지 프로필"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">이엄지</h2>
            <p className="text-lg text-gray-600 mb-6">웹 디자이너 & 3D 아티스트</p>
            
            <p className="mb-4">
              안녕하세요! 저는 사용자 경험을 중심으로 직관적이고 아름다운 디자인을 만드는 웹 디자이너이자 3D 아티스트입니다.
              5년 이상의 디자인 경력을 바탕으로 클라이언트의 비전을 현실로 구현하는 작업을 하고 있습니다.
            </p>
            
            <p>
              디자인은 단순히 아름다움을 넘어 사용자와 브랜드 간의 소통 방식이라고 생각합니다.
              항상 사용자의 관점에서 생각하며, 기능적이면서도 감성적인 경험을 제공하는 디자인을 추구합니다.
            </p>
          </div>
        </section>
        
        {/* 경력 섹션 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">경력</h2>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">시니어 웹 디자이너</h3>
                <span className="text-gray-500">2020 - 현재</span>
              </div>
              <p className="text-gray-600 mb-2">디자인 스튜디오 ABC</p>
              <p>
                다양한 브랜드의 웹사이트 디자인 및 브랜딩 작업을 담당했습니다.
                사용자 중심의 UI/UX 디자인 및 프로토타이핑, 디자인 시스템 구축 등을 수행했습니다.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">주니어 디자이너</h3>
                <span className="text-gray-500">2018 - 2020</span>
              </div>
              <p className="text-gray-600 mb-2">그래픽 디자인 회사 XYZ</p>
              <p>
                브랜드 아이덴티티, 웹 디자인, 소셜 미디어 콘텐츠 제작 등을 담당했습니다.
                다양한 프로젝트에 참여하며 디자인 실무 경험을 쌓았습니다.
              </p>
            </div>
          </div>
        </section>
        
        {/* 교육 섹션 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">교육</h2>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">시각디자인학과 학사</h3>
                <span className="text-gray-500">2014 - 2018</span>
              </div>
              <p className="text-gray-600">한국디자인대학교</p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">3D 모델링 과정 수료</h3>
                <span className="text-gray-500">2019</span>
              </div>
              <p className="text-gray-600">디지털 아트 아카데미</p>
            </div>
          </div>
        </section>
        
        {/* 기술 섹션 */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">기술</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <SkillBar skill="Figma" level={95} />
            <SkillBar skill="Adobe XD" level={90} />
            <SkillBar skill="Photoshop" level={85} />
            <SkillBar skill="Illustrator" level={80} />
            <SkillBar skill="Blender" level={75} />
            <SkillBar skill="Cinema 4D" level={70} />
          </div>
        </section>
      </div>
    </div>
  );
}

// 기술 레벨을 보여주는 컴포넌트
interface SkillBarProps {
  skill: string;
  level: number;
}

function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
} 