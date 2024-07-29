import CtaButtonRow from '@/components/ui/CtaButtonRow';
import OpenVideoBox from '@/components/ui/OpenVideoBox';
import Pricing from '@/components/ui/Pricing';
import getLegalLink from '@/components/ui/get-legal-link';
import Markdown from '@/components/ui/markdown';
import styles from './CourseDetails.module.scss';
import type { CourseDetailsTypes } from './CourseDetails.types';
import DetailsAccordion from './DetailsAccordion';

export default async function CourseDetails({ heading, video, img, cta, list, course, index }: CourseDetailsTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;
  const Subheading = index === 0 ? Markdown.h2 : Markdown.h3;
  const TertiaryHeading = index === 0 ? Markdown.h3 : Markdown.h4;

  const { privacyPolicy } = await getLegalLink();
  const _list = list.map(props => ({
    ...props,
    heading: <Subheading>{props.heading}</Subheading>,
    paragraph: <Markdown.p>{props.paragraph}</Markdown.p>,
    form: {
      ...props.form,
      heading: <TertiaryHeading>{props.form.heading}</TertiaryHeading>,
      paragraph: <Markdown.p>{props.form.paragraph}</Markdown.p>,
      privacyLink: privacyPolicy,
    },
  }));
  return (
    <section id='plan' className={`${styles.section} max-width`}>
      <Heading>{heading}</Heading>
      <div className={styles.container}>
        <DetailsAccordion list={_list} />
        <div className={styles.col}>
          <div>
            <OpenVideoBox img={img} video={video} sizes='(max-width: 531px) 231px, (max-width: 810px) 47vw, 381px' />
          </div>
          <div className={styles.box}>
            <Pricing {...course} />
            <CtaButtonRow {...cta} />
          </div>
        </div>
      </div>
    </section>
  );
}
