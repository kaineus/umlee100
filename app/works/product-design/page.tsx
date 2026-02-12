'use client';

import CategoryGallery from '../CategoryGallery';
import { getWorksByCategory } from '../../data/works';

export default function ProductDesignPage() {
  return <CategoryGallery title="제품디자인" items={getWorksByCategory('제품디자인')} />;
}
