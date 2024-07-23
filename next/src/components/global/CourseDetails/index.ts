import { ButtonDataQuery } from '@/components/ui/Button';
import CourseDetails from './CourseDetails';
import { ImgDataQuery } from '@/components/ui/image';
import { VideoDataQuery } from '@/components/ui/video';
export default CourseDetails;
export type { CourseDetailsTypes } from './CourseDetails.types';

export const CourseDetails_Query = `
    _type == "CourseDetails" => {
        heading,
        video{
            ${VideoDataQuery}
        },
        cta {
            ${ButtonDataQuery}
        },
        img {
            ${ImgDataQuery}
        },
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
