import { CourseDataQuery } from '@/global/queries';
import { CtaDataQuery } from '@/components/ui/Button';
import { ImgDataQuery } from '@/components/ui/image';
import FeatureList from './FeatureList';

export default FeatureList;
export type { FeatureListTypes } from './FeatureList.types';

export const FeatureList_Query = `
    _type == "FeatureList" => {
        heading,
        paragraph,
        list[],
        imgSm{
            ${ImgDataQuery}
        },
        imgLg{
            ${ImgDataQuery}
        },
        cta {
            ${CtaDataQuery}
        },
        "course": ${CourseDataQuery}
    }

`;
