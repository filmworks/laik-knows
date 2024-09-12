import sanityFetch from '@/utils/sanity.fetch';
import { QueryMetadata } from '@/global/Seo/query-metadata';
import Components, { ComponentTypes, Components_Query } from '@/components/Components';

const query = async (): Promise<{ content: ComponentTypes[] }> => {
  return await sanityFetch({
    query: /* groq */ `
      *[_type == "Lesson_Page"][0] {
        ${Components_Query}
      }
    `,
    tags: ['Lesson_Page'],
  });
};

export default async function Lesson() {
  const { content } = await query();
  return (
    <>
      <Components data={content} />
    </>
  );
}

export async function generateMetadata() {
  return await QueryMetadata({ name: 'Lesson_Page', path: '' });
}
