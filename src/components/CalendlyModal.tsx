import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import { useCalendly } from '@/contexts/CalendlyContext';
import { useLanguage } from '@/contexts/LanguageContext';

const CALENDLY_URL = 'https://calendly.com/chrisimai/new-meeting';

const CalendlyModal = () => {
  const { isOpen, closeCalendly } = useCalendly();
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Reset loading state when modal opens
  const handleModalOpen = () => {
    setIsLoading(true);
  };

  return (
    <AnimatePresence onExitComplete={handleModalOpen}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeCalendly}
          role="dialog"
          aria-modal="true"
          aria-labelledby="calendly-modal-title"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-3xl h-[80vh] bg-card rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 id="calendly-modal-title" className="text-xl font-bold text-foreground">
                {t('Book Your Free Consultation', '预约免费咨询')}
              </h2>
              <button
                onClick={closeCalendly}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label={t('Close modal', '关闭窗口')}
              >
                <X className="w-5 h-5 text-foreground-secondary" />
              </button>
            </div>

            {/* Calendly Embed */}
            <div className="h-[calc(100%-60px)] relative">
              {/* Loading State */}
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-10">
                  <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                  <p className="text-foreground-secondary text-sm">
                    {t('Loading calendar...', '正在加载日历...')}
                  </p>
                </div>
              )}

              <iframe
                src={`${CALENDLY_URL}?embed_domain=localhost&embed_type=Inline`}
                width="100%"
                height="100%"
                frameBorder="0"
                title={t('Schedule a consultation', '预约咨询')}
                className="bg-white"
                onLoad={handleIframeLoad}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CalendlyModal;
