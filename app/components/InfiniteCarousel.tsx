'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { CarouselItem } from '../data/works';

function CarouselCard({ item }: { item: CarouselItem }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link href={`/works/${item.slug}`} className="carousel-card">
      {!loaded && <div className="skeleton" style={{ position: 'absolute', inset: 0 }} />}
      <Image
        src={item.thumbnail}
        alt={item.category}
        fill
        sizes="(max-width: 767px) 250px, (max-width: 991px) 320px, 400px"
        className="object-cover"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
        onLoad={() => setLoaded(true)}
      />
      <div className="carousel-card__overlay">
        <span className="carousel-card__category">{item.category}</span>
      </div>
    </Link>
  );
}

export default function InfiniteCarousel({ items }: { items: CarouselItem[] }) {
  const duplicated = [...items, ...items];

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {duplicated.map((item, index) => (
          <CarouselCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}
