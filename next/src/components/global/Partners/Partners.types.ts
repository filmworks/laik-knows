import { ImgDataTypes } from '@/components/ui/image';

export type PartnersTypes = {
  index: number;
  heading: string;
  paragraph: string;
  list: { img: ImgDataTypes; name: string; href: string }[];
};
