import CtaButtonRow from '@/components/ui/CtaButtonRow';
import Pricing from '@/components/ui/Pricing';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './AdvantagesCta.module.scss';
import type { AdvantagesCtaTypes } from './AdvantagesCta.types';

export default function AdvantagesCta({ heading, paragraph, img, course, cta, index }: AdvantagesCtaTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;

  return (
    <section className={`${styles.section} max-width`}>
      <Img
        data={img}
        sizes='(max-width: 360px) 91vw, (max-width: 679px) 328px, (max-width: 768px) 48vw, (max-width: 1023px) 371px, (max-width: 1310px) 37vw, 483px'
      />
      <div>
        <Heading>{heading}</Heading>
        <Markdown.p>{paragraph}</Markdown.p>
        <Pricing {...course} />
        <CtaButtonRow {...cta} />
      </div>
    </section>
  );
}
