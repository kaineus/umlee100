import Link from 'next/link';
import InfiniteCarousel from './components/InfiniteCarousel';
import { carouselItems } from './data/works';

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-content">
        {/* Name Section */}
        <section className="home-hero">
          <h1 className="home-hero__name-ko">이엄지</h1>
          <p className="home-hero__name-en">Lee UmJi</p>
        </section>

        {/* Divider */}
        <hr className="home-divider" />

        {/* Navigation Links */}
        <nav className="home-nav">
          <Link href="/profile" className="home-nav__link">프로필</Link>
          <Link href="/works/detail-page" className="home-nav__link">작업물 보기</Link>
        </nav>

        {/* Divider */}
        <hr className="home-divider" />

        {/* Intro Text */}
        <p className="home-intro">
          안녕하세요, 콘텐츠를 디자인하는 이엄지입니다.<br />
          다양한 분야의 디자인 작업물을 소개합니다.
        </p>
      </div>

      {/* Carousel — full bleed */}
      <section className="home-carousel">
        <InfiniteCarousel items={carouselItems} />
      </section>
    </div>
  );
}
