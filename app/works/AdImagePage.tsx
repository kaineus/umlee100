'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

const adProjects = [
  { title: '여름 광고', slug: 'summer', count: 5 },
  { title: '가을 광고', slug: 'autumn', count: 5 },
  { title: '추석 광고', slug: 'chuseok', count: 5 },
  { title: '크리스마스', slug: 'christmas', count: 5 },
  { title: '연말', slug: 'yearend', count: 5 },
];

function useHorizontalDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
    el.style.cursor = 'grabbing';
    el.style.userSelect = 'none';
    el.style.scrollSnapType = 'none';
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const el = ref.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    el.scrollLeft = scrollLeft.current - walk;
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    const el = ref.current;
    if (el) {
      el.style.cursor = 'grab';
      el.style.userSelect = '';
      el.style.scrollSnapType = '';
    }
  }, []);

  return { ref, onMouseDown, onMouseMove, onMouseUp, onMouseLeave: onMouseUp };
}

function AdProjectRow({ title, slug, count }: { title: string; slug: string; count: number }) {
  const [loaded, setLoaded] = useState<Set<number>>(new Set());
  const scroll = useHorizontalDragScroll();

  const images = Array.from({ length: count }, (_, i) => ({
    src: `/images/works/ad/${slug}/${i + 1}.png`,
    alt: `${title} ${i + 1}`,
  }));

  return (
    <section className="ad-page__project">
      <h2 className="ad-page__project-title">{title}</h2>
      <div
        className="ad-page__scroll"
        ref={scroll.ref}
        onMouseDown={scroll.onMouseDown}
        onMouseMove={scroll.onMouseMove}
        onMouseUp={scroll.onMouseUp}
        onMouseLeave={scroll.onMouseLeave}
      >
        {images.map((img, i) => (
          <div key={i} className="ad-page__card">
            {!loaded.has(i) && <div className="skeleton ad-page__skeleton" />}
            <Image
              src={img.src}
              alt={img.alt}
              width={0}
              height={0}
              sizes="(min-width: 992px) 400px, 260px"
              className="ad-page__image"
              draggable={false}
              onLoad={() => setLoaded((prev) => new Set(prev).add(i))}
              style={{ opacity: loaded.has(i) ? 1 : 0, transition: 'opacity 0.3s ease' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AdImagePage() {
  return (
    <div className="ad-page">
      <div className="ad-page__intro">
        <h1 className="ad-page__title">광고 이미지 제작</h1>
        <p className="ad-page__desc">
          그림 렌탈 서비스를 홍보하기 위한 광고 이미지 제작 작업입니다.
        </p>
        <p className="ad-page__desc">
          시즌에 어울리는 작품을 선정하고, 이에 맞는 배경을 합성해 그림에 따라 달라지는 공간의 분위기를 표현했습니다.
        </p>
        <p className="ad-page__desc">
          이를 통해 그림 렌탈만으로도 공간의 무드를 변화시킬 수 있다는 점을 강조하며, 구독 서비스에 대한 관심을 유도할 수 있도록 제작했습니다.
        </p>
      </div>

      {adProjects.map((project) => (
        <AdProjectRow key={project.slug} {...project} />
      ))}
    </div>
  );
}
