import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const testimonials = [
    {
      quote: t(
        "Chris's teaching approach is completely different from anything we've experienced. Our son went from knowing nothing about coding to building his own AI app in just 8 weeks. The portfolio he created was instrumental in his university application.",
        'Chris的教学方法与我们经历过的完全不同。我们的儿子从对编程一无所知到在8周内构建了自己的AI应用。他创建的作品集对他的大学申请起到了关键作用。'
      ),
      name: t('Jennifer L.', '李女士'),
      role: t('Parent of Year 12 Student at Wellington College', 'Wellington学院12年级学生家长'),
      rating: 5,
    },
    {
      quote: t(
        "The Future Researcher program exceeded our expectations. My daughter published her first research paper and now has a GitHub profile that impresses everyone. Worth every yuan.",
        '未来研究者课程超出了我们的期望。我女儿发表了她的第一篇研究论文，现在有一个让所有人印象深刻的GitHub资料。每一分钱都值得。'
      ),
      name: t('David W.', '王先生'),
      role: t('Parent of Year 13 Student at Dulwich College', 'Dulwich学院13年级学生家长'),
      rating: 5,
    },
    {
      quote: t(
        "My 13-year-old was hesitant at first, but Chris made AI fun and accessible. Now she's teaching me about machine learning! The small class size meant she got plenty of individual attention.",
        '我13岁的女儿一开始很犹豫，但Chris让AI变得有趣且易于理解。现在她在教我机器学习！小班制意味着她得到了充分的个人关注。'
      ),
      name: t('Sarah M.', '马女士'),
      role: t('Parent of Year 9 Student at YCIS', 'YCIS 9年级学生家长'),
      rating: 5,
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
            {t('What ', '')}
            <span className="text-gradient">{t('Parents & Students', '家长和学生')}</span>
            {t(' Say', '的评价')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-card relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground-secondary leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground-secondary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
