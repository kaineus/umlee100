'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: '하리보',
    imageUrl: '/images/web-design-features/thumbnails/하리보 젤리.jpg',
    tags: ['웹 디자인', '온라인 쇼핑몰', '상세페이지'],
  },
  {
    id: 2,
    title: '코코넛오일',
    imageUrl: '/images/web-design-features/thumbnails/코코넛오일.jpg',
    tags: ['웹 디자인', '온라인 쇼핑몰', '상세페이지'],
  },
  {
    id: 3,
    title: '르네휘테르 샴푸',
    imageUrl: '/images/web-design-features/thumbnails/르네휘테르 샴푸.jpg',
    tags: ['웹 디자인', '온라인 쇼핑몰', '상세페이지'],
  },
  {
    id: 4,
    title: '팝업 ADs',
    imageUrl: '/images/web-design-features/thumbnails/팝업광고.jpg',
    tags: ['웹 디자인', '온라인 쇼핑몰', '팝업 AD'],
  },
];

export default function WebDesign() {
  return (
    <div className="section-container py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-2 text-white"
      >
        웹 / 컨텐츠 디자인
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-sm mb-8"
        style={{ color: '#999999' }}
      >
        온라인 쇼핑몰 상세페이지 및 팝업 광고 디자인 작업물
      </motion.p>

      <div className="gallery-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <Link href={`/web-design/${project.id}`} className="gallery-card aspect-[4/3]">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="gallery-card__overlay">
                <h3>{project.title}</h3>
                <div className="gallery-card__tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
