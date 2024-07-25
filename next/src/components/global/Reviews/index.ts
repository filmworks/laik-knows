import { ImgDataQuery } from '@/components/ui/image';
import Reviews from './Reviews';
import { VideoDataQuery } from '@/components/ui/video';
export default Reviews;
export type { ReviewsTypes } from './Reviews.types';

export const SingleReview_Query = `
  {
    name,
    content,
    instagram,
    image {
      ${ImgDataQuery}
    },
    video{
      ${VideoDataQuery}
    },
  }
`;

export const Reviews_Query = `
 _type == "Reviews" =>  {
    heading,
    list[]  -> ${SingleReview_Query},
  },
`;
