import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const CoursesOverview = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const courses = [
    {
      emoji: '💪',
      title: 'AI Superpowers',
      titleZh: 'AI超能力',
      age: t('Ages 13-18', '13-18岁'),
      focus: t('80% Hands-On', '80%实践'),
      description: t(
        'Build websites, apps, and master AI tools that give you unfair advantages.',
        '构建网站、应用，掌握AI工具，获得超越他人的优势。'
      ),
    },
    {
      emoji: '🎓',
      title: 'Future Researcher',
      titleZh: '未来研究员',
      age: t('Ages 16-18', '16-18岁'),
      focus: t('Research Focus', '研究导向'),
      description: t(
        'Build a real research project for your university application.',
        '为大学申请构建真正的研究项目。'
      ),
    },
    {
      emoji: '🧠',
      title: 'AI Foundations',
      titleZh: 'AI基础',
      age: t('Ages 14-18', '14-18岁'),
      focus: t('Theory + Practice', '理论+实践'),
      description: t(
        'Understand how AI really works—from neural networks to ethics.',
        '理解AI如何运作——从神经网络到伦理。'
      ),
    },
    {
      emoji: '🚀',
      title: 'AI Explorer',
      titleZh: 'AI探索者',
      age: t('Ages 12-15', '12-15岁'),
      focus: t('50/50 Balance', '平衡发展'),
      description: t(
        'Perfect first introduction to AI with fun, age-appropriate projects.',
        '通过有趣且适龄的项目，完美开启AI之旅。'
      ),
    },
  ];

  return (
    <section className="py-24 bg-background-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">
            {t('Four Pathways to ', '四条通往')}
            <span className="text-gradient">{t('AI Mastery', 'AI精通之路')}</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {t(
              "Choose based on the student's age, goals, and interests",
              '根据孩子的年龄、目标和兴趣选择'
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-[4px] border border-border p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-4xl mb-4">{course.emoji}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {course.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                  {course.age}
                </span>
                <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded">
                  {course.focus}
                </span>
              </div>
              <p className="text-sm text-foreground-secondary mb-4">
                {course.description}
              </p>
              <Link to="/courses">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-border text-foreground-secondary hover:text-foreground hover:border-primary"
                >
                  {t('Learn More', '了解更多')}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesOverview;
