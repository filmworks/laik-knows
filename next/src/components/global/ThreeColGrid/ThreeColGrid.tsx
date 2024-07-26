import { TargetGroupTypes } from '../TargetGroup';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './ThreeColGrid.module.scss';

export default function ThreeColGrid({ heading, list, index }: TargetGroupTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;
  const Subheading = index === 0 ? Markdown.h2 : Markdown.h3;
  return (
    <section className={styles.section}>
      <Heading>{heading}</Heading>
      <ul className={`${styles.list} max-width`}>
        {list.map(({ heading, paragraph, img }, i) => (
          <li className={`${styles.item} ${i % 2 !== 0 ? styles.reverse : ''}`} key={i}>
            <Img
              data={img}
              sizes='(max-width: 562px) 156px, (max-width: 923px) 28vw, (max-width: 959px) 256px, (max-width: 1285px) 30vw, 381px'
            />
            <div className={styles.content}>
              <Subheading>{heading}</Subheading>
              <Markdown.p>{paragraph}</Markdown.p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
