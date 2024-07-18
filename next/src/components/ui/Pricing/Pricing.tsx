import styles from './Pricing.module.scss';
import type { PricingTypes } from './Pricing.types';

export default function Pricing({ fullPrice, discountPrice, smallestPriceMonth }: PricingTypes) {
  return (
    <div className={styles.pricing}>
      <div className={styles.row}>
        <span className={styles.box}>
          {fullPrice} zł
          <DashedLine />
        </span>
        <span>{discountPrice} zł</span>
      </div>
      <p className={styles.paragraph}>Najniższa cena od 30 dni {smallestPriceMonth} zł.</p>
    </div>
  );
}

const DashedLine = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 71 34' fill='none'>
    <path d='M.5.25 70.742 33.5' stroke='#434E5B' />
  </svg>
);
