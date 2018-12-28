interface MappingItem {
  tenths: any;
  subHundreds: any;
  maxValue: number;
  negativeWord: string;
  decimalWord: string;
}

interface LanguageMapping {
  en?: MappingItem;
  np?: MappingItem;
}

export interface WordMapping {
  international: LanguageMapping;
  hinduArabic: LanguageMapping;
}
