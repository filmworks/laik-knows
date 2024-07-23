import styles from './CourseDetails.module.scss';
import type { CourseDetailsTypes } from './CourseDetails.types';
import Pricing from '@/components/ui/Pricing';
import Button from '@/components/ui/Button';
import Markdown from '@/components/ui/markdown';
import DetailsAccordion from './DetailsAccordion';
import OpenVideoBox from '@/components/ui/OpenVideoBox';
import Input from '@/components/ui/Input';

export default function CourseDetails({ heading, video, img, cta, list }: CourseDetailsTypes) {
  const _list = list.map(props => ({
    ...props,
    heading: <Markdown.h3>{props.heading}</Markdown.h3>,
    paragraph: <Markdown.p>{props.paragraph}</Markdown.p>,
  }));
  return (
    <section className={`${styles.section} max-width`}>
      <Markdown.h2>{heading}</Markdown.h2>
      <div className={styles.container}>
        <DetailsAccordion list={_list} />
        <div className={styles.col}>
          <div>
            <OpenVideoBox img={img} video={video} />
          </div>
          <div className={styles.box}>
            <Pricing fullPrice={150} discountPrice={50} smallestPriceMonth={79} />
            <Button href={cta.href}>{cta.text}</Button>
            <p className={styles.ctaText}>Zostaniesz przekierowany na stronę EasyCart</p>
          </div>
        </div>
      </div>
    </section>
  );
}
