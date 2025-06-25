import { TranslationService } from '@/application/services/translationService';
import { ITranslationService } from '@/domain/interfaces/ITranslationService';
import React, { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';

const translationService = new TranslationService();

interface TranslationContextType {
  translationService: ITranslationService;
}

const TranslationContext = createContext<TranslationContextType>({
  translationService,
});

const useTranslationService = (): ITranslationService => {
  const context = useContext(TranslationContext);
  return context.translationService;
};

const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useTranslation();

  return (
    <TranslationContext.Provider value={{ translationService }}>
      {children}
    </TranslationContext.Provider>
  );
};

export { TranslationProvider, useTranslationService };
