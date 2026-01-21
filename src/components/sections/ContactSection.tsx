import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { z } from 'zod';

const ContactSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    childAge: '',
    phone: '',
    contactMethod: 'wechat',
    message: '',
  });

  const contactSchema = z.object({
    name: z.string().min(1, t('Name is required', '请填写姓名')).max(100),
    email: z.string().email(t('Invalid email', '邮箱格式不正确')),
    childAge: z.string().min(1, t("Please select student's age", '请选择孩子年龄')),
    phone: z.string().min(1, t('Phone/WeChat is required', '请填写电话/微信')).max(50),
    contactMethod: z.string(),
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

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 section-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center"
          >
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
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 section-light">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">
            {t('Book Your ', '预约您的')}
            <span className="text-gradient">{t('Free Consultation', '免费咨询')}</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {t(
              "Fill out the form below and we'll contact you within 24 hours to schedule a free 30-minute consultation.",
              '填写下面的表格，我们将在24小时内联系您安排30分钟免费咨询。'
            )}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card">
            <div className="space-y-6">
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
                  className={`input-premium ${errors.name ? 'border-destructive' : ''}`}
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
                  className={`input-premium ${errors.email ? 'border-destructive' : ''}`}
                  placeholder={t('Enter your email', '请输入您的邮箱')}
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
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
                  className={`input-premium ${errors.childAge ? 'border-destructive' : ''}`}
                >
                  <option value="">{t('Select age', '请选择年龄')}</option>
                  <option value="12-13">12-13</option>
                  <option value="14-15">14-15</option>
                  <option value="16-17">16-17</option>
                  <option value="18+">18+</option>
                </select>
                {errors.childAge && <p className="text-destructive text-sm mt-1">{errors.childAge}</p>}
              </div>

              {/* Phone/WeChat */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('Phone / WeChat', '电话 / 微信')} *
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`input-premium ${errors.phone ? 'border-destructive' : ''}`}
                  placeholder={t('Enter phone or WeChat ID', '请输入电话或微信号')}
                />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('Preferred Contact Method', '首选联系方式')}
                </label>
                <div className="flex gap-4">
                  {['wechat', 'phone', 'email'].map((method) => (
                    <label key={method} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method}
                        checked={formData.contactMethod === method}
                        onChange={handleChange}
                        className="text-primary"
                      />
                      <span className="text-sm text-foreground-secondary capitalize">
                        {method === 'wechat' ? t('WeChat', '微信') : method === 'phone' ? t('Phone', '电话') : t('Email', '邮箱')}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('Questions or Comments', '问题或留言')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="input-premium resize-none"
                  placeholder={t('Tell us about the student and what you hope they will learn...', '告诉我们您孩子的情况以及您希望他们学到什么...')}
                />
              </div>

              <button type="submit" className="w-full btn-gradient flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                {t('Submit Inquiry', '提交咨询')}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
