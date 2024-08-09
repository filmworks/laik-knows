import { CourseDataTypes } from '@/global/types';
import { CtaDataTypes } from '@/components/ui/CtaButtonRow/CtaButtonRow.types';
import { ImgDataTypes } from '@/components/ui/image';
import { VideoDataTypes } from '@/components/ui/video';

export type CourseDetailsTypes = {
  index: number;
  heading: string;
  video?: string;
  img: ImgDataTypes;
  cta: CtaDataTypes;
  course: CourseDataTypes;
  email: string;
  list: {
    heading: string;
    paragraph: string;
    showForm: boolean;
    video: VideoDataTypes;
    form: { heading: string; paragraph: string; cta: string };
  }[];
};

export type DetailsAccordionTypes = {
  email: string;
  list: {
    heading: JSX.Element;
    paragraph: JSX.Element;
    video: VideoDataTypes;
    showForm: boolean;
    form: { heading: JSX.Element; paragraph: JSX.Element; cta: string; privacyLink: string };
  }[];
};
