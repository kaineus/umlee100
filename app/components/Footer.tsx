'use client';

export default function Footer() {
  return (
    <footer
      className="py-6"
      style={{
        backgroundColor: '#000000',
        borderTop: '0.0625rem solid #333333',
      }}
    >
      <div className="section-container">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-sm" style={{ color: '#666666' }}>
            &copy; {new Date().getFullYear()} 이엄지. All rights reserved.
          </p>
          {/* Mobile-only email link (sidebar has it on desktop) */}
          <a
            href="mailto:umlee100@naver.com"
            className="text-sm transition-colors duration-300"
            style={{ color: '#999999', display: 'block' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#999999')}
          >
            umlee100@naver.com
          </a>
        </div>
      </div>
    </footer>
  );
}
