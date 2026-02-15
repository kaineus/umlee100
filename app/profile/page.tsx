'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { careers, education, certifications, contacts, skills } from '../data/profile';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="profile-section-header"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="profile-section-header__title">{children}</div>
      <div className="profile-section-header__line" />
    </motion.div>
  );
}

export default function Profile() {
  return (
    <main className="profile-page">
      {/* 프로필 헤더 */}
      <motion.section
        className="profile-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="profile-header__photo">
          <Image
            src="/images/profile.jpg"
            alt="이엄지"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="profile-header__info">
          <h1 className="profile-header__name">이엄지</h1>
          <p className="profile-header__desc">
            콘텐츠를 디자인해,<br />
            브랜드의 가치와 이야기를 가장 매력적인 화면으로 완성하는 디자이너
          </p>
          <div className="profile-header__contacts">
            {contacts.map((c) => (
              <a key={c.label} href={c.href} className="profile-header__contact">
                <span className="profile-header__contact-label">{c.label}</span>
                <span className="profile-header__contact-value">{c.value}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 기술 스택 */}
      <section className="profile-section">
        <SectionHeader>
          <h2 className="profile-section__title-text">기술스택</h2>
        </SectionHeader>
        <motion.div
          className="profile-skills"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {skills.map((skill) => (
            <div key={skill.alt} className="profile-skills__item">
              <Image
                src={skill.src}
                alt={skill.alt}
                width={307}
                height={154}
                className="profile-skills__img"
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* 경력 섹션 */}
      <section className="profile-section">
        <SectionHeader>
          <img src="/images/profile/career-title.svg" alt="경 력" />
        </SectionHeader>
        <div className="profile-section__list">
          {careers.map((item, i) => (
            <motion.div
              key={i}
              className="profile-item"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <span className="profile-item__period">{item.period}</span>
              <div className="profile-item__content">
                <span className="profile-item__company">{item.company}</span>
                <span className="profile-item__role">{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 학력 섹션 */}
      <section className="profile-section">
        <SectionHeader>
          <img src="/images/profile/education-title.svg" alt="학 력" />
        </SectionHeader>
        <div className="profile-section__list">
          {education.map((item, i) => (
            <motion.div
              key={i}
              className="profile-item"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <span className="profile-item__period">{item.period}</span>
              <div className="profile-item__content">
                <span className="profile-item__company">{item.school}</span>
                {item.major && <span className="profile-item__role">{item.major}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 자격증 섹션 */}
      <section className="profile-section">
        <SectionHeader>
          <img src="/images/profile/certification-title.svg" alt="자격증" />
        </SectionHeader>
        <div className="profile-section__list">
          {certifications.map((item, i) => (
            <motion.div
              key={i}
              className="profile-item"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <span className="profile-item__period">{item.period}</span>
              <div className="profile-item__content">
                <span className="profile-item__company">{item.name}</span>
                <span className="profile-item__role">{item.org}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
