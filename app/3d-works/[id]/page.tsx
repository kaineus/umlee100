'use client';

import React from 'react';
import { projectsData } from '@/app/data/projects';
import { isR2Url } from '@/app/lib/r2-config';
import { FaCube } from 'react-icons/fa';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';

const Model3DDetailed = dynamic(() => import('@/app/components/ModelLoader'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full" style={{ color: '#999' }}>
      <FaCube size={40} className="mr-2 animate-spin" />
      <span>모델 컴포넌트 로딩중...</span>
    </div>
  ),
});

export default function ProjectDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const project = projectsData.find((p: any) => p.id === id);

  if (!project) {
    return (
      <div className="section-container py-12" style={{ backgroundColor: '#000' }}>
        <h1 className="text-3xl font-bold mb-6 text-white">프로젝트를 찾을 수 없습니다</h1>
      </div>
    );
  }

  const modelUrl = project.modelUrl;
  const hasValidModelUrl = modelUrl && (modelUrl.startsWith('http') || isR2Url(modelUrl));

  return (
    <div className="section-container py-12">
      <h1 className="text-3xl font-bold mb-6 text-white">{project.title}</h1>

      <div className="mb-8 flex flex-wrap">
        {project.categories.map((category: string, index: number) => (
          <span key={index} className="tag-dark mr-2 mb-2">
            {category}
          </span>
        ))}
      </div>

      <div className="mb-10">
        <div className="h-[500px] md:h-[600px] w-full">
          {hasValidModelUrl ? (
            <Model3DDetailed url={modelUrl} />
          ) : (
            <div
              className="w-full h-full rounded-lg flex flex-col items-center justify-center"
              style={{ backgroundColor: '#1a1a1a' }}
            >
              <FaCube size={48} className="mb-4" style={{ color: '#666' }} />
              <p className="text-xl font-semibold text-white">3D 모델 정보가 없습니다</p>
              <p className="mt-2" style={{ color: '#666' }}>모델 URL: {modelUrl || '지정되지 않음'}</p>
            </div>
          )}
        </div>
      </div>

      <div className="prose-dark">
        <h2 className="text-2xl font-bold mb-4 text-white">프로젝트 설명</h2>
        <div dangerouslySetInnerHTML={{ __html: project.description }} />
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-white">사용한 기술</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, index: number) => (
            <div key={index} className="relative w-12 h-12">
              <Image
                src={`/images/skill-icons/${tech}.png`}
                alt={tech}
                title={tech}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
