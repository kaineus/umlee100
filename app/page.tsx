import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* 히어로 섹션 */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">안녕하세요,</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                이엄지입니다
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 mb-8">
              창의적인 웹 디자인과 몰입감 있는 3D 경험을 만드는 디자이너입니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/web-design" className="px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors">
                작업물 보기
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-white border border-neutral-300 rounded-full hover:bg-neutral-100 transition-colors">
                연락하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 작업 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">주요 작업</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FeaturedWork 
              title="웹 디자인" 
              description="직관적이고 아름다운 UI/UX를 바탕으로 사용자 경험을 향상시키는 웹 디자인"
              image="/images/web-design-feature.jpg"
              link="/web-design"
            />
            <FeaturedWork 
              title="3D 작업물" 
              description="창의적인 아이디어를 현실감 있는 3D 모델과 애니메이션으로 표현"
              image="/images/3d-feature.jpg"
              link="/3d-works"
            />
          </div>
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">기술 스택</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <SkillCard name="Figma" icon="🎨" />
            <SkillCard name="Adobe XD" icon="📱" />
            <SkillCard name="Photoshop" icon="🖌️" />
            <SkillCard name="Illustrator" icon="✏️" />
            <SkillCard name="Blender" icon="💎" />
            <SkillCard name="Cinema 4D" icon="🎬" />
            <SkillCard name="HTML/CSS" icon="🌐" />
            <SkillCard name="JavaScript" icon="💻" />
          </div>
        </div>
      </section>

      {/* 연락하기 섹션 */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-violet-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">프로젝트를 함께 할 준비가 되셨나요?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            새로운 프로젝트나 협업 기회에 대해 언제든지 연락주세요.
          </p>
          <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-neutral-100 transition-colors inline-block">
            연락하기
          </Link>
        </div>
      </section>
    </>
  );
}

// 주요 작업 카드 컴포넌트
interface FeaturedWorkProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

function FeaturedWork({ title, description, image, link }: FeaturedWorkProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
      <div className="h-[400px] relative">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-neutral-200 mb-4">{description}</p>
        <Link href={link} className="inline-flex items-center text-white font-medium">
          더 보기 <span className="ml-1 group-hover:ml-2 transition-all">→</span>
        </Link>
      </div>
    </div>
  );
}

// 기술 스택 카드 컴포넌트
interface SkillCardProps {
  name: string;
  icon: string;
}

function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-medium">{name}</h3>
    </div>
  );
}
