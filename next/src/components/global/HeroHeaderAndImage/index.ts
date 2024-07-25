import { CtaDataQuery } from '@/components/ui/Button';
import HeroHeaderAndImage from './HeroHeaderAndImage';
import { ImgDataQuery } from '@/components/ui/image';
import { CourseDataQuery } from '@/global/queries';
export default HeroHeaderAndImage;
export type { HeroHeaderAndImageTypes } from './HeroHeaderAndImage.types';

export const HeroHeaderAndImage_Query = `
  _type == "HeroHeaderAndImage" => {
    heading,
    paragraph,
    cta {
      ${CtaDataQuery}
    },
    details,
    img {
      ${ImgDataQuery}
    },
    "course": ${CourseDataQuery}
  },
`;
