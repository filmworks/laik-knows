import { CourseDataQuery } from '@/global/queries';
import { CtaDataQuery } from '@/components/ui/Button';
import { ImgDataQuery } from '@/components/ui/image';
import { VideoDataQuery } from '@/components/ui/video';
import HeroHeaderAndImage from './HeroHeaderAndImage';

export default HeroHeaderAndImage;
export type { HeroHeaderAndImageTypes } from './HeroHeaderAndImage.types';

export const HeroHeaderAndImage_Query = `
  _type == "HeroHeaderAndImage" => {
    heading,
    paragraph,
    cta {
      ${CtaDataQuery}
    },
    img {
      ${ImgDataQuery}
    },
    video {${VideoDataQuery}},
    "course": ${CourseDataQuery}
  },
`;
