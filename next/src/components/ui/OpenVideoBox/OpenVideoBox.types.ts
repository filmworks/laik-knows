import { ImgDataTypes } from '../image';
import { ReactNode } from 'react';

export type OpenVideoBoxTypes = { video?: string | null; img: ImgDataTypes; sizes?: string };

export type VideoBoxTypes = {
  video: string;
  img: ImgDataTypes;
  sizes: string;
  videoIcon: ReactNode;
};
