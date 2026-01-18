import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HelpCircle, ChevronDown } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const { t } = useLanguage();
  const { openCalendly } = useCalendly();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t('Will the student be cheating using AI?', '孩子使用AI算作弊吗？'),
      answer: t(
        "Not at all! Learning to use AI effectively is like learning to use a calculator or the internet—it's a tool that enhances capabilities. We focus on understanding, creation, and ethical use. Students learn to think critically about AI, not just rely on it blindly.",
        '完全不会！学习有效使用AI就像学习使用计算器或互联网一样——它是增强能力的工具。我们注重理解、创造和道德使用。学生学会批判性地思考AI，而不是盲目依赖它。'
      ),
    },
    {
      question: t('Does the student need coding experience?', '孩子需要编程经验吗？'),
      answer: t(
        "No prior coding experience is required for most courses. AI Explorer and AI Superpowers start from the basics. For Future Researcher, some coding background is helpful but not mandatory—we'll cover what's needed during the course.",
        '大多数课程不需要编程经验。AI探索者和AI超能力从基础开始。对于未来研究者课程，有一些编程背景有帮助但不是必须的——我们会在课程中涵盖所需内容。'
      ),
    },
    {
      question: t("What if the student can't commit to the full course?", '如果孩子不能完成整个课程怎么办？'),
      answer: t(
        "We understand life happens. We offer flexible scheduling and can pause courses for up to 2 weeks if needed. For longer interruptions, we can discuss options including transferring to a later cohort or adjusting the schedule.",
        '我们理解生活中会有意外。我们提供灵活的时间安排，如有需要可以暂停课程最多2周。对于更长的中断，我们可以讨论选项，包括转到后续班次或调整时间表。'
      ),
    },
    {
      question: t('Is this better than online courses?', '这比在线课程好吗？'),
      answer: t(
        "Yes, significantly. Online courses are one-size-fits-all with no personalization, no accountability, and no real mentorship. Our program provides direct 1-on-1 or small group attention, real-time feedback, customized learning paths, and projects tailored to the student's interests.",
        '是的，明显更好。在线课程是千篇一律的，没有个性化、没有责任制、没有真正的导师制。我们的课程提供直接的一对一或小组关注、实时反馈、定制学习路径以及根据孩子兴趣量身定制的项目。'
      ),
    },
    {
      question: t('Which course should the student take?', '孩子应该选哪门课程？'),
      answer: t(
        "It depends on their age, experience, and goals. AI Explorer is perfect for younger students (12-15) new to AI. AI Superpowers suits students who want practical skills. AI Foundations is for those who want deeper understanding. Future Researcher is for university-bound students wanting research experience. Book a free consultation to discuss what's best!",
        '这取决于他们的年龄、经验和目标。AI探索者适合对AI新手的年轻学生（12-15岁）。AI超能力适合想要实用技能的学生。AI基础适合想要更深理解的学生。未来研究者适合想要研究经验的大学预备学生。预约免费咨询来讨论最佳选择！'
      ),
    },
    {
      question: t('Can I see a sample lesson?', '我能看一节样课吗？'),
      answer: t(
        "Yes! During your free 30-minute consultation, I can walk you through a sample lesson structure and show examples of student work. This gives you a clear picture of what to expect and how lessons are conducted.",
        '可以！在30分钟免费咨询期间，我可以带您了解样课结构并展示学生作品示例。这让您清楚了解可以期待什么以及课程如何进行。'
      ),
    },
    {
      question: t('What materials/software are needed?', '需要什么材料/软件？'),
      answer: t(
        "Students need a laptop with internet access. All software and tools we use are either free or provided as part of the course. I'll provide a detailed list before the course starts, and we'll set everything up together in the first session.",
        '学生需要一台有互联网接入的笔记本电脑。我们使用的所有软件和工具要么免费，要么作为课程的一部分提供。课程开始前我会提供详细清单，我们会在第一节课一起完成设置。'
      ),
    },
    {
      question: t('Are you certified to teach?', '你有教学资质吗？'),
      answer: t(
        "I'm not a certified schoolteacher, but I bring something different: active research experience in AI and real-world project building. I've mentored students, developed curricula, and my expertise comes from doing the work, not just studying it. My credentials include research and graduate studies at Fudan University.",
        '我不是认证的学校教师，但我带来不同的东西：AI领域的活跃研究经验和真实项目构建。我辅导过学生、开发过课程，我的专业知识来自实际工作，而不仅仅是学习。我的资历包括研究和复旦大学的研究生学习。'
      ),
    },
    {
      question: t('Do you offer refunds?', '你们提供退款吗？'),
      answer: t(
        "We offer a satisfaction guarantee for the first two lessons. If you're not completely satisfied after the first two sessions, we'll refund the remaining balance. After that, refunds are prorated based on lessons completed.",
        '我们为前两节课提供满意保证。如果前两节课后您不完全满意，我们将退还剩余余额。之后，退款按已完成的课程比例退还。'
      ),
    },
    {
      question: t('How do I know if this is right for the student?', '如何知道这是否适合我的孩子？'),
      answer: t(
        "Book a free 30-minute consultation! We'll discuss the student's interests, learning style, and goals. This conversation helps us both determine if there's a good fit—and there's absolutely no pressure or obligation.",
        '预约30分钟免费咨询！我们将讨论孩子的兴趣、学习方式和目标。这次对话帮助我们双方确定是否合适——绝对没有压力或义务。'
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-24 md:pt-32 pb-24">
          <div className="container mx-auto px-6">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="heading-xl mb-4">
                {t('Frequently Asked ', '常见')}
                <span className="text-gradient">{t('Questions', '问题')}</span>
              </h1>
              <p className="text-body-lg max-w-2xl mx-auto">
                {t(
                  'Everything parents want to know about our AI education program.',
                  '家长们想了解的关于我们AI教育项目的所有问题。'
                )}
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.05 + index * 0.03 }}
                  className="bg-white rounded-xl shadow-card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="font-semibold text-foreground">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-foreground-secondary transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-15">
                          <p className="text-foreground-secondary leading-relaxed ml-9">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-16"
            >
              <p className="text-lg text-foreground-secondary mb-6">
                {t("Still have questions? Let's talk!", '还有问题？我们聊聊！')}
              </p>
              <Button
                onClick={openCalendly}
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8"
              >
                {t('Book Free Consultation', '预约免费咨询')}
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
