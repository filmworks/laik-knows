import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './Benefits.module.scss';
import type { BenefitsTypes } from './Benefits.types';

export default function Benefits({ heading, paragraph, list, index }: BenefitsTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;
  const Subheading = index === 0 ? Markdown.h2 : Markdown.h3;

  return (
    <section className={styles.section}>
      <div className='max-width'>
        <header className={styles.header}>
          <Heading>{heading}</Heading>
          <Markdown.p>{paragraph}</Markdown.p>
        </header>
      </div>
      <div className={styles.container}>
        <ul className={`${styles.list} max-width`}>
          {list.map(({ heading, paragraph, img }, i) => (
            <li key={i} className={styles.item}>
              <div className={styles.content}>
                <Markdown.p>{paragraph}</Markdown.p>
                <Subheading>{heading}</Subheading>
              </div>
              <Img
                data={img}
                sizes='(max-width: 359px) 92vw, (max-width: 699px) 328px, (max-width: 759px) 48vw, (max-width: 959px) 371px, (max-width: 1279px) 30vw, 381px'
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
