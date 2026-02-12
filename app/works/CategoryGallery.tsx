'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { WorkItem } from '../data/works';

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
          <Link href={`/works/${work.id}`} className="gallery-card">
            <Image
              src={work.thumbnail}
              alt={work.title}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover"
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
        </motion.div>
      ))}
    </div>
  );
}
