'use client';

import React from 'react';
import { projectsData } from '@/app/data/projects';
import Image from 'next/image';
import Model3DDetailed from '@/app/components/Model3DDetailed';
import { isR2Url } from '@/app/lib/r2-config';
import { FaCube } from 'react-icons/fa';
import { useParams } from 'next/navigation';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';

// 프로젝트 ID로 프로젝트 찾기
export default function ProjectDetailsPage() {
  // useParams 훅을 사용하여 id 파라미터 가져오기
  const params = useParams();
  const id = params.id as string;
  const project = projectsData.find((p: any) => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">프로젝트를 찾을 수 없습니다</h1>
      </div>
    );
  }

  // R2 URL인지 확인
  const hasR2Model = isR2Url(project.modelUrl);

  return (
    <div className="container mx-auto px-4 py-12 mt-20">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <div className="mb-8 flex flex-wrap">
        {project.categories.map((category: string, index: number) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {category}
          </span>
        ))}
      </div>

      <div className="mb-10">
        <div className="h-[500px] md:h-[600px] w-full">
          {hasR2Model ? (
            <Model3DDetailed url={project.modelUrl} />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-lg flex flex-col items-center justify-center text-gray-600">
              <FaCube size={48} className="mb-4" />
              <p className="text-xl font-semibold">3D 모델 로딩 대기</p>
              <p className="mt-2">모델 URL: {project.modelUrl || '지정되지 않음'}</p>
            </div>
          )}
        </div>
      </div>

      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">프로젝트 설명</h2>
        <div dangerouslySetInnerHTML={{ __html: project.description }} />
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">사용한 기술</h2>
        <ul className="list-disc pl-5 space-y-2">
          {project.technologies.map((tech: string, index: number) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 