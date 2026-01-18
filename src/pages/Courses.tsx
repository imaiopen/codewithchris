import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, GraduationCap, Brain, Rocket, User, Users, Calendar, Clock, MapPin, Check, ArrowRight, X, Laptop, Globe, MessageSquare, Timer, Sparkles, BookOpen, Target, Video, Folder, Award, Heart, UserCheck } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import { Button } from '@/components/ui/button';

const Courses = () => {
  const { t } = useLanguage();
  const { openCalendly } = useCalendly();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const courses = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
  ];

  const pricingOptions = [
    {
      icon: User,
      title: t('1-on-1 Private Mentorship', '一对一私人辅导'),
      benefits: [
        t('Complete customization', '完全定制'),
        t('Flexible scheduling', '灵活安排时间'),
        t("Student's pace", '按孩子的节奏'),
        t('Undivided attention', '专注陪伴'),
      ],
      cta: t('Book Consultation', '预约咨询'),
      accent: 'secondary',
    },
    {
      icon: Users,
      title: t('Small Group (Max 4 Students)', '小组课（最多4名学生）'),
      benefits: [
        t('Learn with peers', '与同伴学习'),
        t('Scheduled cohorts', '固定班次'),
        t('Collaborative energy', '协作氛围'),
        t('Great value', '超值优惠'),
      ],
      cta: t('Join Waitlist', '加入候补名单'),
      accent: 'primary',
    },
  ];

  const scheduleDetails = [
    { icon: Calendar, text: t('2-hour lessons, twice per week', '每周两次，每次2小时') },
    { icon: Clock, text: t('25 total lessons over ~10 weeks', '约10周共25节课') },
    { icon: Calendar, text: t('Weekday evenings or weekends available', '工作日晚上或周末均可') },
    { icon: MapPin, text: t('Online or in-person (Shanghai)', '线上或线下（上海）') },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ErrorBoundary>
        {/* Hero */}
        <section className="pt-24 md:pt-32 pb-16">
          <div className="container mx-auto px-6">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="heading-xl mb-6">
                {t('Four Pathways to ', '通往')}
                <span className="text-gradient">{t('AI Mastery', 'AI精通的四条路径')}</span>
              </h1>
              <p className="text-body-lg max-w-2xl mx-auto">
                {t(
                  "Choose based on the student's age, goals, and interests. Each course is designed to deliver real, tangible results.",
                  '根据孩子的年龄、目标和兴趣选择。每门课程都旨在提供真实、切实的成果。'
                )}
              </p>
            </motion.div>

            {/* Course Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="bg-white rounded-[4px] border border-border p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{course.emoji}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{course.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                      {course.ages}
                    </span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">
                      {course.focus}
                    </span>
                    <span className="px-3 py-1 bg-muted text-foreground-secondary rounded text-xs">
                      {course.focusType}
                    </span>
                  </div>

                  <p className="text-foreground-secondary mb-6 text-sm leading-relaxed">
                    {course.description}
                  </p>

                  <div className="mb-6">
                    <p className="font-semibold text-foreground text-sm mb-3">
                      {t("What They'll Build:", '他们将创建：')}
                    </p>
                    <ul className="space-y-2">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4 mb-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-sm text-foreground-secondary mb-1">
                          {t('Format:', '形式：')}
                        </p>
                        <p className="font-semibold text-foreground">
                          {course.classFormat}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-foreground-secondary">{course.duration}</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={openCalendly}
                    variant="outline"
                    className="w-full border-border text-foreground-secondary hover:text-foreground hover:border-primary"
                  >
                    {t('Learn More', '了解更多')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        </ErrorBoundary>

        <ErrorBoundary>
        {/* Pricing Section */}
        <section className="py-24 bg-background-secondary">
          <div className="container mx-auto px-6">
            <motion.div
              ref={pricingRef}
              initial={{ opacity: 0, y: 20 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg mb-4">
                <span className="text-gradient">{t('Flexible', '灵活的')}</span>
                {t(' Learning Options', '学习选项')}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {pricingOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={`bg-white rounded-xl p-8 shadow-card border-l-4 ${
                    option.accent === 'secondary' ? 'border-secondary' : 'border-primary'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${option.accent === 'secondary' ? 'bg-secondary/10' : 'bg-primary/10'}`}>
                      <option.icon className={`w-6 h-6 ${option.accent === 'secondary' ? 'text-secondary' : 'text-primary'}`} />
                    </div>
                    <h3 className="font-bold text-xl text-foreground">{option.title}</h3>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {option.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className={`w-5 h-5 ${option.accent === 'secondary' ? 'text-secondary' : 'text-primary'}`} />
                        <span className="text-foreground-secondary">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={openCalendly}
                    variant={option.accent === 'secondary' ? 'secondary' : 'gradient'}
                    className="w-full"
                    aria-haspopup="dialog"
                  >
                    {option.cta}
                  </Button>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-card"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {scheduleDetails.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <detail.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground-secondary">{detail.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Student Requirements & Course Details Cards */}
            <div className="grid lg:grid-cols-2 gap-8 mt-16">
              {/* Student Requirements Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-card"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <UserCheck className="w-7 h-7 text-primary" />
                  {t('Student Requirements', '学生要求')}
                </h3>

                {/* Essential Requirements */}
                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                    {t('Essential Requirements', '基本要求')}
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">{t('Age: 12-18 years old', '年龄：12-18岁')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">{t('Interest: Genuine curiosity about AI and technology', '兴趣：对AI和技术有真正的好奇心')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">{t('Computer: Laptop with reliable internet connection', '电脑：具有可靠网络连接的笔记本电脑')}</p>
                        <ul className="text-sm text-foreground-secondary mt-1 space-y-1">
                          <li>{t('Windows, Mac, or Linux', 'Windows、Mac或Linux')}</li>
                          <li>{t('Minimum 8GB RAM recommended', '建议至少8GB内存')}</li>
                          <li>{t('No special GPU required', '无需特殊GPU')}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">{t('Language: Able to communicate and understand English', '语言：能够用英语交流和理解')}</p>
                        <ul className="text-sm text-foreground-secondary mt-1 space-y-1">
                          <li>{t('Course materials and instruction in English', '课程材料和教学使用英语')}</li>
                          <li>{t('Basic conversational fluency required', '需要基本的会话流利度')}</li>
                          <li>{t('Technical terms will be taught', '技术术语将会教授')}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">{t('Time Commitment: Available for 4 hours per week', '时间承诺：每周4小时')}</p>
                        <ul className="text-sm text-foreground-secondary mt-1 space-y-1">
                          <li>{t('Two 2-hour sessions weekly', '每周两次2小时课程')}</li>
                          <li>{t('Plus 1-2 hours homework/practice per week', '加上每周1-2小时作业/练习')}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">{t('Attitude: Willing to experiment, make mistakes, and learn by doing', '态度：愿意尝试、犯错并从实践中学习')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* NOT Required */}
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                    {t('NOT Required', '不需要')}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-foreground-secondary text-sm">{t('Prior coding experience (we teach from foundations)', '编程经验（我们从基础教起）')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-foreground-secondary text-sm">{t('Advanced math skills (concepts taught as needed)', '高级数学技能（根据需要教授概念）')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-foreground-secondary text-sm">{t('Expensive software (all tools are free or provided)', '昂贵的软件（所有工具都是免费或提供的）')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-foreground-secondary text-sm">{t("Perfect English (we adapt to student's level)", '完美的英语（我们会适应学生的水平）')}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Course Details Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-card"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <BookOpen className="w-7 h-7 text-secondary" />
                  {t('Course Details', '课程详情')}
                </h3>

                {/* Instruction */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                    {t('Instruction', '教学')}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">📚</span>
                      <div>
                        <p className="font-medium text-foreground">{t('Language: English', '语言：英语')}</p>
                        <ul className="text-sm text-foreground-secondary mt-1 space-y-1">
                          <li>{t('Clear, patient explanation of technical concepts', '清晰、耐心地解释技术概念')}</li>
                          <li>{t('Visual aids and demonstrations', '视觉辅助和演示')}</li>
                          <li>{t('Chinese support available for clarification when needed', '需要时可提供中文支持')}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-lg">🎓</span>
                      <div>
                        <p className="font-medium text-foreground">{t('Teaching Style', '教学风格')}</p>
                        <ul className="text-sm text-foreground-secondary mt-1 space-y-1">
                          <li>{t('Project-based learning (learn by building)', '项目式学习（边做边学）')}</li>
                          <li>{t('1-on-1 or small group (max 4 students)', '一对一或小组（最多4名学生）')}</li>
                          <li>{t("Personalized to each student's pace and interests", '根据每个学生的节奏和兴趣个性化')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schedule */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                    {t('Schedule', '时间安排')}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">{t('Duration: 10 weeks (50 total hours)', '时长：10周（共50小时）')}</p>
                        <p className="text-sm text-foreground-secondary">{t('25 lessons × 2 hours each, 2 sessions per week', '25节课 × 每节2小时，每周2次')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">{t('Timing Options', '时间选择')}</p>
                        <ul className="text-sm text-foreground-secondary mt-1 space-y-1">
                          <li>{t('Weekday evenings (after school)', '工作日晚上（放学后）')}</li>
                          <li>{t('Weekend mornings or afternoons', '周末上午或下午')}</li>
                          <li>{t('Flexible scheduling based on student availability', '根据学生时间灵活安排')}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">{t('Location', '地点')}</p>
                        <ul className="text-sm text-foreground-secondary mt-1 space-y-1">
                          <li>{t('Online via Zoom/video call', '通过Zoom/视频通话在线')}</li>
                          <li>{t('In-person options available (Shanghai)', '可选择线下（上海）')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What's Included */}
                <div className="bg-primary/5 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                    {t("What's Included", '课程包含')}
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      t('All course materials and resources', '所有课程材料和资源'),
                      t('Access to premium AI tools and APIs', '使用高级AI工具和API'),
                      t('Code templates and project starter files', '代码模板和项目启动文件'),
                      t('Regular progress reports for parents', '定期向家长汇报进度'),
                      t('Certificate of completion', '结业证书'),
                      t('Portfolio documentation and recommendations', '作品集文档和推荐信'),
                      t('Lifetime access to course materials', '终身访问课程材料'),
                      t('Post-course support and guidance', '课后支持和指导'),
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground-secondary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Ideal Student Profile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-12 bg-white rounded-2xl p-8 shadow-card max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-3">
                <Target className="w-7 h-7 text-secondary" />
                {t('Ideal Student Profile', '理想学生画像')}
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Perfect For */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide text-green-600">
                    {t('Perfect For', '非常适合')}
                  </h4>
                  <div className="space-y-3">
                    {[
                      t('Students curious about how AI actually works', '对AI实际工作原理感到好奇的学生'),
                      t('Kids who like building and creating things', '喜欢建造和创造东西的孩子'),
                      t('Those preparing for university CS/Engineering programs', '准备大学计算机/工程专业的学生'),
                      t('Students who want practical skills, not just theory', '想要实用技能而不仅仅是理论的学生'),
                      t('Anyone who wants to stand out in university applications', '任何想在大学申请中脱颖而出的人'),
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground-secondary text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Not Ideal For */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide text-red-500">
                    {t('Not Ideal For', '不太适合')}
                  </h4>
                  <div className="space-y-3">
                    {[
                      t('Students who just want easy homework help', '只想要简单作业帮助的学生'),
                      t('Those expecting to become AI experts in 10 weeks', '期望在10周内成为AI专家的人'),
                      t('Kids with no interest in technology', '对技术没有兴趣的孩子'),
                      t('Students unable to commit to the full schedule', '无法承诺完整时间安排的学生'),
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground-secondary text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        </ErrorBoundary>

        <ErrorBoundary>
        {/* CTA */}
        <section className="py-24 bg-gradient-primary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('Ready to Get Started?', '准备好开始了吗？')}
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {t(
                'Book a free 30-minute consultation to discuss which course is right for the student.',
                '预约30分钟免费咨询，讨论哪门课程适合您的孩子。'
              )}
            </p>
            <Button
              onClick={openCalendly}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
              aria-haspopup="dialog"
            >
              {t('Book Free Consultation', '预约免费咨询')}
            </Button>
          </div>
        </section>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
