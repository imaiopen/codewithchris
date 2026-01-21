import { Linkedin, Github, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logoImage from '@/assets/logo.png';
import wechatImage from '@/assets/wechat.jpg';

const Footer = () => {
  const { t } = useLanguage();

  const courseLinks = [
    { label: t('AI Superpowers', 'AI超能力'), href: '#courses' },
    { label: t('Future Researcher', '未来研究者'), href: '#courses' },
    { label: t('AI Foundations', 'AI基础'), href: '#courses' },
    { label: t('AI Explorer', 'AI探索者'), href: '#courses' },
  ];

  const quickLinks = [
    { label: t('About Me', '关于我'), href: '#about' },
    { label: t('FAQ', '常见问题'), href: '#faq' },
    { label: t('Contact', '联系我们'), href: '#contact' },
    { label: t('Privacy Policy', '隐私政策'), href: '#' },
    { label: t('Terms of Service', '服务条款'), href: '#' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImage} alt="CHRIS AI LAB" className="w-10 h-10" />
              <span className="font-bold text-xl tracking-wide">CHRIS <span className="text-secondary">AI LAB</span></span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t(
                'Empowering Shanghai students aged 12-18 with practical AI skills for university and beyond.',
                '为12-18岁的上海学生提供实用的AI技能，助力大学申请及未来发展。'
              )}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('Courses', '课程')}</h3>
            <ul className="space-y-3">
              {courseLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('Quick Links', '快速链接')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('Contact', '联系方式')}</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-white/70 text-sm">chrisstuu90@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-white/70 text-sm">{t('Shanghai, China', '中国上海')}</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-white/70 mb-2">{t('WeChat:', '微信：')}</p>
              <div className="w-28 h-28 bg-white rounded-lg p-1.5 overflow-hidden">
                <img
                  src={wechatImage}
                  alt={t('Scan to add on WeChat', '扫码添加微信')}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/50 text-sm">
            © 2025 CHRIS AI LAB | {t('AI Education & Mentorship', 'AI教育与辅导')} | {t('Based in Shanghai', '位于上海')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
