'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import { FaCube } from 'react-icons/fa';

const allCategories = Array.from(
  new Set(projectsData.flatMap(project => project.categories))
).filter(category => category !== '3D 모델링' && category !== '공빌더');

export default function Works3DPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = selectedCategory
    ? projectsData.filter(project => project.categories.includes(selectedCategory))
    : projectsData;

  return (
    <div className="section-container py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-white"
      >
        3D 작업물
      </motion.h1>

      {/* Category filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={selectedCategory === null ? 'filter-tab--active' : 'filter-tab'}
          >
            전체
          </button>
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'filter-tab--active' : 'filter-tab'}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery grid — 3col desktop, 2col tablet, 1col mobile */}
      <div className="gallery-grid gallery-grid--3col">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
          >
            <Link href={`/3d-works/${project.id}`} className="gallery-card aspect-[4/3]">
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ backgroundColor: '#1a1a1a' }}>
                  <FaCube size={48} className="mb-2" style={{ color: '#666' }} />
                  <p style={{ color: '#666' }}>이미지 없음</p>
                </div>
              )}
              <div className="gallery-card__overlay">
                <h3>{project.title}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
