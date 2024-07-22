import { ButtonDataTypes } from '@/components/ui/Button/Button.types';
import { ImgDataTypes } from '@/components/ui/image';
import { VideoDataTypes } from '@/components/ui/video';

export type SingleModuleTypes = {
  heading: string;
  paragraph: string;
  video: VideoDataTypes;
};

export type CourseDetailsTypes = {
  index: number;
  heading: string;
  video: VideoDataTypes;
  img: ImgDataTypes;
  cta: ButtonDataTypes;
  list: SingleModuleTypes[];
};
