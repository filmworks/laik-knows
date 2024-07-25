import HeroHeaderAndImage, {
  HeroHeaderAndImageTypes,
  HeroHeaderAndImage_Query,
} from '@/components/global/HeroHeaderAndImage';
import AboutCourseLeader, { AboutCourseLeaderTypes, AboutCourseLeader_Query } from './global/AboutCourseLeader';
import AdvantagesCta, { AdvantagesCtaTypes, AdvantagesCta_Query } from './global/AdvantagesCta';
import Benefits, { BenefitsTypes, Benefits_Query } from './global/Benefits';
import CourseDetails, { CourseDetailsTypes, CourseDetails_Query } from './global/CourseDetails';
import HeadingParagraph, { HeadingParagraphTypes, HeadingParagraph_Query } from './global/HeadingParagraph';
import Numbers, { NumbersTypes, Numbers_Query } from './global/Numbers';
import Reviews, { ReviewsTypes, Reviews_Query } from './global/Reviews';
import SaleFinishTime, { SaleFinishTimeTypes, SaleFinishTime_Query } from './global/SaleFinishTime';
import TargetGroup, { TargetGroupTypes, TargetGroup_Query } from './global/TargetGroup';

type componentsMapTypes = {
  HeroHeaderAndImage: HeroHeaderAndImageTypes;
  Benefits: BenefitsTypes;
  Numbers: NumbersTypes;
  Reviews: ReviewsTypes;
  TargetGroup: TargetGroupTypes;
  CourseDetails: CourseDetailsTypes;
  SaleFinishTime: SaleFinishTimeTypes;
  AboutCourseLeader: AboutCourseLeaderTypes;
  HeadingParagraph: HeadingParagraphTypes;
  AdvatangesCta: AdvantagesCtaTypes;
};

export type ComponentTypes = componentsMapTypes[keyof componentsMapTypes] & { _type: string };

export default function Components({ data }: { data: ComponentTypes[] }) {
  return data?.map((item, index) => {
    item = { ...item, index };
    const componentType = item._type as keyof componentsMapTypes;
    const componentsMapTypes: Record<string, React.ReactNode> = {
      HeroHeaderAndImage: <HeroHeaderAndImage {...(item as HeroHeaderAndImageTypes)} />,
      Benefits: <Benefits {...(item as BenefitsTypes)} />,
      Numbers: <Numbers {...(item as NumbersTypes)} />,
      Reviews: <Reviews {...(item as ReviewsTypes)} />,
      TargetGroup: <TargetGroup {...(item as TargetGroupTypes)} />,
      CourseDetails: <CourseDetails {...(item as CourseDetailsTypes)} />,
      SaleFinishTime: <SaleFinishTime {...(item as SaleFinishTimeTypes)} />,
      AboutCourseLeader: <AboutCourseLeader {...(item as AboutCourseLeaderTypes)} />,
      HeadingParagraph: <HeadingParagraph {...(item as HeadingParagraphTypes)} />,
      AdvantagesCta: <AdvantagesCta {...(item as AdvantagesCtaTypes)} />,
    };
    const DynamicComponent = componentsMapTypes[componentType];
    if (!DynamicComponent) return null;
    return DynamicComponent;
  });
}

export const Components_Query = /* groq */ `
    content[] {
      _type,
      ${HeroHeaderAndImage_Query}
      ${Benefits_Query}
      ${Numbers_Query}
      ${Reviews_Query}
      ${TargetGroup_Query}
      ${CourseDetails_Query}
      ${SaleFinishTime_Query}
      ${AboutCourseLeader_Query}
      ${HeadingParagraph_Query}
      ${AdvantagesCta_Query}
    },
  `;
