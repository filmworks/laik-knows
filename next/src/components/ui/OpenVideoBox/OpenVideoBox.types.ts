import { ImgDataTypes } from '../image';
import { VideoDataTypes } from '../video';
import { ReactNode } from 'react';

export type OpenVideoBoxTypes = { video?: VideoDataTypes | null; img: ImgDataTypes; sizes?: string };

export type VideoBoxTypes = {
  video: VideoDataTypes;
  img: ImgDataTypes;
  sizes: string;
  videoIcon: ReactNode;
};
