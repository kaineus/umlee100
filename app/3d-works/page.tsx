'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Model3D from '../components/Model3D';
import { projectsData } from '../data/projects';
import { isR2Url } from '../lib/r2-config';
import { FaCube } from 'react-icons/fa';

// 카테고리 목록 생성 (중복 제거)
const allCategories = Array.from(
  new Set(projectsData.flatMap(project => project.categories))
);

export default function Works3DPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 선택된 카테고리에 따라 프로젝트 필터링
  const filteredProjects = selectedCategory
    ? projectsData.filter(project => project.categories.includes(selectedCategory))
    : projectsData;

  return (
    <div className="container mx-auto px-4 py-16 mt-20">
      <h1 className="text-4xl font-bold mb-8">3D 작업물</h1>
      
      {/* 카테고리 필터 */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            전체
          </button>
          
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* 프로젝트 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => {
          const hasR2Model = isR2Url(project.modelUrl);
          
          return (
            <Link 
              href={`/3d-works/${project.id}`} 
              key={project.id}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-60 relative overflow-hidden">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex flex-col items-center justify-center">
                      <FaCube size={48} className="text-gray-400 mb-2" />
                      <p className="text-gray-500">이미지 없음</p>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.categories.slice(0, 3).map((category, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-gray-600 text-sm line-clamp-2">
                    {project.description.replace(/<[^>]*>?/gm, '').trim().split('.')[0]}.
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
