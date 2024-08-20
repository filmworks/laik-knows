import sanityFetch from '@/utils/sanity.fetch';
import { CourseDataTypes } from '@/global/types';

export default async function getCourseData(): Promise<CourseDataTypes> {
  return await query();
}

async function query(): Promise<CourseDataTypes> {
  return await sanityFetch({
    /* groq */
    query: `*[_type == "course"][0] {
      fullPrice,
      discountPrice,
      smallestPrice,
      saleFinishDate,
    } `,
    tags: ['global'],
  });
}
