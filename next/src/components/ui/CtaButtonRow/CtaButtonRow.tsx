import Button from '../Button';
import type { CtaDataTypes } from '../Button/Button.types';
import Markdown from '../markdown';
import styles from './CtaButtonRow.module.scss';

export default function CtaButtonRow({ list, additionalInfo }: CtaDataTypes) {
  return (
    <>
      <nav className={styles.nav}>
        {list.map((btn, i) => (
          <Button data={btn} key={i} />
        ))}
      </nav>
      {additionalInfo ? <Markdown.p className={styles.ctaText}>{additionalInfo}</Markdown.p> : null}
    </>
  );
}
