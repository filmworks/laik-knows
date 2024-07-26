import { ImgDataTypes } from '@/components/ui/image';

export type ThreeColGridTypes = {
  index: number;
  heading: string;
  list: { img: ImgDataTypes; heading: string; paragraph: string }[];
};
