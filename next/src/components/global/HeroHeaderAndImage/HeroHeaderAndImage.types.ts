import { CourseDataTypes } from '@/global/types';
import { CtaDataTypes } from '@/components/ui/CtaButtonRow/CtaButtonRow.types';
import { ImgDataTypes } from '@/components/ui/image';

export type HeroHeaderAndImageTypes = {
  index: number;
  heading: string;
  paragraph: string;
  img: ImgDataTypes;
  video?: string;
  cta: CtaDataTypes;
  course: CourseDataTypes;
};

export type BackgroundTypes = {
  video: string;
  img: ImgDataTypes;
};
