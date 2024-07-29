import CtaButtonRow from '@/components/ui/CtaButtonRow';
import Pricing from '@/components/ui/Pricing';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './FeatureList.module.scss';
import type { FeatureListTypes } from './FeatureList.types';

export default function FeatureList({ heading, paragraph, list, cta, imgLg, imgSm, index, course }: FeatureListTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;

  return (
    <section className={styles.section}>
      <div className='max-width'>
        <div className={styles.content}>
          <header>
            <Heading className={styles.heading}>{heading}</Heading>
            <Markdown.p>{paragraph}</Markdown.p>
          </header>
          <ul>
            {list.map((item, i) => (
              <li key={i}>
                <ArrowRightIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Pricing {...course} />
          <CtaButtonRow {...cta} />
        </div>
        <div className={styles.images}>
          <Img data={imgSm} sizes='' />
          <Img data={imgLg} sizes='' />
        </div>
      </div>
    </section>
  );
}

const ArrowRightIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' fill='none'>
    <path stroke='#A7B4BC' strokeLinejoin='round' d='M20 12H5m13-3 3 3-3 3' />
  </svg>
);
