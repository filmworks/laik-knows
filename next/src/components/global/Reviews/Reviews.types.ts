import { ImgDataTypes } from '@/components/ui/image';
import { VideoDataTypes } from '@/components/ui/video';

export type ReviewsTypes = {
  heading: string;
  list: SingleReviewType[];
  index: number;
};

export type SingleReviewType = {
  name: string;
  content: string;
  instagram: {
    url: string;
    username: string;
  };
  image: ImgDataTypes;
  video?: VideoDataTypes | null;
};

export type ListTypes = {
  list: (Omit<SingleReviewType, 'content'> & {
    content: JSX.Element;
  })[];
};
