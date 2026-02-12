'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const careers = [
  { period: '2020.06 - 2024.01', company: '(주)플럭시티', role: 'DX콘텐츠그룹 콘텐츠팀 대리' },
  { period: '2019.01 - 2020.05', company: '(주)플럭시티', role: '콘텐츠팀 프리랜서' },
  { period: '2017.09 - 2017.10', company: '(주)플럭시티', role: '콘텐츠팀 프리랜서' },
  { period: '2016.06 - 2016.08', company: '농업회사법인(주)푸르벨', role: '온라인 쇼핑몰 웹디자이너 프리랜서' },
  { period: '2014.09 - 2014.11', company: '(주)세스코', role: '3D모델링 프리랜서' },
  { period: '2013.05 - 2013.12', company: '서울시청 공간정보담당관', role: '공간정보과 프리랜서' },
];

const education = [
  { period: '2013.02', school: '서일대학교', major: '생활가구디자인과' },
  { period: '2011.02', school: '한양대학교사범대학부속고등학교', major: '' },
];

const certifications = [
  { period: '2013.02', name: '실기교사 디자인 교원자격증', org: '교육과학기술부' },
  { period: '2012.12', name: '가구설계제도사', org: '대한상공회의소' },
  { period: '2012.01', name: '목공지도사 3급', org: '(사)한국목공교육협회' },
];

export default function Career() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      <div className="section-container py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-12"
        >
          경력
        </motion.h1>

        {/* 경력 섹션 */}
        <Section title="경력 사항">
          <div className="space-y-6">
            {careers.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col md:flex-row md:items-start"
              >
                <div className="md:w-1/4 mb-2 md:mb-0">
                  <p className="font-medium" style={{ color: '#999999' }}>{item.period}</p>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.company}</h3>
                  <p style={{ color: '#999999' }}>{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* 학력 섹션 */}
        <Section title="학력">
          <div className="space-y-6">
            {education.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col md:flex-row md:items-start"
              >
                <div className="md:w-1/4 mb-2 md:mb-0">
                  <p className="font-medium" style={{ color: '#999999' }}>{item.period}</p>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.school}</h3>
                  {item.major && <p style={{ color: '#999999' }}>{item.major}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* 자격증 섹션 */}
        <Section title="자격증">
          <div className="space-y-6">
            {certifications.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col md:flex-row md:items-start"
              >
                <div className="md:w-1/4 mb-2 md:mb-0">
                  <p className="font-medium" style={{ color: '#999999' }}>{item.period}</p>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                  <p style={{ color: '#999999' }}>{item.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <h2
        className="text-2xl font-bold text-white mb-8 pb-2"
        style={{ borderBottom: '0.0625rem solid #333' }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
