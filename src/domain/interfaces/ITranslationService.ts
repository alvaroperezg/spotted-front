import type { TOptions } from 'i18next';

export interface ITranslationService {
  translate(key: string, options?: TOptions): string;
  changeLanguage(language: string): Promise<void>;
  getCurrentLanguage(): string;
}
