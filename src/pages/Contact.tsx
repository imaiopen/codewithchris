import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, CheckCircle, Mail, MapPin, Phone, Calendar } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import { Button } from '@/components/ui/button';
import { z } from 'zod';

const CALENDLY_URL = 'https://calendly.com/your-username/30min';

const Contact = () => {
  const { t } = useLanguage();
  const { openCalendly } = useCalendly();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    message: '',
  });

  const contactSchema = z.object({
    name: z.string().min(1, t('Name is required', '请填写姓名')).max(100),
    email: z.string().email(t('Invalid email', '邮箱格式不正确')),
    phone: z.string().min(1, t('Phone/WeChat is required', '请填写电话/微信')).max(50),
    childAge: z.string().min(1, t("Please select student's age", '请选择孩子年龄')),
    message: z.string().max(1000),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setErrors({});
      setIsSubmitted(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

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
                {t('Get in ', '联系')}
                <span className="text-gradient">{t('Touch', '我们')}</span>
              </h1>
              <p className="text-body-lg max-w-2xl mx-auto">
                {t(
                  'Have questions? Ready to start the student\'s AI journey? Reach out and we\'ll get back to you within 24 hours.',
                  '有问题？准备开始孩子的AI之旅？联系我们，我们会在24小时内回复。'
                )}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {isSubmitted ? (
                  <div className="bg-card rounded-2xl p-8 shadow-card text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="heading-md mb-4">{t('Thank You!', '谢谢您！')}</h2>
                    <p className="text-body">
                      {t(
                        "We've received your message and will get back to you within 24 hours.",
                        '我们已收到您的留言，将在24小时内回复您。'
                      )}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card">
                    <h2 className="text-xl font-bold text-foreground mb-6">
                      {t('Send Us a Message', '给我们留言')}
                    </h2>
                    <div className="space-y-5">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t('Your Name', '您的姓名')} *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                          placeholder={t('Enter your name', '请输入您的姓名')}
                        />
                        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t('Email Address', '电子邮箱')} *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                          placeholder={t('Enter your email', '请输入您的邮箱')}
                        />
                        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t('Phone / WeChat', '电话 / 微信')} *
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                          placeholder={t('Enter phone or WeChat ID', '请输入电话或微信号')}
                        />
                        {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                      </div>

                      {/* Student's Age */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t("Student's Age", '学生年龄')} *
                        </label>
                        <select
                          name="childAge"
                          value={formData.childAge}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.childAge ? 'border-destructive' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                        >
                          <option value="">{t('Select age', '请选择年龄')}</option>
                          <option value="12-13">12-13</option>
                          <option value="14-15">14-15</option>
                          <option value="16-17">16-17</option>
                          <option value="18+">18+</option>
                        </select>
                        {errors.childAge && <p className="text-destructive text-sm mt-1">{errors.childAge}</p>}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t('Message', '留言')}
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                          placeholder={t('Tell us about the student and what you hope they will learn...', '告诉我们您孩子的情况以及您希望他们学到什么...')}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-6">
                        <Send className="w-5 h-5 mr-2" />
                        {t('Submit Inquiry', '提交咨询')}
                      </Button>
                    </div>
                  </form>
                )}
              </motion.div>

              {/* Contact Info & Calendly */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                {/* Book Directly */}
                <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                  <Calendar className="w-10 h-10 mb-4" />
                  <h2 className="text-xl font-bold mb-3">
                    {t('Book a Free Consultation', '预约免费咨询')}
                  </h2>
                  <p className="text-white/90 mb-6">
                    {t(
                      'Schedule a 30-minute call directly. We\'ll discuss the student\'s goals and which course is right for them.',
                      '直接安排30分钟通话。我们将讨论您孩子的目标以及哪门课程适合他们。'
                    )}
                  </p>
                  <Button
                    onClick={openCalendly}
                    className="bg-white text-primary hover:bg-white/90 font-semibold"
                  >
                    {t('Open Booking Calendar', '打开预约日历')}
                  </Button>
                </div>

                {/* Contact Methods */}
                <div className="bg-card rounded-2xl p-8 shadow-card">
                  <h3 className="font-bold text-lg text-foreground mb-6">
                    {t('Other Ways to Reach Us', '其他联系方式')}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground-secondary">{t('Email', '邮箱')}</p>
                        <a href="mailto:chrisstuu90@gmail.com" className="font-medium text-foreground hover:text-primary transition-colors">
                          chrisstuu90@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground-secondary">{t('WeChat', '微信')}</p>
                        <p className="font-medium text-foreground">chrizo_</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground-secondary">{t('Location', '地点')}</p>
                        <p className="font-medium text-foreground">Shanghai, China</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WeChat QR */}
                <div className="bg-card rounded-2xl p-8 shadow-card text-center">
                  <h3 className="font-bold text-lg text-foreground mb-4">
                    {t('Scan to Add on WeChat', '扫码添加微信')}
                  </h3>
                  <div className="w-44 h-44 mx-auto bg-white rounded-xl p-2 overflow-hidden shadow-sm">
                    <img
                      src={`${import.meta.env.BASE_URL}wechat.jpg`}
                      alt={t('WeChat QR Code - Scan to add Chris AI Lab', '微信二维码 - 扫码添加Chris AI实验室')}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-foreground-secondary mt-3">
                    {t('WeChat ID: ChrisAI_Shanghai', '微信号：ChrisAI_Shanghai')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
