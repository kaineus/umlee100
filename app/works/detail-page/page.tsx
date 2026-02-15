'use client';

import CategoryGallery from '../CategoryGallery';
import { getWorksByCategory } from '../../data/works';

export default function DetailPageCategory() {
  return <CategoryGallery title="상세페이지" items={getWorksByCategory('상세페이지')} />;
}
