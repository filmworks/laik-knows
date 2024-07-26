import HeroHeaderAndImage, {
  HeroHeaderAndImageTypes,
  HeroHeaderAndImage_Query,
} from '@/components/global/HeroHeaderAndImage';
import AboutCourseLeader, { AboutCourseLeaderTypes, AboutCourseLeader_Query } from './global/AboutCourseLeader';
import AdvantagesCta, { AdvantagesCtaTypes, AdvantagesCta_Query } from './global/AdvantagesCta';
import Benefits, { BenefitsTypes, Benefits_Query } from './global/Benefits';
import CourseDetails, { CourseDetailsTypes, CourseDetails_Query } from './global/CourseDetails';
import HeadingParagraph, { HeadingParagraphTypes, HeadingParagraph_Query } from './global/HeadingParagraph';
import ProvenResults, { ProvenResultsTypes, ProvenResults_Query } from './global/ProvenResults';
import Reviews, { ReviewsTypes, Reviews_Query } from './global/Reviews';
import SaleFinishTime, { SaleFinishTimeTypes, SaleFinishTime_Query } from './global/SaleFinishTime';
import ThreeColGrid, { ThreeColGridTypes, ThreeColGrid_Query } from './global/ThreeColGrid';

type componentsMapTypes = {
  HeroHeaderAndImage: HeroHeaderAndImageTypes;
  Benefits: BenefitsTypes;
  ProvenResults: ProvenResultsTypes;
  Reviews: ReviewsTypes;
  ThreeColGrid: ThreeColGridTypes;
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
      ProvenResults: <ProvenResults {...(item as ProvenResultsTypes)} />,
      Reviews: <Reviews {...(item as ReviewsTypes)} />,
      ThreeColGrid: <ThreeColGrid {...(item as ThreeColGridTypes)} />,
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
      ${ProvenResults_Query}
      ${Reviews_Query}
      ${ThreeColGrid_Query}
      ${CourseDetails_Query}
      ${SaleFinishTime_Query}
      ${AboutCourseLeader_Query}
      ${HeadingParagraph_Query}
      ${AdvantagesCta_Query}
    },
  `;
