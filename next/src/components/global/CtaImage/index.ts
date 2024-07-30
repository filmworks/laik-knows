import { CourseDataQuery } from '@/global/queries';
import { CtaDataQuery } from '@/components/ui/Button';
import { ImgDataQuery } from '@/components/ui/image';
import CtaImage from './CtaImage';

export default CtaImage;
export type { CtaImageTypes } from './CtaImage.types';

export const CtaImage_Query = `
    _type == "CtaImage" => {
        heading,
        paragraph,
        cta {
        ${CtaDataQuery}
        },
        img {
        ${ImgDataQuery}
        },
        "course": ${CourseDataQuery}
    },
`;
