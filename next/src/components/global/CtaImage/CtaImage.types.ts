import { CourseDataTypes } from '@/global/types';
import { CtaDataTypes } from '@/components/ui/Button/Button.types';
import { ImgDataTypes } from '@/components/ui/image';

export type CtaImageTypes = {
  index: number;
  heading: string;
  paragraph: string;
  cta: CtaDataTypes;
  img: ImgDataTypes;
  course: CourseDataTypes;
};
