import Button from '@/components/ui/Button';
import OpenVideoBox from '@/components/ui/OpenVideoBox';
import Pricing from '@/components/ui/Pricing';
import getLegalLink from '@/components/ui/get-legal-link';
import Markdown from '@/components/ui/markdown';
import styles from './CourseDetails.module.scss';
import type { CourseDetailsTypes } from './CourseDetails.types';
import DetailsAccordion from './DetailsAccordion';

export default async function CourseDetails({ heading, video, img, cta, list, course }: CourseDetailsTypes) {
  const { privacyPolicy } = await getLegalLink();
  const _list = list.map(props => ({
    ...props,
    heading: <Markdown.h3>{props.heading}</Markdown.h3>,
    paragraph: <Markdown.p>{props.paragraph}</Markdown.p>,
    form: {
      ...props.form,
      heading: <Markdown.h4>{props.form.heading}</Markdown.h4>,
      paragraph: <Markdown.p>{props.form.paragraph}</Markdown.p>,
      privacyLink: privacyPolicy,
    },
  }));
  return (
    <section className={`${styles.section} max-width`}>
      <Markdown.h2>{heading}</Markdown.h2>
      <div className={styles.container}>
        <DetailsAccordion list={_list} />
        <div className={styles.col}>
          <div>
            <OpenVideoBox img={img} video={video} />
          </div>
          <div className={styles.box}>
            <Pricing {...course} />
            <Button data={cta.button} />
            <Markdown.p className={styles.ctaText}>{cta.paragraph}</Markdown.p>
          </div>
        </div>
      </div>
    </section>
  );
}
