import styles from './Reviews.module.scss';
import type { ReviewsTypes } from './Reviews.types';
import List from './_List';
import Markdown from '@/components/ui/markdown';

export default function Reviews({ heading, list, reviewNum }: ReviewsTypes) {
  const _list = list.map(props => ({ ...props, content: <Markdown.p>{props.content}</Markdown.p> }));
  return (
    <section className={styles.section}>
      <div className='max-width'>
        <Markdown.h2>{heading}</Markdown.h2>
        <List list={_list} reviewNum={reviewNum} />
      </div>
    </section>
  );
}
