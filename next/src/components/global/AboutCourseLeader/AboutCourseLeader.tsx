import SocialMedia from '@/components/ui/SocialMedia';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './AboutCourseLeader.module.scss';
import type { AboutCourseLeaderTypes } from './AboutCourseLeader.types';

export default function AboutCourseLeader({
  heading,
  paragraph,
  imgSm,
  imgLg,
  socials,
  index,
}: AboutCourseLeaderTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;

  return (
    <section className={`${styles.section} max-width`}>
      <Img data={imgLg} sizes='(max-width: 599px) 242px, (max-width: 1260px) 38vw, 484px' />
      <div className={styles.box}>
        <header>
          <Heading>{heading}</Heading>
          <Markdown.p>{paragraph}</Markdown.p>
          <SocialMedia socials={socials} />
        </header>
        <div>
          <Img data={imgSm} sizes='(max-width: 559px) 156px, (max-width: 994px) 28vw, 275px' />
        </div>
      </div>
    </section>
  );
}
