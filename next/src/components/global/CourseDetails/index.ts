import { ButtonDataQuery, CtaDataQuery } from '@/components/ui/Button';
import CourseDetails from './CourseDetails';
import { ImgDataQuery } from '@/components/ui/image';
import { VideoDataQuery } from '@/components/ui/video';
import { CourseDataQuery } from '@/global/queries';
export default CourseDetails;
export type { CourseDetailsTypes } from './CourseDetails.types';

export const CourseDetails_Query = `
    _type == "CourseDetails" => {
        heading,
        video{
            ${VideoDataQuery}
        },
        cta {
            ${CtaDataQuery}
        },
        img {
            ${ImgDataQuery}
        },
        "course": ${CourseDataQuery}
        list[] {
            heading,
            paragraph,
            video {
            ${VideoDataQuery}
            },
            form {
            heading,
            paragraph,
            cta
            },
        },
    },
`;
