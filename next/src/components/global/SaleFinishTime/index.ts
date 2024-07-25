import { CourseDataQuery } from '@/global/queries';
import SaleFinishTime from './SaleFinishTime';

export default SaleFinishTime;
export type { SaleFinishTimeTypes } from './SaleFinishTime.types';

export const SaleFinishTime_Query = `
    _type == "SaleFinishTime" => {
        heading,
        "course": ${CourseDataQuery}
    },
`;
