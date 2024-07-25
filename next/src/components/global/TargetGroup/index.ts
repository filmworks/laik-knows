import { ImgDataQuery } from '@/components/ui/image';
import TargetGroup from './TargetGroup';

export default TargetGroup;
export type { TargetGroupTypes } from './TargetGroup.types';

export const TargetGroup_Query = `
  _type == "TargetGroup" => {
    heading,
    list[] {
      img {
        ${ImgDataQuery}
      },
      heading,
      paragraph,
    },
  },
`;
