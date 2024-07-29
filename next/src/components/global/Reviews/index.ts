import { ImgDataQuery } from '@/components/ui/image';
import { VideoDataQuery } from '@/components/ui/video';
import Reviews from './Reviews';

export default Reviews;
export type { ReviewsTypes } from './Reviews.types';

export const SingleReview_Query = `
  {
    name,
    instagram,
    "content": review.content,
    "visible": review.visible,
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
