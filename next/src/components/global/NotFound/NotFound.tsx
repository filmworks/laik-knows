import Button from '@/components/ui/Button';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './NotFound.module.scss';
import type { NotFoundTypes } from './NotFound.types';

export default function NotFound({ heading, paragraph, cta, imgLg, imgSm }: NotFoundTypes) {
  return (
    <section className={`${styles.section} max-width`}>
      <header>
        <Markdown.h1>{heading}</Markdown.h1>
        <Markdown.p>{paragraph}</Markdown.p>
        <Button data={cta} />
      </header>
      <div className={styles.images}>
        <div className={styles.sm}>
          <Img data={imgSm} sizes='' />
        </div>
        <div className={styles.lg}>
          <Img data={imgLg} sizes='' />
        </div>
      </div>
    </section>
  );
}
