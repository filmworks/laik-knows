import { ImgDataTypes } from '@/components/ui/image';
import { VideoDataTypes } from '@/components/ui/video';

export type ReviewsTypes = {
  heading: string;
  list: SingleReviewType[];
  reviewNum: number;
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
