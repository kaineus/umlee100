'use client';

import CategoryGallery from '../CategoryGallery';
import { getWorksByCategory } from '../../data/works';

export default function BannerCategory() {
  return <CategoryGallery title="배너" items={getWorksByCategory('배너')} />;
}
