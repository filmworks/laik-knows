import HeroHeaderAndImage, {
  HeroHeaderAndImageTypes,
  HeroHeaderAndImage_Query,
} from '@/components/global/HeroHeaderAndImage';
import Benefits, { Benefits_Query, BenefitsTypes } from './global/Benefits';
import Numbers, { Numbers_Query, NumbersTypes } from './global/Numbers';
import Reviews, { Reviews_Query, ReviewsTypes } from './global/Reviews';
import TargetGroup, { TargetGroup_Query, TargetGroupTypes } from './global/TargetGroup';
import CourseDetails, { CourseDetails_Query, CourseDetailsTypes } from './global/CourseDetails';
import SaleFinishTime, { SaleFinishTime_Query, SaleFinishTimeTypes } from './global/SaleFinishTime';

type componentsMapTypes = {
  HeroHeaderAndImage: HeroHeaderAndImageTypes;
  Benefits: BenefitsTypes;
  Numbers: NumbersTypes;
  Reviews: ReviewsTypes;
  TargetGroup: TargetGroupTypes;
  CourseDetails: CourseDetailsTypes;
  SaleFinishTime: SaleFinishTimeTypes;
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
    },
  `;
