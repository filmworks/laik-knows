import CtaButtonRow from '@/components/ui/CtaButtonRow';
import Pricing from '@/components/ui/Pricing';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './HeroHeaderAndImage.module.scss';
import type { HeroHeaderAndImageTypes } from './HeroHeaderAndImage.types';
import Background from './_Background';

export default function HeroHeaderAndImage({
  index,
  heading,
  paragraph,
  img,
  cta,
  course,
  video,
}: HeroHeaderAndImageTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;

  return (
    <section className={styles.section} data-first={index === 0}>
      {video ? <Background video={video} img={img} /> : <Img data={img} priority sizes='100vw' />}
      <div className='max-width'>
        <Heading>{heading}</Heading>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        <Pricing {...course} />
        <CtaButtonRow {...cta} />
      </div>
    </section>
  );
}
