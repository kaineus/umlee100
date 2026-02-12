'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { worksData } from '../../data/works';

function DetailImage({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full" style={{ minHeight: loaded ? 'auto' : '60vh' }}>
      {!loaded && <div className="skeleton" style={{ position: 'absolute', inset: 0 }} />}
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className="w-full h-auto"
        style={{ display: 'block', opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
        sizes="100vw"
        priority={priority}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default function WorkDetailPage() {
  const { id } = useParams();
  const work = worksData.find((w) => w.id === id);

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#000' }}>
        <p className="text-white">프로젝트를 찾을 수 없습니다</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#000' }}>
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
  );
}
