import { CourseDataTypes } from '@/global/types';
import { CtaDataTypes } from '@/components/ui/Button/Button.types';
import { ImgDataTypes } from '@/components/ui/image';

export type AdvantagesCtaTypes = {
  heading: string;
  paragraph: string;
  img: ImgDataTypes;
  cta: CtaDataTypes;
  course: CourseDataTypes;
  details: string;
};
