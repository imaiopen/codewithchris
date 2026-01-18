import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, GraduationCap, Brain, Rocket, ArrowRight, Users, User, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';

const CoursesSection = () => {
  const { t } = useLanguage();
  const { openCalendly } = useCalendly();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Table scroll state for mobile UX
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollPosition = () => {
    const container = tableContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    }
  };

  useEffect(() => {
    const container = tableContainerRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  const scrollTable = (direction: 'left' | 'right') => {
    const container = tableContainerRef.current;
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const courses = [
    {
      icon: Zap,
      emoji: '💪',
      title: t('AI Superpowers', 'AI超能力'),
      ages: t('Ages 13-18', '13-18岁'),
      focus: t('Skill Builders', '技能构建者'),
      focusType: t('80% Hands-On Practice', '80% 动手实践'),
      description: t(
        'Learn to build websites, create content, code apps, and master AI tools that give you unfair advantages in school and life.',
        '学习构建网站、创作内容、编写应用，掌握在学校和生活中给你不公平优势的AI工具。'
      ),
      features: [
        t('Personal portfolio website (live online!)', '个人作品集网站（在线上线！）'),
        t('AI-powered apps', 'AI驱动的应用'),
        t('Music, images, videos with AI', '用AI创作音乐、图像、视频'),
        t('Study tools customized for them', '为他们定制的学习工具'),
      ],
      classFormat: t('1-on-1 & Group Classes', '一对一及小组课'),
      duration: t('50 hours over 10 weeks', '10周共50小时'),
      gradient: 'from-orange-500 to-amber-400',
      accentColor: 'bg-orange-500',
    },
    {
      icon: GraduationCap,
      emoji: '🎓',
      title: t('Future Researcher', '未来研究者'),
      ages: t('Ages 16-18', '16-18岁'),
      focus: t('University-Bound', '大学预备'),
      focusType: t('Research + Portfolio', '研究 + 作品集'),
      description: t(
        'Build a real research project that becomes the centerpiece of your university application. Perfect for students targeting top universities.',
        '构建一个真正的研究项目，成为大学申请的核心亮点。适合目标顶尖大学的学生。'
      ),
      features: [
        t('Published research paper (arXiv/blog)', '发表研究论文（arXiv/博客）'),
        t('GitHub repository with code', 'GitHub代码仓库'),
        t('Technical portfolio piece', '技术作品集项目'),
        t('Conference-style presentation', '会议风格演讲'),
      ],
      classFormat: t('1-on-1 Only', '仅限一对一'),
      duration: t('50 hours over 10 weeks', '10周共50小时'),
      privateOnly: true,
      gradient: 'from-violet-500 to-purple-400',
      accentColor: 'bg-violet-500',
    },
    {
      icon: Brain,
      emoji: '🧠',
      title: t('AI Foundations', 'AI基础'),
      ages: t('Ages 14-18', '14-18岁'),
      focus: t('Deep Thinkers', '深度思考者'),
      focusType: t('Theory & Understanding', '理论与理解'),
      description: t(
        "Understand how AI really works—from neural networks to safety and ethics. For students who want to truly understand before they build.",
        '理解AI真正的工作原理——从神经网络到安全和伦理。适合想在构建前真正理解的学生。'
      ),
      features: [
        t('How AI thinks and learns', 'AI如何思考和学习'),
        t('Safety, ethics, and responsibility', '安全、伦理和责任'),
        t('Cutting-edge AI research', '前沿AI研究'),
        t('Complete research paper', '完整研究论文'),
      ],
      classFormat: t('1-on-1 & Group Classes', '一对一及小组课'),
      duration: t('50 hours over 10 weeks', '10周共50小时'),
      gradient: 'from-cyan-500 to-blue-400',
      accentColor: 'bg-cyan-500',
    },
    {
      icon: Rocket,
      emoji: '🚀',
      title: t('AI Explorer', 'AI探索者'),
      ages: t('Ages 12-15', '12-15岁'),
      focus: t('Beginners', '初学者'),
      focusType: t('50/50 Hands-On & Theory', '50/50 实践与理论'),
      description: t(
        'Perfect first introduction to AI. Build confidence through fun, age-appropriate projects while learning fundamentals.',
        '完美的AI入门课程。通过有趣的、适合年龄的项目建立信心，同时学习基础知识。'
      ),
      features: [
        t('Their own chatbot', '自己的聊天机器人'),
        t('Personal website', '个人网站'),
        t('AI art and music', 'AI艺术和音乐'),
        t('Simple apps and games', '简单的应用和游戏'),
      ],
      classFormat: t('1-on-1 & Group Classes', '一对一及小组课'),
      duration: t('50 hours over 10 weeks', '10周共50小时'),
      gradient: 'from-emerald-500 to-teal-400',
      accentColor: 'bg-emerald-500',
    },
  ];

  return (
    <section id="courses" className="py-28 bg-gradient-to-b from-white via-background-secondary/50 to-background-secondary relative overflow-hidden">
      {/* Subtle decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            {t('Four Pathways to ', '通往')}
            <span className="text-gradient">{t('AI Mastery', 'AI精通的四条路径')}</span>
          </h2>
          <p className="text-xl text-foreground-secondary leading-relaxed max-w-3xl mx-auto">
            {t(
              "Choose based on the student's age, goals, and interests. Each pathway is designed to deliver real, tangible outcomes.",
              '根据孩子的年龄、目标和兴趣选择。每条路径都旨在提供真实、切实的成果。'
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.1, ease: 'easeOut' }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Gradient top border */}
              <div className={`h-1.5 bg-gradient-to-r ${course.gradient}`} />
              
              {/* Decorative corner element */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Sparkles className="w-16 h-16 text-primary" />
              </div>

              <div className="p-8 lg:p-10 flex flex-col flex-grow">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center text-white shadow-lg`}>
                    <span className="text-3xl">{course.emoji}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-[1.75rem] font-bold text-foreground leading-tight mb-1">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-2 text-foreground-secondary">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">{course.ages}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className={`px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${course.gradient} shadow-sm`}>
                    {course.focus}
                  </span>
                  <span className="px-4 py-1.5 bg-background-secondary text-foreground-secondary rounded-full text-sm font-medium border border-border">
                    {course.focusType}
                  </span>
                </div>

                {/* Description */}
                <p className="text-foreground-secondary leading-relaxed mb-6 text-[15px]">
                  {course.description}
                </p>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <p className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                    {t("What They'll Build:", '他们将创建：')}
                  </p>
                  <ul className="space-y-2.5">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground-secondary">
                        <span className={`w-2 h-2 rounded-full ${course.accentColor} flex-shrink-0 mt-1.5`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Format & Duration Section */}
                <div className="bg-background-secondary/70 rounded-xl p-5 mb-6 border border-border/50">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-foreground-secondary mb-2 uppercase tracking-wider font-medium flex items-center gap-1.5">
                        📚 {t('Format', '形式')}
                      </p>
                      <p className="font-bold text-foreground text-lg">{course.classFormat}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-foreground-secondary mb-2 uppercase tracking-wider font-medium flex items-center gap-1.5 justify-end">
                        ⏱️ {t('Duration', '时长')}
                      </p>
                      <p className="text-sm font-medium text-foreground">{course.duration}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={openCalendly}
                  aria-haspopup="dialog"
                  aria-label={`${course.title} - ${t('Learn More & Book Consultation', '了解更多并预约咨询')}`}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-white text-lg bg-gradient-to-r ${course.gradient} hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn`}
                >
                  {t('Learn More & Book Consultation', '了解更多并预约咨询')}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-card rounded-2xl shadow-card overflow-hidden"
        >
          <div className="p-6 lg:p-8 border-b border-border">
            <h3 className="text-2xl font-bold text-foreground text-center">
              {t('Quick Comparison', '快速对比')}
            </h3>
          </div>

          {/* Table container with scroll indicators */}
          <div className="relative">
            {/* Left scroll indicator */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none transition-opacity duration-300 md:hidden ${
                canScrollLeft ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {/* Left scroll button */}
            <button
              onClick={() => scrollTable('left')}
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-card shadow-lg flex items-center justify-center transition-all duration-300 md:hidden ${
                canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              aria-label={t('Scroll table left', '向左滚动表格')}
            >
              <ChevronLeft className="w-5 h-5 text-foreground-secondary" />
            </button>

            {/* Right scroll indicator */}
            <div
              className={`absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none transition-opacity duration-300 md:hidden ${
                canScrollRight ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {/* Right scroll button */}
            <button
              onClick={() => scrollTable('right')}
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-card shadow-lg flex items-center justify-center transition-all duration-300 md:hidden ${
                canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              aria-label={t('Scroll table right', '向右滚动表格')}
            >
              <ChevronRight className="w-5 h-5 text-foreground-secondary" />
            </button>

            {/* Mobile scroll hint */}
            <div className={`md:hidden text-center py-2 text-xs text-foreground-secondary transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`}>
              {t('Swipe to see more →', '滑动查看更多 →')}
            </div>

            <div
              ref={tableContainerRef}
              className="overflow-x-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
            >
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-background-secondary">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground sticky left-0 bg-background-secondary z-10">{t('Program', '课程')}</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">{t('Age Range', '年龄范围')}</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">{t('Best For', '最适合')}</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">{t('Practice vs Theory', '实践与理论')}</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">{t('Format', '形式')}</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr key={index} className={index % 2 === 1 ? 'bg-background-secondary/50' : 'bg-card'}>
                      <td className={`px-6 py-4 sticky left-0 z-10 ${index % 2 === 1 ? 'bg-background-secondary/50' : 'bg-card'}`}>
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{course.emoji}</span>
                          <span className="font-semibold text-foreground whitespace-nowrap">{course.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground-secondary whitespace-nowrap">{course.ages}</td>
                      <td className="px-6 py-4 text-sm text-foreground-secondary whitespace-nowrap">{course.focus}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-border rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${course.gradient}`}
                              style={{
                                width: course.focusType.includes('80%') ? '80%' :
                                       course.focusType.includes('50/50') ? '50%' :
                                       course.focusType.includes('Research') ? '60%' : '30%'
                              }}
                            />
                          </div>
                          <span className="text-xs text-foreground-secondary whitespace-nowrap">{course.focusType}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground-secondary whitespace-nowrap">
                        {course.privateOnly ? (
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" /> {t('1-on-1 only', '仅限一对一')}
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" /> {t('1-on-1 & Group', '一对一和小组')}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
