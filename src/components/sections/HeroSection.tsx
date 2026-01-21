import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-teaching.jpg';

const HeroSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center lg:text-left">
              <span className="text-gradient">
                {t('Learn and Experiment with AI', '学习并探索AI')}
              </span>
            </h1>

            {/* Benefits Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10"
            >
              <img
                src="/hero.jpg"
                alt={t(
                  'Course benefits: Master Practical AI, Build Real Products, Develop a Portfolio, Small Group Learning',
                  '课程优势：掌握实用AI、构建真实产品、打造作品集、小班教学'
                )}
                className="w-full max-w-lg rounded-xl"
              />
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4" role="group" aria-label={t('Primary actions', '主要操作')}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  variant="gradient"
                  size="xl"
                  onClick={() => scrollToSection('#contact')}
                  aria-label={t('Book a free 30 minute consultation - scroll to contact form', '预约30分钟免费咨询 - 滚动到联系表单')}
                >
                  {t('Book Free 30-Min Consultation', '预约30分钟免费咨询')}
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button
                  variant="outlineCoral"
                  size="xl"
                  onClick={() => scrollToSection('#courses')}
                  aria-label={t('Explore available courses - scroll to courses section', '探索可用课程 - 滚动到课程部分')}
                >
                  {t('Explore Courses ↓', '探索课程 ↓')}
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <img
                  src={heroImage}
                  alt={t(
                    'Chris AI Lab classroom: instructor guiding a student through hands-on AI coding exercises in Shanghai',
                    'Chris AI实验室课堂：讲师在上海指导学生进行AI编程实践练习'
                  )}
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/10" />
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t('Max Students', '最多学生')}</p>
                  <p className="text-sm text-foreground-secondary">{t('Per Class', '每班')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
