import { ImgDataTypes } from '@/components/ui/image';
import { VideoDataTypes } from '@/components/ui/video';

export type ReviewsTypes = {
  mediaType: 'image' | 'video';
  heading: string;
  list: {
    name: string;
    content: string;
    instagram: {
      url: string;
      username: string;
    };
    image: ImgDataTypes;
    video?: VideoDataTypes | null;
  }[];
};
