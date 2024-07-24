import Markdown from '@/components/ui/markdown';
import styles from './Benefits.module.scss';
import type { BenefitsTypes } from './Benefits.types';
import Img from '@/components/ui/image';

export default function Benefits({ heading, paragraph, list }: BenefitsTypes) {
  return (
    <section className={`${styles.section}`}>
      <div className='max-width'>
        <header className={`${styles.header}`}>
          <Markdown.h2>{heading}</Markdown.h2>
          <Markdown.p>{paragraph}</Markdown.p>
        </header>
      </div>
      <div className={styles.container}>
        <ul className={`${styles.list} max-width`}>
          {list.map(({ heading, paragraph, img }, i) => (
            <li key={i} className={styles.item}>
              <div className={styles.content}>
                <Markdown.p>{paragraph}</Markdown.p>
                <Markdown.h3>{heading}</Markdown.h3>
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
