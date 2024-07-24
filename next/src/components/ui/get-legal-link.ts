import sanityFetch from '@/utils/sanity.fetch';

type getLegalLinkTypes = {
  privacyPolicy: string;
};

export default async function getLegalLink(): Promise<getLegalLinkTypes> {
  return await query();
}

async function query(): Promise<getLegalLinkTypes> {
  return await sanityFetch({
    query: /* groq */ `
      *[_id == 'global'][0] {
        privacyPolicy,
      }
    `,
    tags: ['global'],
  });
}
