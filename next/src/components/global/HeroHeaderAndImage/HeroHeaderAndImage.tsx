import Button from '@/components/ui/Button';
import Pricing from '@/components/ui/Pricing';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './HeroHeaderAndImage.module.scss';
import type { HeroHeaderAndImageTypes } from './HeroHeaderAndImage.types';

export default function HeroHeaderAndImage({
  index,
  heading,
  paragraph,
  img,
  cta,
  details,
  course,
}: HeroHeaderAndImageTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;

  return (
    <section className={styles.section}>
      <Img data={img} sizes='100vw' />
      <div className='max-width'>
        <Heading className={styles.heading}>{heading}</Heading>
        <Markdown.p className={styles.paragraph}>{paragraph}</Markdown.p>
        <Pricing {...course} />
        <nav className={styles.nav}>
          <Button data={cta.button} />
          <Button href='#plan'>{details}</Button>
        </nav>
        <Markdown.p className={styles.ctaText}>{cta.paragraph}</Markdown.p>
      </div>
    </section>
  );
}
