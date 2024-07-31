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
    width='1448'
    height='1439'
    viewBox='0 0 1448 1439'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_f_6252_2029)'>
      <path
        d='M785.685 447.814C691.351 312.481 546.709 406.54 486.18 470.487C493.517 567.411 528.137 763.739 607.916 773.659C707.64 786.06 713.183 1000.71 812.61 951.341C912.037 901.967 851.974 777.082 997.412 840.521C1142.85 903.96 1122.41 486.067 1041.6 492.184C960.799 498.301 903.602 616.98 785.685 447.814Z'
        fill='#0076B7'
      />
    </g>
    <g style={{ mixBlendMode: 'color' }}>
      <g filter='url(#filter1_f_6252_2029)'>
        <path
          d='M1089.95 970.5L1030.59 643.286L777.489 664.833L605.519 836.606L775.167 1050.9L1089.95 970.5Z'
          fill='#22D3EE'
        />
        <path
          d='M1089.95 970.5L1030.59 643.286L777.489 664.833L605.519 836.606L775.167 1050.9L1089.95 970.5Z'
          stroke='#FF0518'
          strokeWidth='100'
        />
      </g>
      <g filter='url(#filter2_f_6252_2029)'>
        <path
          d='M395.795 1050.06C495.702 1023.88 703.319 576.761 794.639 356.476L955.644 377.96C919.312 465.484 849.548 679.405 861.149 834.895C875.65 1029.26 270.912 1082.79 395.795 1050.06Z'
          fill='#1D4ED8'
        />
      </g>
      <g filter='url(#filter3_f_6252_2029)'>
        <path
          d='M499.113 1111.4C400.582 1134.52 401.161 785.967 413.767 608.803C548.373 597.343 836.783 574.999 913.58 577.299C1009.58 580.175 842.026 818.27 797.211 921.521C752.397 1024.77 659.022 841.216 583.312 860.347C507.603 879.478 622.276 1082.5 499.113 1111.4Z'
          fill='url(#paint0_linear_6252_2029)'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2029'
        x='186.18'
        y='78.6538'
        width='1218.4'
        height='1180.05'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2029' />
      </filter>
      <filter
        id='filter1_f_6252_2029'
        x='238.666'
        y='289.608'
        width='1208.8'
        height='1117.77'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2029' />
      </filter>
      <filter
        id='filter2_f_6252_2029'
        x='78.7983'
        y='56.4761'
        width='1176.85'
        height='1302.55'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2029' />
      </filter>
      <filter
        id='filter3_f_6252_2029'
        x='107.899'
        y='277.134'
        width='1134.89'
        height='1135.36'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2029' />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2029'
        x1='663.139'
        y1='587.572'
        x2='706.272'
        y2='1094.21'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
