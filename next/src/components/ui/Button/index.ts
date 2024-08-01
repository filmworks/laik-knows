import Button from './Button';

export default Button;
export type { ButtonTypes } from './Button.types';

export const CtaDataQuery = `
  list[]{
    theme,
    text,
    href,
  },
  additionalInfo,

`;
