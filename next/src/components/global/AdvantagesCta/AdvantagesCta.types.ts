import { CtaDataTypes } from '@/components/ui/Button/Button.types';
import { ImgDataTypes } from '@/components/ui/image';
import { CourseDataTypes } from '@/global/types';

export type AdvantagesCtaTypes = {
  heading: string;
  paragraph: string;
  img: ImgDataTypes;
  cta: CtaDataTypes;
  course: CourseDataTypes;
  details: string;
};
