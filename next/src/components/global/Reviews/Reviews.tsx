import Markdown from '@/components/ui/markdown';
import styles from './Reviews.module.scss';
import type { ReviewsTypes } from './Reviews.types';
import List from './_List';

export default function Reviews({ heading, list, reviewNum }: ReviewsTypes) {
  return (
    <section className={styles.section}>
      <div className='max-width'>
        <Markdown.h2>{heading}</Markdown.h2>
        <List list={list} reviewNum={reviewNum} />
      </div>
    </section>
  );
}
