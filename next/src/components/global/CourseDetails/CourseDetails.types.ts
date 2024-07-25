import { CourseDataTypes } from '@/global/types';
import { CtaDataTypes } from '@/components/ui/Button/Button.types';
import { ImgDataTypes } from '@/components/ui/image';
import { VideoDataTypes } from '@/components/ui/video';

export type CourseDetailsTypes = {
  index: number;
  heading: string;
  video: VideoDataTypes;
  img: ImgDataTypes;
  cta: CtaDataTypes;
  course: CourseDataTypes;
  list: {
    heading: string;
    paragraph: string;
    video: VideoDataTypes;
    form: { heading: string; paragraph: string; cta: string };
  }[];
};

export type DetailsAccordionTypes = {
  list: {
    heading: JSX.Element;
    paragraph: JSX.Element;
    video: VideoDataTypes;

    form: { heading: JSX.Element; paragraph: JSX.Element; cta: string; privacyLink: string };
  }[];
};
