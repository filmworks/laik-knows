import { ButtonDataTypes } from '@/components/ui/Button/Button.types';
import { ImgDataTypes } from '@/components/ui/image';

export type HeroHeaderAndImageTypes = {
  index: number;
  heading: string;
  paragraph: string;
  fullPrice: number;
  discountPrice: number;
  smallestPriceMonth: number;
  img: ImgDataTypes;
  cta: ButtonDataTypes;
};
