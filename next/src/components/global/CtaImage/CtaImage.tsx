import CtaButtonRow from '@/components/ui/CtaButtonRow';
import Pricing from '@/components/ui/Pricing';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './CtaImage.module.scss';
import type { CtaImageTypes } from './CtaImage.types';

export default function CtaImage({ heading, paragraph, img, course, cta, index }: CtaImageTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;
  return (
    <section className={styles.section}>
      <div className={`${styles.container} max-width`}>
        <div className={styles.content}>cd 
          <header>
            <Heading>{heading}</Heading>
            <Markdown.p>{paragraph}</Markdown.p>
            <Pricing {...course} />
            <CtaButtonRow {...cta} />
          </header>
        </div>
        <div className={styles.lines}>
          <Img data={img} sizes='' />
        </div>
      </div>
    </section>
  );
}
