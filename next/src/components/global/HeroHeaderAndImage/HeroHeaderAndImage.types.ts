import { CourseDataTypes } from '@/global/types';
import { CtaDataTypes } from '@/components/ui/CtaButtonRow/CtaButtonRow.types';
import { ImgDataTypes } from '@/components/ui/image';

export type HeroHeaderAndImageTypes = {
  index: number;
  heading: string;
  paragraph: string;
  img: ImgDataTypes;
  cta: CtaDataTypes;
  course: CourseDataTypes;
};
