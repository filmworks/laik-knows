import ProvenResults from './ProvenResults';

export default ProvenResults;
export type { ProvenResultsTypes } from './ProvenResults.types';

export const ProvenResults_Query = `
  _type == "ProvenResults" => {
    heading,
    list[] {
        value,
        percent,
        description,
    },
  },
`;
