import HeadingParagraph from './HeadingParagraph';
export default HeadingParagraph;
export type { HeadingParagraphTypes } from './HeadingParagraph.types';

export const HeadingParagraph_Query = `
  _type == "HeadingParagraph" => {
        heading,
        paragraph,
        enlarged {
            top,
            bottom,
        },
    },
`;
