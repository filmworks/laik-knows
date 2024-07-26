import { ImgDataQuery } from '@/components/ui/image';
import ThreeColGrid from './ThreeColGrid';

export default ThreeColGrid;
export type { ThreeColGridTypes } from './ThreeColGrid.types';

export const ThreeColGrid_Query = `
  _type == "ThreeColGrid" => {
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
