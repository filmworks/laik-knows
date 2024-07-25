import CtaButtonRow from '@/components/ui/CtaButtonRow';
import Pricing from '@/components/ui/Pricing';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './AdvantagesCta.module.scss';
import type { AdvantagesCtaTypes } from './AdvantagesCta.types';

export default function AdvantagesCta({ heading, paragraph, img, course, cta, details }: AdvantagesCtaTypes) {
  return (
    <section className={`${styles.section} max-width`}>
      <Img data={img} sizes='' />
      <div>
        <Markdown.h2>{heading}</Markdown.h2>
        <Markdown.p>{paragraph}</Markdown.p>
        <Pricing {...course} />
        <CtaButtonRow cta={cta} details={details} />
      </div>
    </section>
  );
}
