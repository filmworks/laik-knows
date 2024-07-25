import { ImgDataQuery } from '@/components/ui/image';
import AboutCourseLeader from './AboutCourseLeader';
export default AboutCourseLeader;
export type { AboutCourseLeaderTypes } from './AboutCourseLeader.types';

export const AboutCourseLeader_Query = `
  _type == "AboutCourseLeader" => {
    heading,
    paragraph,
    imgSm{ 
        ${ImgDataQuery}
        },
    imgLg{ 
        ${ImgDataQuery}
        },
    socials[]{
        _type,
        url,
    }
  },
`;
