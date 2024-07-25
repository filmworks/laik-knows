import Markdown from '@/components/ui/markdown';
import styles from './HeadingParagraph.module.scss';
import type { HeadingParagraphTypes } from './HeadingParagraph.types';

export default function HeadingParagraph({ heading, paragraph, enlarged }: HeadingParagraphTypes) {
  return (
    <section className={styles.section} data-enlarged-top={enlarged.top} data-enlarged-bottom={enlarged.bottom}>
      <div className='max-width'>
        <Markdown.h2>{heading}</Markdown.h2>
        <Markdown.p>{paragraph}</Markdown.p>
      </div>
    </section>
  );
}
