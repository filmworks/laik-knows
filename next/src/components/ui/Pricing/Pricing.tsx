import styles from './Pricing.module.scss';
import type { PricingTypes } from './Pricing.types';

export default function Pricing({ fullPrice, discountPrice, smallestPrice }: PricingTypes) {
  return (
    <div className={styles.pricing}>
      <div className={styles.row}>
        <del className={styles.box}>{fullPrice}&nbsp;zł</del>
        <span>{discountPrice} zł</span>
      </div>
      <p className={styles.paragraph}>Najniższa cena od 30 dni {smallestPrice} zł.</p>
    </div>
  );
}
