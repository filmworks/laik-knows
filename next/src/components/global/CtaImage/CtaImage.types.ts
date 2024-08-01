import { CourseDataTypes } from '@/global/types';
import { CtaDataTypes } from '@/components/ui/CtaButtonRow/CtaButtonRow.types';
import { ImgDataTypes } from '@/components/ui/image';

export type CtaImageTypes = {
  index: number;
  heading: string;
  paragraph: string;
  cta: CtaDataTypes;
  img: ImgDataTypes;
  course: CourseDataTypes;
};
