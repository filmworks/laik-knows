import Img from '@/components/ui/image';
import styles from './CourseDetails.module.scss';
import type { CourseDetailsTypes } from './CourseDetails.types';
import Pricing from '@/components/ui/Pricing';
import Button from '@/components/ui/Button';
import Markdown from '@/components/ui/markdown';
import DetailsAccordion from './DetailsAccordion';

export default function CourseDetails({ heading, img, cta, list }: CourseDetailsTypes) {
  return (
    <section className={`${styles.section} max-width`}>
      <Markdown.h2>{heading}</Markdown.h2>
      <div className={styles.container}>
        <DetailsAccordion list={list} />
        <div className={styles.col}>
          <div>
            <Img data={img} sizes='' />
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
