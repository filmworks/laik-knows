import Counter from '@/components/ui/Counter';
import Markdown from '@/components/ui/markdown';
import styles from './Numbers.module.scss';
import type { NumbersTypes } from './Numbers.types';

export default function Numbers({ heading, list, index }: NumbersTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;

  return (
    <section className={styles.section}>
      <div className='max-width'>
        <Heading>{heading}</Heading>
        <ul className={styles.list}>
          {list.map(({ percent, description }, i) => (
            <li className={styles.item} key={i}>
              <div className={styles.percent}>
                <Counter value={percent} />%
              </div>
              <Markdown.p>{description}</Markdown.p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
