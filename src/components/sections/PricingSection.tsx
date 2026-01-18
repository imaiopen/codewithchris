import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Users, Calendar, Clock, MapPin, Monitor, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PricingSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`card-premium relative overflow-hidden border-l-4 ${
                option.accent === 'secondary' ? 'border-secondary' : 'border-primary'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`icon-container ${option.accent === 'secondary' ? 'bg-secondary/10' : 'bg-primary/10'}`}>
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

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  option.accent === 'secondary'
                    ? 'bg-secondary text-white hover:bg-secondary/90'
                    : 'btn-gradient'
                }`}
              >
                {option.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-background-secondary rounded-2xl p-8 max-w-3xl mx-auto"
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
      </div>
    </section>
  );
};

export default PricingSection;
