import { ImgDataQuery } from '@/components/ui/image';
import Partners from './Partners';

export default Partners;
export type { PartnersTypes } from './Partners.types';

export const Partners_Query = `
    _type == "Partners" => {
        heading,
        paragraph,
        list[] -> {
            img {
                ${ImgDataQuery}
            },
            name,
            href,
        },
    },
`;
