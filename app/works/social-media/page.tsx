'use client';

import CategoryGallery from '../CategoryGallery';
import { getWorksByCategory } from '../../data/works';

export default function SocialMediaPage() {
  return <CategoryGallery title="소셜미디어 디자인" items={getWorksByCategory('소셜미디어 디자인')} />;
}
