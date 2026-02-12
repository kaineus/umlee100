'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { worksData } from '../../data/works';

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
          className="relative w-full"
        >
          <Image
            src={src}
            alt={`${work.title} - ${index + 1}`}
            width={1920}
            height={1080}
            className="w-full h-auto"
            style={{ display: 'block' }}
            sizes="100vw"
            priority={index === 0}
          />
        </motion.div>
      ))}
    </div>
  );
}
