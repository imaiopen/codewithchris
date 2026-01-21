import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FlaskConical, GraduationCap, Code, Users, Target, Linkedin, Github } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import { Button } from '@/components/ui/button';

const About = () => {
  const { t } = useLanguage();
  const { openCalendly } = useCalendly();
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const sections = [
    {
      emoji: '🔬',
      title: t('Current Work', '目前工作'),
      items: [
        t('AI Safety Researcher (Shanghai)', 'AI安全研究员（上海）'),
      ],
    },
    {
      emoji: '🎓',
      title: t('Education', '教育背景'),
      items: [
        t('M.S. Software Engineering, Fudan University', '复旦大学软件工程硕士'),
        t('B.S. Electronic Information Engineering, Tongji University', '同济大学电子信息工程学士'),
      ],
    },
    {
      emoji: '💻',
      title: t('Building & Research', '开发与研究'),
      items: [
        t('Built AI applications', '开发AI应用'),
        t('50+ projects across web development, AI tools, and mobile apps', '50+项目涵盖网站开发、AI工具和移动应用'),
      ],
    },
    {
      emoji: '👨‍🏫',
      title: t('Teaching Experience', '教学经验'),
      items: [
        t('7 years teaching experience', '7年教学经验'),
        t('Passionate about making complex AI concepts accessible', '热衷于让复杂的AI概念变得易于理解'),
        t('Specializes in project-based, hands-on learning', '专注于项目式、动手实践的学习'),
        t('Mentored students from international schools in Shanghai', '辅导上海国际学校学生'),
      ],
    },
    {
      emoji: '🎯',
      title: t('Teaching Philosophy', '教学理念'),
      items: [
        t('Learn by building', '在实践中学习'),
        t("Personalized to each student's goals and pace", '根据每位学生的目标和节奏个性化教学'),
        t('Real projects that matter for university applications', '为大学申请打造真实有价值的项目'),
        t('Ethical AI use from day one', '从第一天起注重AI伦理'),
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* About Chris Section */}
        <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
          <div className="container mx-auto px-6">
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              {/* Header */}
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6">
                  {t('About', '关于')}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  {t('About ', '关于')}
                  <span className="text-gradient">Chris</span>
                </h1>
              </div>

              {/* Content Cards */}
              <div className="space-y-6">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="bg-card rounded-xl p-6 shadow-card"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{section.emoji}</span>
                      <h2 className="font-bold text-xl text-foreground">{section.title}</h2>
                    </div>
                    <ul className="space-y-2 pl-10">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Social Links & CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
              >
                <Button
                  onClick={openCalendly}
                  className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-3"
                >
                  {t('Book Free Consultation', '预约免费咨询')}
                </Button>
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow"
                  >
                    <Github className="w-5 h-5 text-foreground" />
                    <span className="font-medium text-foreground">GitHub</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
