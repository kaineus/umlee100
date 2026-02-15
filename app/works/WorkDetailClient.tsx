'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { worksData } from '../data/works';

const techIconMap: Record<string, string> = {
  Figma: '/images/icons/figma.svg',
  Photoshop: '/images/icons/ps.png',
  Illustrator: '/images/icons/ai.png',
};

function DetailImage({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="work-detail__image-wrap" style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#000', padding: '24px 0' }}>
      {!loaded && <div className="skeleton" style={{ position: 'absolute', inset: 0 }} />}
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="(min-width: 992px) 42vw, 100vw"
        className="work-detail__image"
        priority={priority}
        onLoad={() => setLoaded(true)}
        style={{ width: 'auto', maxWidth: '100%', height: 'auto', opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
      />
    </div>
  );
}

export default function WorkDetailClient() {
  const { id } = useParams();
  const router = useRouter();
  const work = worksData.find((w) => w.id === id);

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#000' }}>
        <p className="text-white">프로젝트를 찾을 수 없습니다</p>
      </div>
    );
  }

  return (
    <div className="work-detail">
      {/* 왼쪽: 이미지 (스크롤 영역) */}
      <div className="work-detail__images">
        {work.images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-5%' }}
            transition={{ duration: 0.5 }}
          >
            <DetailImage
              src={src}
              alt={`${work.title} - ${index + 1}`}
              priority={index === 0}
            />
          </motion.div>
        ))}
      </div>

      {/* 오른쪽: 프로젝트 정보 */}
      <div className="work-detail__info">
        <button className="work-detail__back-btn" onClick={() => router.back()}>
          ← 뒤로 가기
        </button>
        <h1 className="work-detail__title">{work.title}</h1>

        <div className="work-detail__meta-section">
          <h3>프로젝트 정보</h3>

          {work.technologies.length > 0 && (
            <div className="work-detail__meta-row">
              <span className="work-detail__label">사용기술</span>
              <div className="work-detail__tech-icons">
                {work.technologies.map((tech) => (
                  techIconMap[tech] && (
                    <Image
                      key={tech}
                      src={techIconMap[tech]}
                      alt={tech}
                      width={36}
                      height={36}
                    />
                  )
                ))}
              </div>
            </div>
          )}

          <div className="work-detail__meta-row">
            <span className="work-detail__label">카테고리</span>
            <p className="work-detail__category-text">{work.tags.join(' / ')}</p>
          </div>
        </div>

        <div className="work-detail__desc-section">
          <h3>프로젝트 설명</h3>
          <p>{work.description}</p>
        </div>

      </div>
    </div>
  );
}
