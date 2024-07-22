import styles from './CourseDetails.module.scss';
import type { CourseDetailsTypes } from './CourseDetails.types';
import Pricing from '@/components/ui/Pricing';
import Button from '@/components/ui/Button';
import Markdown from '@/components/ui/markdown';
import DetailsAccordion from './DetailsAccordion';
import OpenVideoBox from '@/components/ui/OpenVideoBox';

export default function CourseDetails({ heading, video, img, cta, list }: CourseDetailsTypes) {
  return (
    <section className={`${styles.section} max-width`}>
      <Markdown.h2>{heading}</Markdown.h2>
      <div className={styles.container}>
        <DetailsAccordion list={list} />
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
