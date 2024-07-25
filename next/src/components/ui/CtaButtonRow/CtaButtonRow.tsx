import Button from '../Button';
import Markdown from '../markdown';
import styles from './CtaButtonRow.module.scss';
import type { CtaButtonRowTypes } from './CtaButtonRow.types';

export default function CtaButtonRow({ cta, details }: CtaButtonRowTypes) {
  return (
    <>
      <nav className={styles.nav}>
        <Button data={cta.button} />
        <Button href='#plan'>{details}</Button>
      </nav>
      <Markdown.p className={styles.ctaText}>{cta.paragraph}</Markdown.p>
    </>
  );
}
