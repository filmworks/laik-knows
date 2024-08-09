import CtaButtonRow from '@/components/ui/CtaButtonRow';
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
  course,
  video,
}: HeroHeaderAndImageTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;

  return (
    <section className={styles.section} data-first={index === 0}>
      {video ? (
        <div className={styles.video}>
          <iframe
            title='Twórz profesjonalne kursy video'
            src={`https://player.vimeo.com/video/${video}?h=8f0ffe497b&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&dnt=1`}
            allow='autoplay; fullscreen'
          ></iframe>
        </div>
      ) : (
        <Img data={img} sizes='100vw' />
      )}

      <div className='max-width'>
        <Heading>{heading}</Heading>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        <Pricing {...course} />
        <CtaButtonRow {...cta} />
      </div>
    </section>
  );
}
