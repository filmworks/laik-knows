import { ContactFormTypes } from '@/global/types';

export type FaqTypes = {
  index: number;
  heading: string;
  paragraph: string;
  list: { question: string; answer: string }[];
  contactForm: ContactFormTypes;
  email: string;
};

export type AccordionTypes = {
  list: { question: JSX.Element; answer: JSX.Element }[];
};
