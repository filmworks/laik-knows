import { ButtonDataQuery } from '@/components/ui/Button';
import HeroHeaderAndImage from './HeroHeaderAndImage';
import { ImgDataQuery } from '@/components/ui/image';
export default HeroHeaderAndImage;
export type { HeroHeaderAndImageTypes } from './HeroHeaderAndImage.types';

export const HeroHeaderAndImage_Query = `
  _type == "HeroHeaderAndImage" => {
    heading,
    paragraph,
    cta {
      ${ButtonDataQuery}
    },
    img {
      ${ImgDataQuery}
    },
  },
`;
