import { ButtonDataTypes } from '@/components/ui/Button/Button.types';
import { ImgDataTypes } from '@/components/ui/image';

export type HeroTypes = {
  index: number;
  heading: string;
  paragraph: string;
  fullPrice: number;
  discountPrice: number;
  smallestPriceMonth: number;
  img?: ImgDataTypes;
  cta: ButtonDataTypes;
  ctaText: string;
};
