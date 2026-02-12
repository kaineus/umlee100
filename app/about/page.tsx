'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      <div className="section-container py-12">
        {/* 프로필 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16"
        >
          <div
            className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden shadow-lg"
            style={{ backgroundColor: '#1a1a1a' }}
          >
            <Image
              src="/images/profile.jpg"
              alt="이엄지"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white mb-4">이엄지</h1>
            <p className="text-xl mb-6" style={{ color: '#999999' }}>
              창의적인 웹 디자인과 몰입감 있는 3D 경험을 만드는 디자이너
            </p>
          </div>
        </motion.div>

        {/* 기술 스택 섹션 */}
        <Section title="기술 스택">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { src: '/images/skills/photoshop.png', alt: 'Photoshop' },
              { src: '/images/skills/cad.png', alt: 'CAD' },
              { src: '/images/skills/excel.png', alt: 'Excel' },
              { src: '/images/skills/powerpoint.png', alt: 'PowerPoint' },
              { src: '/images/skills/gongbuilder.png', alt: 'GongBuilder' },
            ].map((skill) => (
              <div
                key={skill.alt}
                className="py-1 px-4 rounded-xl text-center transition-all duration-300"
                style={{ backgroundColor: '#1a1a1a', border: '0.0625rem solid #222' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#fb3000')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#222')}
              >
                <div className="w-full h-36 relative">
                  <Image src={skill.src} alt={skill.alt} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <h2
        className="text-2xl font-bold text-white mb-8 pb-2"
        style={{ borderBottom: '0.0625rem solid #333' }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
