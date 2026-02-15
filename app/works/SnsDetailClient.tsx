'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { worksData } from '../data/works';

const SWIPE_THRESHOLD = 50;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

export default function SnsDetailClient() {
  const { id } = useParams();
  const router = useRouter();
  const work = worksData.find((w) => w.id === id);

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(new Set());
  const touchStartX = useRef(0);

  const total = work?.images.length ?? 0;

  const goTo = useCallback(
    (index: number) => {
      if (!work) return;
      const clamped = Math.max(0, Math.min(index, total - 1));
      setDirection(clamped > activeIndex ? 1 : -1);
      setActiveIndex(clamped);
    },
    [activeIndex, total, work],
  );

  const prev = useCallback(() => {
    if (activeIndex > 0) goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const next = useCallback(() => {
    if (activeIndex < total - 1) goTo(activeIndex + 1);
  }, [activeIndex, total, goTo]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape') router.back();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [prev, next, router]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) next();
      else prev();
    }
  };

  const handleImageLoad = (index: number) => {
    setLoaded((prev) => new Set(prev).add(index));
  };

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#000' }}>
        <p className="text-white">프로젝트를 찾을 수 없습니다</p>
      </div>
    );
  }

  return (
    <div className="sns-detail">
      {/* 뒤로 가기 */}
      <div className="sns-detail__header">
        <button className="sns-detail__back-btn" onClick={() => router.back()}>
          ← 뒤로 가기
        </button>
      </div>

      {/* 메인 이미지 영역 */}
      <div
        className="sns-detail__main"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* 좌측 화살표 */}
        {activeIndex > 0 && (
          <button className="sns-detail__arrow sns-detail__arrow--left" onClick={prev}>
            <IoChevronBack />
          </button>
        )}

        {/* 이미지 캐러셀 */}
        <div className="sns-detail__image-area">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={activeIndex}
              className="sns-detail__slide"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {!loaded.has(activeIndex) && (
                <div className="skeleton" style={{ position: 'absolute', inset: 0 }} />
              )}
              <Image
                src={work.images[activeIndex]}
                alt={`${work.title} - ${activeIndex + 1}`}
                fill
                sizes="(min-width: 992px) 80vw, 100vw"
                className="sns-detail__image"
                priority={activeIndex === 0}
                onLoad={() => handleImageLoad(activeIndex)}
                style={{ opacity: loaded.has(activeIndex) ? 1 : 0, transition: 'opacity 0.3s ease' }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 우측 화살표 */}
        {activeIndex < total - 1 && (
          <button className="sns-detail__arrow sns-detail__arrow--right" onClick={next}>
            <IoChevronForward />
          </button>
        )}

        {/* 카운터 */}
        <span className="sns-detail__counter">
          {activeIndex + 1} / {total}
        </span>
      </div>

      {/* 하단 정보 바 */}
      <div className="sns-detail__info">
        <h1 className="sns-detail__title">{work.title}</h1>
        <div className="sns-detail__tags">
          {work.tags.map((tag, i) => (
            <span key={i} className="sns-detail__tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* 썸네일 스트립 */}
      <div className="sns-detail__thumbs">
        {work.images.map((src, i) => (
          <button
            key={i}
            className={`sns-detail__thumb ${i === activeIndex ? 'sns-detail__thumb--active' : ''}`}
            onClick={() => goTo(i)}
          >
            <Image
              src={src}
              alt={`썸네일 ${i + 1}`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
