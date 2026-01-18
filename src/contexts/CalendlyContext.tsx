import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CalendlyContextType {
  isOpen: boolean;
  openCalendly: () => void;
  closeCalendly: () => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export const CalendlyProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendly = () => setIsOpen(true);
  const closeCalendly = () => setIsOpen(false);

  return (
    <CalendlyContext.Provider value={{ isOpen, openCalendly, closeCalendly }}>
      {children}
    </CalendlyContext.Provider>
  );
};

export const useCalendly = () => {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error('useCalendly must be used within a CalendlyProvider');
  }
  return context;
};
