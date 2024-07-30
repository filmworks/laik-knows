import { ImgDataTypes } from '@/components/ui/image';

export type NotFoundTypes = {
  heading: string;
  paragraph: string;
  cta: { role: string; value: string; href: string };
  imgSm: ImgDataTypes;
  imgLg: ImgDataTypes;
};
