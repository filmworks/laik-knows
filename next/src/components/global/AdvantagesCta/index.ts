import { CourseDataQuery } from '@/global/queries';
import { CtaDataQuery } from '@/components/ui/Button';
import { ImgDataQuery } from '@/components/ui/image';
import AdvantagesCta from './AdvantagesCta';

export default AdvantagesCta;
export type { AdvantagesCtaTypes } from './AdvantagesCta.types';

export const AdvantagesCta_Query = `
    _type == "AdvantagesCta" => {
        heading,
        paragraph,
        cta {
            ${CtaDataQuery}
        },
        img {
            ${ImgDataQuery}
        },
        "course": 
            ${CourseDataQuery}
    },
`;
