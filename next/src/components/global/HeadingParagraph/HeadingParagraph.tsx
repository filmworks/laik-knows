import Markdown from '@/components/ui/markdown';
import styles from './HeadingParagraph.module.scss';
import type { HeadingParagraphTypes } from './HeadingParagraph.types';

export default function HeadingParagraph({ heading, paragraph, enlarged, index }: HeadingParagraphTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;

  return (
    <section className={styles.section} data-enlarged-top={enlarged.top} data-enlarged-bottom={enlarged.bottom}>
      <div className='max-width'>
        <Heading>{heading}</Heading>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      </div>
    </section>
  );
}
