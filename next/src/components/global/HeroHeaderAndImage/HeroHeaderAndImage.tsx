import Markdown from '@/components/ui/markdown';
import styles from './HeroHeaderAndImage.module.scss';
import type { HeroHeaderAndImageTypes } from './HeroHeaderAndImage.types';
import Button from '@/components/ui/Button';
import Pricing from '@/components/ui/Pricing';
import Img from '@/components/ui/image';

export default function HeroHeaderAndImage({ index, heading, paragraph, img, cta }: HeroHeaderAndImageTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;

  return (
    <section className={styles.section}>
      <Img data={img} sizes='' />
      <div className='max-width'>
        <Heading className={styles.heading}>{heading}</Heading>
        <Markdown.p className={styles.paragraph}>{paragraph}</Markdown.p>
        <Pricing fullPrice={150} discountPrice={50} smallestPriceMonth={79} />
        <nav className={styles.nav}>
          <Button href={cta.href}>{cta.text}</Button>
          <Button href='#plan'>Zobacz plan kursu</Button>
        </nav>
        <p className={styles.ctaText}>Zostaniesz przekierowany na stronę EasyCart</p>
      </div>
    </section>
  );
}
