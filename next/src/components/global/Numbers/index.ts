import Numbers from './Numbers';
export default Numbers;
export type { NumbersTypes } from './Numbers.types';

export const Numbers_Query = `
  _type == "Numbers" => {
    heading,
    list[] {
      percent,
      description,
    },
  },
`;
