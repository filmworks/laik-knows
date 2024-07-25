import Markdown from '@/components/ui/markdown';
import styles from './SaleFinishTime.module.scss';
import type { SaleFinishTimeTypes } from './SaleFinishTime.types';
import Counter from './_Counter';

export default function SaleFinishTime({ heading, course }: SaleFinishTimeTypes) {
  const duration = new Date(course.saleFinishDate).getTime() - new Date().getTime();
  return (
    <section className={styles.section}>
      <div className='max-width'>
        <div className={styles.content}>
          <Markdown.h2>{heading}</Markdown.h2>
          <Counter duration={duration} />
        </div>
      </div>
    </section>
  );
}
