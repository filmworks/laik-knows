export const CourseDataQuery = `
    *[_type == "course"][0]{
      fullPrice,
      discountPrice,
      smallestPrice,
      saleFinishDate,
    },
`;
