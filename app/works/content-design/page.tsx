'use client';

import CategoryGallery from '../CategoryGallery';
import { getWorksByCategory } from '../../data/works';

export default function ContentDesignPage() {
  return <CategoryGallery title="컨텐츠디자인" items={getWorksByCategory('컨텐츠디자인')} />;
}
