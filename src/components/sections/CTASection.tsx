import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 mb-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-gradient-primary rounded-3xl py-16 px-8 md:px-12 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/20 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/20 translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('Give Your Student the ', '给学生')}
            <span className="underline decoration-white/30 underline-offset-4">
              {t('AI Advantage', 'AI优势')}
            </span>
          </h2>

          <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed max-w-3xl mx-auto">
            {t(
              'While other students are still learning about AI in theory, your student will be building real projects, developing practical skills, and creating a portfolio that sets them apart for university admissions and future careers.',
              '当其他学生还在理论上学习AI时，你的孩子将构建真实项目、发展实用技能，并创建一个让他们在大学申请和未来职业中脱颖而出的作品集。'
            )}
          </p>

          <p className="text-white font-semibold text-lg mb-10">
            {t(
              'Limited spots available for personalized 1-on-1 mentorship.',
              '个性化一对一辅导名额有限。'
            )}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={scrollToContact}
              className="bg-white text-[#F89344] font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              {t('Book Free Consultation', '预约免费咨询')}
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-lg bg-transparent hover:bg-white/10 transition-all"
            >
              {t('Download Course Brochure', '下载课程手册')}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
