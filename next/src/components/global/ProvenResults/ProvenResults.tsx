import Counter from '@/components/ui/Counter';
import Markdown from '@/components/ui/markdown';
import styles from './ProvenResults.module.scss';
import { ProvenResultsTypes } from './ProvenResults.types';

export default function ProvenResults({ heading, list, index }: ProvenResultsTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;

  return (
    <section className={styles.section}>
      <div className='max-width'>
        <Heading>{heading}</Heading>
        <ul className={styles.list}>
          {list.map(({ value, percent, description }, i) => (
            <li className={styles.item} key={i}>
              <div className={styles.percent}>
                <Counter value={value} />
                {percent && '%'}
              </div>
              <Markdown.p>{description}</Markdown.p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
