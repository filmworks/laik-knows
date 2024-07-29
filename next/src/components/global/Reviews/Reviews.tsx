import Markdown from '@/components/ui/markdown';
import styles from './Reviews.module.scss';
import type { ReviewsTypes } from './Reviews.types';
import List from './_List';

export default function Reviews({ heading, list, index }: ReviewsTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;
  const _list = list
    .filter(r => r.visible)
    .map(review => ({ ...review, content: <Markdown.p>{review.content}</Markdown.p> }));
  return (
    <section className={styles.section}>
      <div className='max-width'>
        <Heading>{heading}</Heading>
        <List list={_list} />
      </div>
    </section>
  );
}
