import Button from '../Button';
import Markdown from '../markdown';
import styles from './CtaButtonRow.module.scss';
import { CtaDataTypes } from './CtaButtonRow.types';

export default function CtaButtonRow({ list, additionalInfo }: CtaDataTypes) {
  return (
    <>
      <nav className={styles.nav}>
        {list.map((btn, i) => (
          <Button {...btn} key={i} />
        ))}
      </nav>
      {additionalInfo ? <Markdown.p className={styles.ctaText}>{additionalInfo}</Markdown.p> : null}
    </>
  );
}
