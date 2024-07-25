import SocialMedia from '@/components/ui/SocialMedia';
import styles from './AboutCourseLeader.module.scss';
import type { AboutCourseLeaderTypes } from './AboutCourseLeader.types';
import Markdown from '@/components/ui/markdown';
import Img from '@/components/ui/image';

export default function AboutCourseLeader({ heading, paragraph, imgSm, imgLg, socials }: AboutCourseLeaderTypes) {
  return (
    <section className={`${styles.section} max-width`}>
      <Img data={imgLg} sizes='' />
      <div className={styles.box}>
        <header>
          <Markdown.h2>{heading}</Markdown.h2>
          <Markdown.p>{paragraph}</Markdown.p>
          <SocialMedia socials={socials} />
        </header>
        <div>
          <Img data={imgSm} sizes='' />
        </div>
      </div>
    </section>
  );
}
