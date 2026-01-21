import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Video, TrendingDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProblemSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const problems = [
    {
      icon: Clock,
      title: t('Schools Are Too Slow', '学校进度太慢'),
      description: t(
        'Traditional education moves slowly. By the time schools add AI to curriculum, it\'s outdated.',
        '传统教育进展缓慢。等学校将AI纳入课程时，知识已经过时了。'
      ),
    },
    {
      icon: Video,
      title: t('Online Courses Are Generic', '网课千篇一律'),
      description: t(
        'YouTube tutorials and online courses lack personalization and real mentorship.',
        'YouTube教程和网课缺乏个性化指导和真正的导师制。'
      ),
    },
    {
      icon: TrendingDown,
      title: t('Students Get Left Behind', '学生落后于人'),
      description: t(
        'While other kids are building portfolios, most are focused on homework.',
        '当其他孩子在构建作品集时，大多数孩子还在做作业。'
      ),
    },
  ];

  return (
    <section className="py-24 section-light">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">
            {t("AI Isn't the Future—", 'AI不是未来——')}
            <span className="text-gradient">{t("It's Already Here", '它已经到来')}</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {t('But most students are being left behind', '但大多数学生正在被落下')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="card-premium text-center"
            >
              <div className="icon-container mx-auto mb-6">
                <problem.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="heading-sm mb-4 flex items-center justify-center gap-2">
                <span className="text-destructive">✕</span>
                {problem.title}
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            {t(
              'Learn AI from experts in the field and build ',
              '跟随AI领域的专家学习并构建真正有价值的项目'
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
