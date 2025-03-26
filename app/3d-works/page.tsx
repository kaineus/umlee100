'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import Model3D from '../components/Model3D';

// 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: '델피노 리조트',
    category: 'character',
    client: '개인 프로젝트',
    year: '2024',
    tags: ['리조트', '3D 모델링', '블렌더'],
    description: '델피노 리조트의 3D 모델링 작업입니다. 리조트의 특색을 살린 디자인으로 제작했습니다.',
    imageUrl: '/models/delphino.glb',
    link: '/3d-works/1'
  },
  {
    id: 2,
    title: '건축 시각화',
    category: '건축',
    client: '인테리어 디자인 회사',
    year: '2023',
    description: '신축 주택의 인테리어 디자인을 3D로 시각화한 프로젝트입니다. 공간감과 조명 효과를 통해 실제 완공 후의 모습을 사전에 경험할 수 있도록 구현했습니다.',
    imageUrl: '/images/3d-work-2.jpg',
    link: '/3d-works/2'
  },
  {
    id: 3,
    title: '캐릭터 모델링',
    category: '캐릭터 디자인',
    client: '게임 개발사',
    year: '2022',
    description: '모바일 게임에 등장하는 캐릭터의 3D 모델링 작업입니다. 귀엽고 친근한 이미지와 게임 내 움직임을 고려한 디자인으로 제작했습니다.',
    imageUrl: '/images/3d-work-3.jpg',
    link: '/3d-works/3'
  },
  {
    id: 4,
    title: '제품 애니메이션',
    category: '애니메이션',
    client: '가전제품 브랜드',
    year: '2022',
    description: '신제품의 주요 기능을 설명하는 3D 애니메이션 작업입니다. 복잡한 메커니즘을 시각적으로 이해하기 쉽게 표현했습니다.',
    imageUrl: '/images/3d-work-4.jpg',
    link: '/3d-works/4'
  },
];

export default function ThreeDWorks() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">3D 작업물</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          사실적인 표현과 창의적인 접근으로 만든 다양한 3D 프로젝트입니다.
          제품 렌더링부터 건축 시각화, 캐릭터 모델링까지 다양한 분야의 작업물을 선보입니다.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group">
            <div className="relative overflow-hidden rounded-lg bg-gray-100">
              {project.category === 'character' ? (
                <Model3D url={project.imageUrl} />
              ) : (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
            </div>
            
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.client} · {project.year}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <Link 
                href={`/3d-works/${project.id}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
              >
                더 보기 <span className="ml-1 group-hover:ml-2 transition-all">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
