import { CtaDataTypes } from '@/components/ui/Button/Button.types';
import { ImgDataTypes } from '@/components/ui/image';
import { CourseDataTypes } from '@/global/types';

export type HeroHeaderAndImageTypes = {
  index: number;
  heading: string;
  paragraph: string;
  img: ImgDataTypes;
  cta: CtaDataTypes;
  details: string;
  course: CourseDataTypes;
};
