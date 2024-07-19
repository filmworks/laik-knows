import Markdown from '@/components/ui/markdown';
import styles from './Numbers.module.scss';
import type { NumbersTypes } from './Numbers.types';
import Counter from '@/components/ui/Counter';

export default function Numbers({ heading, list }: NumbersTypes) {
  return (
    <section className={styles.section}>
      <div className='max-width'>
        <Markdown.h2>{heading}</Markdown.h2>
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
