'use client';

import CategoryGallery from '../CategoryGallery';
import { getWorksByCategory } from '../../data/works';

export default function EventPageCategory() {
  return <CategoryGallery title="이벤트 페이지" items={getWorksByCategory('이벤트 페이지')} />;
}
