'use client';

import CategoryGallery from '../CategoryGallery';
import { getWorksByCategory } from '../../data/works';

export default function ThreeDPage() {
  return <CategoryGallery title="3D 작업" items={getWorksByCategory('3D 작업')} />;
}
