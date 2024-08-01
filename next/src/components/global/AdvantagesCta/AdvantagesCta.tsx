import CtaButtonRow from '@/components/ui/CtaButtonRow';
import Pricing from '@/components/ui/Pricing';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './AdvantagesCta.module.scss';
import type { AdvantagesCtaTypes } from './AdvantagesCta.types';

export default function AdvantagesCta({ heading, paragraph, img, course, cta, index }: AdvantagesCtaTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;

  return (
    <section className={styles.section}>
      <div className='max-width'>
        <Img
          data={img}
          sizes='(max-width: 360px) 91vw, (max-width: 679px) 328px, (max-width: 768px) 48vw, (max-width: 1023px) 371px, (max-width: 1310px) 37vw, 483px'
        />
        <div>
          <Heading>{heading}</Heading>
          <Markdown className={styles.paragraph}>{paragraph}</Markdown>
          <Pricing {...course} />
          <CtaButtonRow {...cta} />
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
    width={1403}
    height={1628}
    fill='none'
    viewBox='0 0 1403 1628'
  >
    <g filter='url(#filter0_f_6252_2042)'>
      <path
        fill='#0076B7'
        d='M959 1101c52-8-59-196-121-289-58-50-170-132-148-64 27 84-106-35-40 85 67 120 124 138 136 235 11 97 268 321 235 243-32-78-127-200-62-210Z'
      />
    </g>
    <g>
      <g filter='url(#filter1_f_6252_2042)'>
        <path fill='#22D3EE' d='m861 1053 186 135-103-246-170-258-75 32 162 337Z' />
        <path stroke='#FF0518' strokeWidth={100} d='m861 1053 186 135-103-246-170-258-75 32 162 337Z' />
      </g>
      <g filter='url(#filter2_f_6252_2042)'>
        <path
          fill='url(#paint0_linear_6252_2042)'
          d='M833 1069c-90-34-236-251-299-356l-9-8-224-404c62 37 230 154 407 325 221 213 236 485 125 443Z'
        />
        <path
          stroke='#000'
          d='M833 1069c-90-34-236-251-299-356l-9-8-224-404c62 37 230 154 407 325 221 213 236 485 125 443Z'
        />
      </g>
      <g filter='url(#filter3_f_6252_2042)'>
        <path
          fill='#1D4ED8'
          d='M451 332c52 107 408 559 580 771l43 136c-68-84-228-273-322-353-118-100-366-688-301-554Z'
        />
      </g>
      <g filter='url(#filter4_f_6252_2042)'>
        <path
          fill='url(#paint1_linear_6252_2042)'
          d='M530 604c-49-104 171 100 288 214 55 131 171 410 197 479 32 87-178-206-259-307-81-102 2-81-37-162s-127-93-189-224Z'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2042'
        width={992.789}
        height={1205.45}
        x={331.482}
        y={421.922}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2042' stdDeviation={150} />
      </filter>
      <filter
        id='filter1_f_6252_2042'
        width={1051.66}
        height={1240.67}
        x={350.732}
        y={320.356}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2042' stdDeviation={150} />
      </filter>
      <filter
        id='filter2_f_6252_2042'
        width={1200.33}
        height={1372.96}
        x={0.791992}
        y={0.731445}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2042' stdDeviation={150} />
      </filter>
      <filter
        id='filter3_f_6252_2042'
        width={1233.59}
        height={1526.99}
        x={140.63}
        y={12.0894}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2042' stdDeviation={150} />
      </filter>
      <filter
        id='filter4_f_6252_2042'
        width={1094.71}
        height={1337.6}
        x={223.122}
        y={275.643}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2042' stdDeviation={150} />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2042'
        x1={915.791}
        x2={631.923}
        y1={969.361}
        y2={1088.56}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6252_2042'
        x1={919.329}
        x2={751.207}
        y1={1060.52}
        y2={1131.12}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
