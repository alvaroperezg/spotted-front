import { ITranslationService } from '@/domain/interfaces/ITranslationService';
import i18n from '@/i18n';
import type { TOptions } from 'i18next';

class TranslationService implements ITranslationService {
  translate(key: string, options?: TOptions): string {
    return i18n.t(key, options);
  }

  async changeLanguage(language: string): Promise<void> {
    await i18n.changeLanguage(language);
  }

  getCurrentLanguage(): string {
    return i18n.language;
  }
}

export { TranslationService };
