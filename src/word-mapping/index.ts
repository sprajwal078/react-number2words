import { TENTH_MAPPING_EN, SUB_TWENTIES_MAPPING_EN, HINDU_ARABIC_TENTH_MAPPING_EN } from './english';
import { TENTH_MAPPING_NP, SUB_HUNDRED_NP } from './nepali';
import { WordMapping } from '../types';

export enum WordValues {
  hundred = 100,
  thousand = 1000,
  million = 1000000,
  billion = 1000000000,
  trillion = 1000000000000,

  // hindu arabic
  lakh = 100000,
  crore = 10000000,
  arab = 1000000000,
  kharab = 100000000000
}

export const WORD_MAPPING: WordMapping = {
  international: {
    en: {
      tenths: TENTH_MAPPING_EN,
      subHundreds: SUB_TWENTIES_MAPPING_EN,
      maxValue: 1000 * WordValues.trillion - 1,
      negativeWord: 'minus',
      decimalWord: 'point'
    }
  },
  hinduArabic: {
    en: {
      tenths: HINDU_ARABIC_TENTH_MAPPING_EN,
      subHundreds: SUB_TWENTIES_MAPPING_EN,
      maxValue: 100 * WordValues.kharab - 1,
      negativeWord: 'minus',
      decimalWord: 'point'
    },
    np: {
      tenths: TENTH_MAPPING_NP,
      subHundreds: SUB_HUNDRED_NP,
      maxValue: 100 * WordValues.kharab - 1,
      negativeWord: 'माइनस',
      decimalWord: 'दशमलब'
    }
  }
};
