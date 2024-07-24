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
            <Img
              data={img}
              sizes='(max-width: 562px) 156px, (max-width: 923px) 28vw, (max-width: 959px) 256px, (max-width: 1285px) 30vw, 381px'
            />
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
