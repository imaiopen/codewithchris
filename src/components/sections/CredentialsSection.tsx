import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FlaskConical, Code, GraduationCap, Linkedin, Github, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CredentialsSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const credentials = [
    {
      icon: FlaskConical,
      title: t('Research Experience', '研究经验'),
      items: [
        t('AI Safety Researcher at LibrAI (Shanghai)', 'LibrAI AI安全研究员（上海）'),
        t("Master's Student, Fudan Vision and Learning Lab", '复旦视觉与学习实验室硕士研究生'),
        t('Thesis: AutoSafe framework for AI safety evaluation', '论文：AI安全评估的AutoSafe框架'),
        t('Published work on adversarial robustness in multimodal LLMs', '发表多模态LLM对抗鲁棒性研究'),
      ],
    },
    {
      icon: Code,
      title: t('Real-World Building', '实战经验'),
      items: [
        t('Built FluentAI: Voice-first language learning app', '构建FluentAI：语音优先的语言学习应用'),
        t('Created Spreken: Multi-language learning platform', '创建Spreken：多语言学习平台'),
        t('Founded Ndawo AI: AI solutions for African markets', '创立Ndawo AI：非洲市场AI解决方案'),
        t('50+ projects across web dev, AI, mobile apps', '50+项目涵盖网站开发、AI、移动应用'),
      ],
    },
    {
      icon: GraduationCap,
      title: t('Education & Teaching', '教育与教学'),
      items: [
        t('M.S. Software Engineering, Fudan University (2024-2026)', '复旦大学软件工程硕士（2024-2026）'),
        t('B.S. Electronic Information Engineering, Tongji University', '同济大学电子信息工程学士'),
        t('Fluent in English, Chinese, and technical communication', '流利的英语、中文及技术沟通'),
        t('Experience mentoring students and building curricula', '学生辅导和课程开发经验'),
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Globe, label: 'Portfolio', href: '#' },
  ];

  return (
    <section id="credentials" className="py-24 section-accent">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">
            {t('Learn from Active ', '向活跃的')}
            <span className="text-gradient">{t('AI Researcher & Builder', 'AI研究者与构建者学习')}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-container-lg">
                  <credential.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-foreground">{credential.title}</h3>
              </div>

              <ul className="space-y-3">
                {credential.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground-secondary text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center gap-2 px-6 py-3 bg-card rounded-xl shadow-sm hover:shadow-md transition-all text-foreground-secondary hover:text-primary"
            >
              <link.icon className="w-5 h-5" />
              <span className="font-medium">{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CredentialsSection;
