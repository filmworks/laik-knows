import Markdown from '@/components/ui/markdown';
import styles from './Hero.module.scss';
import type { HeroTypes } from './Hero.types';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import hero from '@/public/woman-in-makeup-posing.webp';
import Pricing from '@/components/ui/Pricing';

export default function Hero({
  index,
  heading,
  paragraph,
  img,
  fullPrice,
  discountPrice,
  smallestPriceMonth,
  cta,
  ctaText,
}: HeroTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;

  return (
    <section className={styles.section}>
      <Image src={hero} alt='' sizes='' />
      <div className='max-width'>
        <Heading className={styles.heading}>{heading}</Heading>
        <Markdown.p className={styles.paragraph}>{paragraph}</Markdown.p>
        <Pricing {...{ fullPrice, discountPrice, smallestPriceMonth }} />
        <nav className={styles.nav}>
          <Button href={cta.href}>{cta.text}</Button>
          <Button href='#plan'>Zobacz plan kursu</Button>
        </nav>
        <p className={styles.ctaText}>{ctaText}</p>
      </div>
    </section>
  );
}
