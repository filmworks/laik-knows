import HeadingWithEmbed from './HeadingWithEmbed';

export default HeadingWithEmbed;
export type { HeadingWithEmbedTypes } from './HeadingWithEmbed.types';

export const HeadingWithEmbed_Query = /* groq */ `
    _type == "HeadingWithEmbed" => {
        heading,
        paragraph,
        video,
    },
`;
