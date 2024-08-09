import { ImgDataTypes } from '@/components/ui/image';

export type ReviewsTypes = {
  heading: string;
  list: SingleReviewType[];
  index: number;
};

export type SingleReviewType = {
  name: string;
  content: string;
  visible: boolean;
  instagram: {
    url: string;
    username: string;
  };
  image: ImgDataTypes;
  video?: string | null;
};

export type ListTypes = {
  list: (Omit<SingleReviewType, 'content'> & {
    content: JSX.Element;
  })[];
};
