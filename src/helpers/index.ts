import {
  GenericLanguageInterface,
} from '../types';

export const translate = (object: any, key: string) => {
  return object.find((item: GenericLanguageInterface) => {
    return item.language.name === 'en';
  })[key] || '';
};

export const getCaptureRate = (raw: number) => {
  return `${((((raw / 3) / 255) ** 0.75) * 100).toFixed(1)}%`;
};

export const getHatchSteps = (raw: number) => {
  return (raw + 1) * 256;
};