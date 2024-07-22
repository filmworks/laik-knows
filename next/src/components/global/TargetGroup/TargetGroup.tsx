import Markdown from '@/components/ui/markdown';
import styles from './TargetGroup.module.scss';
import type { TargetGroupTypes } from './TargetGroup.types';
import Img from '@/components/ui/image';

export default function TargetGroup({ heading, list }: TargetGroupTypes) {
  return (
    <section className={styles.section}>
      <Markdown.h2>{heading}</Markdown.h2>
      <ul className={`${styles.list} max-width`}>
        {list.map(({ heading, paragraph, img }, i) => (
          <li className={`${styles.item} ${i % 2 !== 0 ? styles.reverse : ''}`} key={i}>
            <Img data={img} sizes='' />
            <div className={styles.content}>
              <Markdown.h3>{heading}</Markdown.h3>
              <Markdown.p>{paragraph}</Markdown.p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
