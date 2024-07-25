import { CtaDataQuery } from '@/components/ui/Button';
import AdvantagesCta from './AdvantagesCta';
import { ImgDataQuery } from '@/components/ui/image';
import { CourseDataQuery } from '@/global/queries';
export default AdvantagesCta;
export type { AdvantagesCtaTypes } from './AdvantagesCta.types';

export const AdvantagesCta_Query = `
    _type == "AdvantagesCta" => {
        heading,
        paragraph,
        cta {
            ${CtaDataQuery}
        },
        details,
        img {
            ${ImgDataQuery}
        },
        "course": 
            ${CourseDataQuery}
    },
`;
