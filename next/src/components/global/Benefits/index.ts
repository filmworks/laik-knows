import { ImgDataQuery } from '@/components/ui/image';
import Benefits from './Benefits';
export default Benefits;
export type { BenefitsTypes } from './Benefits.types';

export const Benefits_Query = `
  _type == "Benefits" => {
    heading,
    paragraph,
    list[] {
      img {
        ${ImgDataQuery}
      },
      heading,
      paragraph,
    },
  },
`;
