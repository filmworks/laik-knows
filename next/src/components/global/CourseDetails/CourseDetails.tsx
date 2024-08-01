import CtaButtonRow from '@/components/ui/CtaButtonRow';
import OpenVideoBox from '@/components/ui/OpenVideoBox';
import Pricing from '@/components/ui/Pricing';
import getLegalLink from '@/components/ui/get-legal-link';
import Markdown from '@/components/ui/markdown';
import styles from './CourseDetails.module.scss';
import type { CourseDetailsTypes } from './CourseDetails.types';
import DetailsAccordion from './DetailsAccordion';

export default async function CourseDetails({
  heading,
  video,
  img,
  cta,
  list,
  course,
  index,
  email,
}: CourseDetailsTypes) {
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
    <section id='plan' className={styles.section}>
      <div className='max-width'>
        <Heading>{heading}</Heading>
        <div className={styles.container}>
          <DetailsAccordion email={email} list={_list} />
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
      </div>
      <BlobIcon />
    </section>
  );
}

const BlobIcon = () => (
  <svg
    className='blob'
    xmlns='http://www.w3.org/2000/svg'
    width={1448}
    height={1439}
    fill='none'
    viewBox='0 0 1448 1439'
  >
    <g filter='url(#filter0_f_6252_2029)'>
      <path
        fill='#0076B7'
        d='M786 448c-95-136-239-41-300 22 8 97 42 294 122 304 100 12 105 227 205 177 99-49 39-174 184-110 146 63 125-355 45-349-81 6-138 125-256-44Z'
      />
    </g>
    <g>
      <g filter='url(#filter1_f_6252_2029)'>
        <path fill='#22D3EE' d='m1090 971-59-328-254 22-171 172 169 214 315-80Z' />
        <path stroke='#FF0518' strokeWidth={100} d='m1090 971-59-328-254 22-171 172 169 214 315-80Z' />
      </g>
      <g filter='url(#filter2_f_6252_2029)'>
        <path
          fill='#1D4ED8'
          d='M396 1050c100-26 307-473 399-694l161 22c-37 87-106 301-95 457 15 194-590 248-465 215Z'
        />
      </g>
      <g filter='url(#filter3_f_6252_2029)'>
        <path
          fill='url(#paint0_linear_6252_2029)'
          d='M499 1111c-98 24-98-325-85-502 134-12 423-34 500-32 96 3-72 241-117 345-45 103-138-81-214-62-75 19 39 223-84 251Z'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2029'
        width={1218.4}
        height={1180.05}
        x={186.18}
        y={78.6538}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2029' stdDeviation={150} />
      </filter>
      <filter
        id='filter1_f_6252_2029'
        width={1208.8}
        height={1117.77}
        x={238.666}
        y={289.608}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2029' stdDeviation={150} />
      </filter>
      <filter
        id='filter2_f_6252_2029'
        width={1176.85}
        height={1302.55}
        x={78.7983}
        y={56.4761}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2029' stdDeviation={150} />
      </filter>
      <filter
        id='filter3_f_6252_2029'
        width={1134.89}
        height={1135.36}
        x={107.899}
        y={277.134}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2029' stdDeviation={150} />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2029'
        x1={663.139}
        x2={706.272}
        y1={587.572}
        y2={1094.21}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
