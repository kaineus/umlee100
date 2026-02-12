'use client';

import { FiMail, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';

const contacts = [
  { icon: FiMail, label: '이메일', value: 'umlee100@naver.com', href: 'mailto:umlee100@naver.com' },
  { icon: FiPhone, label: '전화', value: '010-4503-3742', href: 'tel:010-4503-3742' },
];

export default function Contact() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      <div className="section-container py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-4"
        >
          연락처
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg mb-12"
          style={{ color: '#999999' }}
        >
          함께 협업할 수 있는 기회를 기다리고 있습니다.
        </motion.p>

        <div className="space-y-6">
          {contacts.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 p-6 rounded-lg transition-all duration-300"
              style={{ backgroundColor: '#1a1a1a', border: '0.0625rem solid #222' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#fb3000')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#222')}
            >
              <item.icon size={24} style={{ color: '#fb3000' }} />
              <div>
                <p className="text-sm font-medium" style={{ color: '#666666' }}>{item.label}</p>
                <p className="text-lg text-white">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}
