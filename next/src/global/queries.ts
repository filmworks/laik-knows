export const CourseDataQuery = `
    *[_type == "course"][0]{
      fullPrice,
      discountPrice,
      smallestPrice,
      saleFinishDate,
    },
`;

export const Email_Query = `
    *[_type == "global"][0]{
      email
    }.email,
`;
