import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, BookOpen, Rocket, Wrench, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProcessSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      icon: Phone,
      number: '1',
      title: t('Free Consultation', '免费咨询'),
      description: t(
        "We discuss the student's interests, goals, and which course fits best. 30 minutes, no obligation.",
        '我们讨论孩子的兴趣、目标以及最适合的课程。30分钟，无任何义务。'
      ),
      showCta: true,
    },
    {
      icon: BookOpen,
      number: '2',
      title: t('Course Selection', '课程选择'),
      description: t(
        'Choose between 1-on-1 or small group, pick your preferred schedule and start date.',
        '选择一对一或小组课，选择你偏好的时间表和开始日期。'
      ),
    },
    {
      icon: Rocket,
      number: '3',
      title: t('Learning Begins', '开始学习'),
      description: t(
        'Twice-weekly 2-hour sessions for 10 weeks. Progress tracking and regular updates to parents.',
        '10周内每周两次2小时课程。进度跟踪并定期向家长汇报。'
      ),
    },
    {
      icon: Wrench,
      number: '4',
      title: t('Build Real Projects', '构建真实项目'),
      description: t(
        'Guided creation of portfolio pieces they can use for university applications or showcase.',
        '指导创建可用于大学申请或展示的作品集项目。'
      ),
    },
    {
      icon: Award,
      number: '5',
      title: t('Final Showcase', '最终展示'),
      description: t(
        'Present completed work to guardians.',
        '向家长展示完成的作品。'
      ),
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            {t("The Student's Journey to ", '学生通往')}
            <span className="text-gradient">{t('AI Mastery', 'AI精通的旅程')}</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative text-center"
              >
                {/* Number Circle */}
                <div className="timeline-dot mx-auto mb-6 relative z-10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="icon-container mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-foreground-secondary leading-relaxed mb-4">
                  {step.description}
                </p>

                {step.showCta && (
                  <button
                    onClick={scrollToContact}
                    className="btn-gradient text-sm px-6 py-2"
                  >
                    {t('Book Now', '立即预约')}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
