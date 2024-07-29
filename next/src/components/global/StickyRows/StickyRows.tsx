import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './StickyRows.module.scss';
import type { StickyRowsTypes } from './StickyRows.types';

export default function StickyRows({ heading, rows, index }: StickyRowsTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;
  const Subheading = index === 0 ? Markdown.h2 : Markdown.h3;

  return (
    <section className={styles.section}>
      <Heading className={styles.heading}>{heading}</Heading>
      <ul>
        {rows.map(({ heading, paragraph, img }, i) => (
          <li className={styles.item} key={i}>
            <div className={styles.container}>
              <Img data={img} sizes='(max-width: 359px) 173px, (max-width: 1366px) 50vw, 667px' />
              <div className={styles.content}>
                <span className={styles.num}>{i + 1}</span>
                <div>
                  <Subheading className={styles.subheading}>{heading}</Subheading>
                  <Markdown.p>{paragraph}</Markdown.p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
