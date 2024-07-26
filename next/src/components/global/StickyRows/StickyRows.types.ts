import { ImgDataTypes } from '@/components/ui/image';

export type StickyRowsTypes = {
  index: number;
  heading: string;
  rows: { heading: string; paragraph: string; img: ImgDataTypes }[];
};
