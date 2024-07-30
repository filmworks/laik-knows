import sanityFetch from '@/utils/sanity.fetch';
import { QueryMetadata } from '@/global/Seo/query-metadata';
import NotFound, { NotFoundTypes } from '@/components/global/NotFound';
import { ImgDataQuery } from '@/components/ui/image';

export default async function IndexPage() {
  const data = await query();

  return <NotFound {...data} />;
}

const query = async (): Promise<NotFoundTypes> => {
  return await sanityFetch({
    query: /* groq */ `
      *[_type == "NotFound_Page"][0] {
        heading,
        paragraph,
        cta,
        imgSm {
        ${ImgDataQuery}
        },
        imgLg {
        ${ImgDataQuery}
        },
      }
    `,
    tags: ['NotFound_Page'],
  });
};

export async function generateMetadata() {
  return await QueryMetadata({
    name: 'NotFound_Page',
    path: '/404',
  });
}
