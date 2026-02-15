'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { WorkItem } from '../data/works';
import { categoryToSlug } from '../data/works';

function GalleryCard({ work }: { work: WorkItem }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link href={`/works/${categoryToSlug[work.category]}/${work.id}`} className="gallery-card">
      {!loaded && <div className="skeleton" style={{ position: 'absolute', inset: 0 }} />}
      <Image
        src={work.thumbnail}
        alt={work.title}
        fill
        sizes="(max-width: 767px) 50vw, (max-width: 1439px) 33vw, (max-width: 2559px) 25vw, 20vw"
        className="object-cover"
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={() => setLoaded(true)}
      />
      <div className="gallery-card__overlay">
        <h3>{work.title}</h3>
        <div className="gallery-card__tags">
          {work.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function CategoryGallery({
  items,
}: {
  title?: string;
  items: WorkItem[];
}) {
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#000' }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.875rem' }}>
          준비 중입니다.
        </p>
      </div>
    );
  }

  return (
    <div className="gallery-grid">
      {items.map((work, index) => (
        <motion.div
          key={work.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <GalleryCard work={work} />
        </motion.div>
      ))}
    </div>
  );
}
