import { ImgDataTypes } from '@/components/ui/image';
import { VideoDataTypes } from '@/components/ui/video';

export type ReviewsTypes = {
  heading: string;
  list: (SingleReviewType & { content: string })[];
  reviewNum: number;
};

export type SingleReviewType = {
  name: string;
  instagram: {
    url: string;
    username: string;
  };
  image: ImgDataTypes;
  video?: VideoDataTypes | null;
};

export type ListTypes = {
  list: (SingleReviewType & { content: JSX.Element })[];
  reviewNum: number;
};
