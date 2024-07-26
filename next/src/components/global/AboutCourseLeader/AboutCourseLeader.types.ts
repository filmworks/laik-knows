import { ImgDataTypes } from '@/components/ui/image';

export type socialMediaItem = { _type: string; url: string };

export type AboutCourseLeaderTypes = {
  index: number;
  heading: string;
  paragraph: string;
  imgSm: ImgDataTypes;
  imgLg: ImgDataTypes;
  socials: socialMediaItem[];
};
