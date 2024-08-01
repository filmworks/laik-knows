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
          <Markdown.p>{paragraph}</Markdown.p>
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
    width='1403'
    height='1628'
    viewBox='0 0 1403 1628'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_f_6252_2042)'>
      <path
        d='M958.846 1101.08C1010.96 1092.86 900.302 904.79 838.461 811.779C779.815 762.143 668.018 679.816 690 747.589C717.477 832.306 583.804 712.511 650.211 832.9C716.618 953.29 774.261 970.589 785.677 1067.75C797.092 1164.91 1053.91 1389.23 1021.43 1311.18C988.955 1233.13 893.709 1111.35 958.846 1101.08Z'
        fill='#0076B7'
      />
    </g>
    <g>
      <g filter='url(#filter1_f_6252_2042)'>
        <path
          d='M861.257 1052.66L1047 1188.34L943.756 942.475L774.319 683.986L698.982 715.681L861.257 1052.66Z'
          fill='#22D3EE'
        />
        <path
          d='M861.257 1052.66L1047 1188.34L943.756 942.475L774.319 683.986L698.982 715.681L861.257 1052.66Z'
          stroke='#FF0518'
          strokeWidth='100'
        />
      </g>
      <g filter='url(#filter2_f_6252_2042)'>
        <path
          d='M832.731 1068.83C743.459 1035.39 596.703 817.889 534.484 713.321L525.075 705.45L301.409 301.458C363.217 338.475 531.046 455.139 707.9 625.667C928.967 838.827 944.322 1110.64 832.731 1068.83Z'
          fill='url(#paint0_linear_6252_2042)'
        />
        <path
          d='M832.731 1068.83C743.459 1035.39 596.703 817.889 534.484 713.321L525.075 705.45L301.409 301.458C363.217 338.475 531.046 455.139 707.9 625.667C928.967 838.827 944.322 1110.64 832.731 1068.83Z'
          stroke='black'
        />
      </g>
      <g filter='url(#filter3_f_6252_2042)'>
        <path
          d='M451.286 331.872C503.209 439.209 859.253 890.781 1030.79 1103.15L1074.22 1239.07C1006.05 1154.65 846.176 965.858 752.033 886.074C634.354 786.344 386.383 197.7 451.286 331.872Z'
          fill='#1D4ED8'
        />
      </g>
      <g filter='url(#filter4_f_6252_2042)'>
        <path
          d='M530.249 604.496C480.749 500.21 701.196 703.563 817.608 818.276C872.514 949.034 988.763 1227.91 1014.5 1297.37C1046.68 1384.2 836.901 1091.19 755.789 989.794C674.678 888.4 757.598 909.13 718.699 828.203C679.801 747.276 592.124 734.854 530.249 604.496Z'
          fill='url(#paint1_linear_6252_2042)'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2042'
        x='331.482'
        y='421.922'
        width='992.789'
        height='1205.45'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2042' />
      </filter>
      <filter
        id='filter1_f_6252_2042'
        x='350.732'
        y='320.356'
        width='1051.66'
        height='1240.67'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2042' />
      </filter>
      <filter
        id='filter2_f_6252_2042'
        x='0.791992'
        y='0.731445'
        width='1200.33'
        height='1372.96'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2042' />
      </filter>
      <filter
        id='filter3_f_6252_2042'
        x='140.63'
        y='12.0894'
        width='1233.59'
        height='1526.99'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2042' />
      </filter>
      <filter
        id='filter4_f_6252_2042'
        x='223.122'
        y='275.643'
        width='1094.71'
        height='1337.6'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2042' />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2042'
        x1='915.791'
        y1='969.361'
        x2='631.923'
        y2='1088.56'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6252_2042'
        x1='919.329'
        y1='1060.52'
        x2='751.207'
        y2='1131.12'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
