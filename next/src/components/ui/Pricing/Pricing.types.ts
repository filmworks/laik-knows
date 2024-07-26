export type PricingTypes = {
  fullPrice: number;
  discountPrice?: number;
  smallestPrice: number;
} & React.HTMLAttributes<HTMLDivElement>;
