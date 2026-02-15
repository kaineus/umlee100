'use client';

import CategoryGallery from '../CategoryGallery';
import { getWorksByCategory } from '../../data/works';

export default function AdImageCategory() {
  return <CategoryGallery title="광고 이미지" items={getWorksByCategory('광고 이미지')} />;
}
