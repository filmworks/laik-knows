import { ImgDataQuery } from '@/components/ui/image';
import StickyRows from './StickyRows';

export default StickyRows;
export type { StickyRowsTypes } from './StickyRows.types';

export const StickyRows_Query = `
    _type == "StickyRows" => {
        heading,
        rows[]{
            heading,
            paragraph,
            img {
                ${ImgDataQuery}
                },
        },
    },
`;
