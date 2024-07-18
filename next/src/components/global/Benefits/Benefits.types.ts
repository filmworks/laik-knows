import { ImgDataTypes } from '@/components/ui/image';

export type BenefitsTypes = {
  index: number;
  heading: string;
  paragraph: string;
  list: { img: ImgDataTypes; heading: string; paragraph: string }[];
};
