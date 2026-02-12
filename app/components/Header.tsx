'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const workSubItems = [
  { label: '소셜미디어 디자인', href: '/works/social-media' },
  { label: '제품디자인', href: '/works/product-design' },
  { label: '3D 작업', href: '/works/3d' },
  { label: '컨텐츠디자인', href: '/works/content-design' },
];

const navItems = [
  { label: '어바웃', href: '/about' },
  { label: '작업물', href: '/works', children: workSubItems },
  { label: '경력', href: '/career' },
  { label: '연락처', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isWorksActive = pathname.startsWith('/works');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Desktop Sidebar — visible >991px */}
      <aside className="sidebar">
        <div>
          <Link href="/" className="sidebar__logo" onClick={closeMenu}>
            이엄지
          </Link>
          <nav className="sidebar__nav" style={{ marginTop: '3rem' }}>
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  data-active={pathname.startsWith(item.href) ? 'true' : undefined}
                >
                  {item.label}
                </Link>
                {/* Sub-menu for 작업물 */}
                {item.children && isWorksActive && (
                  <div className="sidebar__subnav">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        data-active={pathname === sub.href ? 'true' : undefined}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="sidebar__footer">
          <a href="mailto:umlee100@naver.com">umlee100@naver.com</a>
          <span className="sidebar__copyright">
            &copy; {new Date().getFullYear()} 이엄지
          </span>
        </div>
      </aside>

      {/* Mobile Header — visible ≤991px */}
      <header className="mobile-header">
        <Link
          href="/"
          onClick={closeMenu}
          className="text-white font-semibold tracking-wide hover:opacity-80 transition-opacity"
          style={{ fontSize: '0.9375rem', textTransform: 'uppercase' as const, letterSpacing: '0.02em' }}
        >
          이엄지
        </Link>

        <button
          onClick={toggleMenu}
          className="relative w-8 h-8 flex flex-col items-center justify-center gap-[0.375rem] group z-50"
          aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          <span
            className="block w-5 h-[0.0625rem] bg-white transition-all duration-300 origin-center group-hover:bg-[var(--color-accent)]"
            style={{ transform: isOpen ? 'translateY(0.21875rem) rotate(45deg)' : 'none' }}
          />
          <span
            className="block w-5 h-[0.0625rem] bg-white transition-all duration-300 group-hover:bg-[var(--color-accent)]"
            style={{ opacity: isOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-[0.0625rem] bg-white transition-all duration-300 origin-center group-hover:bg-[var(--color-accent)]"
            style={{ transform: isOpen ? 'translateY(-0.21875rem) rotate(-45deg)' : 'none' }}
          />
        </button>
      </header>

      {/* Fullscreen Menu Overlay — mobile only */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex items-center justify-center"
          >
            <nav>
              <ul className="flex flex-col items-center gap-6">
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0, duration: 0.3 }}
                >
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className="font-light text-white hover:text-[var(--color-accent)] transition-colors duration-300"
                    style={{ fontSize: '2rem' }}
                  >
                    Home
                  </Link>
                </motion.li>
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: (index + 1) * 0.06, duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="font-light text-white hover:text-[var(--color-accent)] transition-colors duration-300"
                      style={{ fontSize: '2rem' }}
                    >
                      {item.label}
                    </Link>
                    {/* Mobile sub-items */}
                    {item.children && (
                      <div className="flex flex-col items-center gap-2 mt-2">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={closeMenu}
                            className="transition-colors duration-300"
                            style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.4)' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#fb3000')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
