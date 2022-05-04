import { ObjectString } from 'interfaces';

const sizes: ObjectString = {
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
};

export const getClass = (size: string): string => {
  return sizes[size];
};

export const joinClasses = (...classes: string[]): string => {
  return classes.join(' ');
};
