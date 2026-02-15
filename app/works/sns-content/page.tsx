'use client';

import CategoryGallery from '../CategoryGallery';
import { getWorksByCategory } from '../../data/works';

export default function SnsContentCategory() {
  return <CategoryGallery title="SNS 컨텐츠" items={getWorksByCategory('SNS 컨텐츠')} />;
}
