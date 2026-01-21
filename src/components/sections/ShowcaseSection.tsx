import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';

const ShowcaseSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: t('Portfolio Website', '作品集网站'),
      description: t('Beautiful responsive portfolio built with React', '使用React构建的精美响应式作品集'),
      tag: t('Website', '网站'),
      tagColor: 'bg-blue-100 text-blue-700',
      bgGradient: 'from-blue-50 to-indigo-100',
    },
    {
      title: t('AI Chatbot Interface', 'AI聊天机器人界面'),
      description: t('Custom chatbot with natural language processing', '自然语言处理的自定义聊天机器人'),
      tag: t('App', '应用'),
      tagColor: 'bg-green-100 text-green-700',
      bgGradient: 'from-green-50 to-emerald-100',
    },
    {
      title: t('Research Paper', '研究论文'),
      description: t('Published paper on AI safety evaluation', 'AI安全评估的发表论文'),
      tag: t('Research', '研究'),
      tagColor: 'bg-purple-100 text-purple-700',
      bgGradient: 'from-purple-50 to-violet-100',
    },
    {
      title: t('Image Generation Tool', '图像生成工具'),
      description: t('Web app for AI-powered image creation', 'AI驱动图像创作的Web应用'),
      tag: t('AI Tool', 'AI工具'),
      tagColor: 'bg-orange-100 text-orange-700',
      bgGradient: 'from-orange-50 to-amber-100',
    },
    {
      title: t('Study Dashboard', '学习仪表板'),
      description: t('Personalized study tracker with analytics', '带分析的个性化学习追踪器'),
      tag: t('Web App', 'Web应用'),
      tagColor: 'bg-cyan-100 text-cyan-700',
      bgGradient: 'from-cyan-50 to-sky-100',
    },
    {
      title: t('Music Generator', '音乐生成器'),
      description: t('AI-powered music creation tool', 'AI驱动的音乐创作工具'),
      tag: t('Creative', '创意'),
      tagColor: 'bg-pink-100 text-pink-700',
      bgGradient: 'from-pink-50 to-rose-100',
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
            {t('Real Projects, ', '真实项目，')}
            <span className="text-gradient">{t('Real Results', '真实成果')}</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {t('What students will learn to build', '学生将学会构建的项目')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              {/* Image Placeholder */}
              <div className={`aspect-video bg-gradient-to-br ${project.bgGradient} flex items-center justify-center p-6`}>
                <div className="w-full h-full rounded-lg bg-card/60 backdrop-blur-sm shadow-inner flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-card shadow-sm flex items-center justify-center">
                      <span className="text-2xl">
                        {index === 0 && '🌐'}
                        {index === 1 && '💬'}
                        {index === 2 && '📄'}
                        {index === 3 && '🎨'}
                        {index === 4 && '📊'}
                        {index === 5 && '🎵'}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground-secondary">
                      {t('Project Preview', '项目预览')}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${project.tagColor}`}>
                  {project.tag}
                </span>
                <h3 className="font-bold text-lg text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-foreground-secondary">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-foreground-secondary text-sm italic mt-8"
        >
          {t(
            "Instructor's portfolio examples - students will build similar projects",
            '导师作品集示例 - 你的孩子将构建类似项目'
          )}
        </motion.p>
      </div>
    </section>
  );
};

export default ShowcaseSection;
