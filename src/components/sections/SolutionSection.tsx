import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, FlaskConical, GraduationCap, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SolutionSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const differentiators = [
    {
      icon: Target,
      title: t('Real-World Projects', '真实项目'),
      description: t(
        'Not toy examples. Students build actual websites, apps, and tools they can show off.',
        '不是玩具示例。学生构建可以展示的真实网站、应用和工具。'
      ),
    },
    {
      icon: FlaskConical,
      title: t('Taught by Active Researcher', '活跃研究者授课'),
      description: t(
        'Learn from someone doing cutting-edge AI safety research at LibrAI, not just a tutor reading from a script.',
        '向LibrAI从事前沿AI安全研究的专家学习，而非照本宣科的家教。'
      ),
    },
    {
      icon: GraduationCap,
      title: t('University-Ready Portfolios', '大学申请级作品集'),
      description: t(
        'Every course ends with projects perfect for university applications or internship interviews.',
        '每门课程都以适合大学申请或实习面试的项目结束。'
      ),
    },
    {
      icon: Lightbulb,
      title: t('Personalized Learning', '个性化学习'),
      description: t(
        '1-on-1 or maximum 4 students. No lecture halls. Direct mentorship tailored to the student\'s goals.',
        '一对一或最多4名学生。没有大讲堂。根据孩子目标量身定制的直接指导。'
      ),
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/10 via-secondary/5 to-background-secondary">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">C</span>
                  </div>
                  <p className="text-foreground font-semibold text-xl">Chris</p>
                  <p className="text-foreground-secondary">
                    {t('AI Safety Researcher & Educator', 'AI安全研究员与教育者')}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg">
              <p className="font-medium text-foreground">
                Chris - {t('AI Safety Researcher & Educator', 'AI安全研究员与教育者')}
              </p>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="heading-lg mb-6">
              {t('Learn AI from Someone ', '向每天都在')}
              <span className="text-gradient">
                {t('Living It Every Day', '实践AI的人学习')}
              </span>
            </h2>

            <div className="space-y-4 mb-10 text-body">
              <p>
                {t(
                  "I'm Chris, an AI Safety Researcher at LibrAI and Master's student at Fudan University. I don't just teach AI—I research it, build with it, and understand where the field is going.",
                  '我是Chris，LibrAI的AI安全研究员，复旦大学硕士研究生。我不只是教AI——我研究它、用它构建、了解这个领域的未来走向。'
                )}
              </p>
              <p>
                {t(
                  "I've built AI applications used by thousands, published research on AI safety, and now I help Shanghai students ages 12-18 gain the practical skills that universities and employers actually want to see.",
                  '我构建了被数千人使用的AI应用，发表了AI安全研究，现在我帮助12-18岁的上海学生获得大学和雇主真正想看到的实用技能。'
                )}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="icon-container flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
