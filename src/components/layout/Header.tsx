import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { language, setLanguage, t } = useLanguage();
  const { openCalendly } = useCalendly();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const location = useLocation();

  // Cycle through theme options
  const cycleTheme = () => {
    const themeOrder: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
    const currentIndex = themeOrder.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };

  // Get theme icon and label
  const getThemeIcon = () => {
    if (theme === 'system') return <Monitor className="w-4 h-4" />;
    if (theme === 'dark') return <Moon className="w-4 h-4" />;
    return <Sun className="w-4 h-4" />;
  };

  const getThemeLabel = () => {
    if (theme === 'system') return t('System', '系统');
    if (theme === 'dark') return t('Dark', '深色');
    return t('Light', '浅色');
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state for header styling
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress percentage
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('Home', '首页'), href: '/' },
    { label: t('About', '关于'), href: '/about' },
    { label: t('Courses', '课程'), href: '/courses' },
    { label: t('FAQ', '常见问题'), href: '/faq' },
    { label: t('Contact', '联系我们'), href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'}`}>
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-0.5 bg-gradient-primary transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoImage} alt="CHRIS AI LAB" className="w-10 h-10" />
            <span className="font-bold text-lg text-foreground hidden sm:block tracking-wide">CHRIS <span className="text-secondary">AI LAB</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className={`text-sm font-medium transition-colors ${isActive(item.href) ? 'text-primary' : 'text-foreground-secondary hover:text-foreground'}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={cycleTheme}
              className="p-2 text-foreground-secondary hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              aria-label={t(`Theme: ${getThemeLabel()}. Click to change.`, `主题：${getThemeLabel()}。点击更改。`)}
              title={getThemeLabel()}
            >
              {getThemeIcon()}
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="px-3 py-1.5 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              aria-label={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>

            <Button variant="gradient" onClick={openCalendly}>
              {t('Book Free Consultation', '预约免费咨询')}
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-border bg-background" role="navigation" aria-label="Mobile navigation">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.href} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`px-4 py-3 rounded-lg text-sm font-medium ${isActive(item.href) ? 'bg-primary/10 text-primary' : 'text-foreground-secondary'}`}>
                  {item.label}
                </Link>
              ))}

              {/* Theme Toggle - Mobile */}
              <div className="px-4 pt-4 mt-2 border-t border-border flex items-center justify-between">
                <span className="text-sm text-foreground-secondary">{t('Theme', '主题')}</span>
                <button
                  onClick={cycleTheme}
                  className="px-4 py-2 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors rounded-lg hover:bg-muted border border-border flex items-center gap-2"
                  aria-label={t(`Theme: ${getThemeLabel()}. Click to change.`, `主题：${getThemeLabel()}。点击更改。`)}
                >
                  {getThemeIcon()}
                  <span>{getThemeLabel()}</span>
                </button>
              </div>

              {/* Language Toggle - Mobile */}
              <div className="px-4 pt-2 flex items-center justify-between">
                <span className="text-sm text-foreground-secondary">{t('Language', '语言')}</span>
                <button
                  onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                  className="px-4 py-2 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors rounded-lg hover:bg-muted border border-border"
                  aria-label={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
                >
                  {language === 'en' ? '中文' : 'English'}
                </button>
              </div>

              <div className="px-4 py-2 pt-4">
                <Button variant="gradient" className="w-full" onClick={() => { openCalendly(); setIsMobileMenuOpen(false); }}>
                  {t('Book Free Consultation', '预约免费咨询')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
