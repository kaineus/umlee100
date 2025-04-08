'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiMail, FiPhone, FiCalendar } from 'react-icons/fi';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 프로필 섹션 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16">
          <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden bg-gray-100 shadow-lg">
            <Image 
              src="/images/profile.jpg" 
              alt="이엄지"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              이엄지
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              창의적인 웹 디자인과 몰입감 있는 3D 경험을 만드는 디자이너
            </p>
            
            <div className="flex flex-col space-y-3 mb-6">
              <div className="flex items-center text-gray-700">
                <FiCalendar className="mr-3" />
                <span>1992.09.04</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FiMail className="mr-3" />
                <span>umlee100@naver.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FiPhone className="mr-3" />
                <span>010-4503-3742</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/web-design" 
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                웹 디자인 보기
              </Link>
              <Link 
                href="/3d-works" 
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              >
                3D 작업 보기
              </Link>
            </div>
          </div>
        </div>
        
        {/* 기술 스택 섹션 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
            기술 스택
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white py-1 px-4 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-full h-36 relative">
                <Image 
                  src="/images/skills/photoshop.png" 
                  alt="Photoshop" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-white py-1 px-4 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-full h-36 relative">
                <Image 
                  src="/images/skills/cad.png" 
                  alt="CAD" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-white py-1 px-4 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-full h-36 relative">
                <Image 
                  src="/images/skills/excel.png" 
                  alt="Excel" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-white py-1 px-4 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-full h-36 relative">
                <Image 
                  src="/images/skills/powerpoint.png" 
                  alt="PowerPoint" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-white py-1 px-4 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
              <div className="w-full h-36 relative">
                <Image 
                  src="/images/skills/gongbuilder.png" 
                  alt="GongBuilder" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* 경력 섹션 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
            경력
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:w-1/4 mb-2 md:mb-0">
                <p className="text-gray-700 font-medium">2020.06 - 2024.01</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">(주)플럭시티</h3>
                <p className="text-gray-700 mb-1">DX콘텐츠그룹 콘텐츠팀 대리</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:w-1/4 mb-2 md:mb-0">
                <p className="text-gray-700 font-medium">2019.01 - 2020.05</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">(주)플럭시티</h3>
                <p className="text-gray-700 mb-1">콘텐츠팀 프리랜서</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:w-1/4 mb-2 md:mb-0">
                <p className="text-gray-700 font-medium">2017.09 - 2017.10</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">(주)플럭시티</h3>
                <p className="text-gray-700 mb-1">콘텐츠팀 프리랜서</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:w-1/4 mb-2 md:mb-0">
                <p className="text-gray-700 font-medium">2016.06 - 2016.08</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">농업회사법인(주)푸르벨</h3>
                <p className="text-gray-700 mb-1">온라인 쇼핑몰 웹디자이너 프리랜서</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:w-1/4 mb-2 md:mb-0">
                <p className="text-gray-700 font-medium">2014.09 - 2014.11</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">(주)세스코</h3>
                <p className="text-gray-700 mb-1">3D모델링 프리랜서</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:w-1/4 mb-2 md:mb-0">
                <p className="text-gray-700 font-medium">2013.05 - 2013.12</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">서울시청 공간정보담당관</h3>
                <p className="text-gray-700 mb-1">공간정보과 프리랜서</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 학력 섹션 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
            학력
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:w-1/4 mb-2 md:mb-0">
                <p className="text-gray-700 font-medium">2013.02</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">서일대학교</h3>
                <p className="text-gray-700 mb-1">생활가구디자인과</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:w-1/4 mb-2 md:mb-0">
                <p className="text-gray-700 font-medium">2011.02</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">한양대학교사범대학부속고등학교</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* 자격증 섹션 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
            자격증
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:w-1/4 mb-2 md:mb-0">
                <p className="text-gray-700 font-medium">2013.02</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">실기교사 디자인 교원자격증</h3>
                <p className="text-gray-700 mb-1">교육과학기술부</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:w-1/4 mb-2 md:mb-0">
                <p className="text-gray-700 font-medium">2012.12</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">가구설계제도사</h3>
                <p className="text-gray-700 mb-1">대한상공회의소</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:w-1/4 mb-2 md:mb-0">
                <p className="text-gray-700 font-medium">2012.01</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">목공지도사 3급</h3>
                <p className="text-gray-700 mb-1">(사)한국목공교육협회</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA 섹션 */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 mb-6">
            함께 협업할 수 있는 기회를 기다리고 있습니다!
          </p>
        </div>
      </div>
    </main>
  );
} 