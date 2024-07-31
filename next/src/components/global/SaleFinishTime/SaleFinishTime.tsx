import Markdown from '@/components/ui/markdown';
import styles from './SaleFinishTime.module.scss';
import type { SaleFinishTimeTypes } from './SaleFinishTime.types';
import Counter from './_Counter';

export default function SaleFinishTime({ heading, course, index }: SaleFinishTimeTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;
  const duration = new Date(course.saleFinishDate).getTime() - new Date().getTime();

  return (
    <section className={styles.section}>
      <div className='max-width'>
        <div className={styles.content}>
          <Heading>{heading}</Heading>
          <Counter duration={duration} />
        </div>
      </div>
      <BlobIcon />
    </section>
  );
}

const BlobIcon = () => (
  <svg
    className='blob'
    width='2102'
    height='1313'
    viewBox='0 0 2102 1313'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_f_6252_2035)'>
      <path
        d='M1183.87 429.457C1183.04 376.71 981.315 459.91 880.555 508.104C823.189 559.214 726.004 658.367 796.189 646.102C883.921 630.77 746.572 746.332 875.081 697.456C1003.59 648.579 1028.8 593.93 1126.6 596.246C1224.4 598.562 1482.51 375.72 1400.68 396.938C1318.84 418.156 1184.91 495.39 1183.87 429.457Z'
        fill='#0076B7'
      />
    </g>
    <g style={{ mixBlendMode: 'color' }}>
      <g filter='url(#filter1_f_6252_2035)'>
        <path
          d='M1051.7 615.334L1301.74 412.371L1585.46 337.831L1691.45 374.898L1374.96 552.549L1051.7 615.334Z'
          fill='#22D3EE'
        />
        <path
          d='M1051.7 615.334L1301.74 412.371L1585.46 337.831L1691.45 374.898L1374.96 552.549L1051.7 615.334Z'
          stroke='#FF0518'
          strokeWidth='100'
        />
      </g>
      <g filter='url(#filter2_f_6252_2035)'>
        <path
          d='M921.514 687.184C722.559 819.651 798.517 858.781 861.366 861.787L851.176 870.971L1146.77 850.902C1250.14 774.424 1490.78 584.514 1626.34 436.702C1795.8 251.936 1170.21 521.601 921.514 687.184Z'
          fill='url(#paint0_linear_6252_2035)'
        />
        <path
          d='M921.514 687.184C722.559 819.651 798.517 858.781 861.366 861.787L851.176 870.971L1146.77 850.902C1250.14 774.424 1490.78 584.514 1626.34 436.702C1795.8 251.936 1170.21 521.601 921.514 687.184Z'
          stroke='black'
        />
      </g>
      <g filter='url(#filter3_f_6252_2035)'>
        <path
          d='M1544.62 600.217C1442.39 619.773 1446.82 441.197 1461.81 349.464L1261.89 416.526C1255.99 452.957 1219.34 548.511 1119.92 639.276C995.641 752.732 1672.4 575.772 1544.62 600.217Z'
          fill='#1D4ED8'
        />
      </g>
      <g filter='url(#filter4_f_6252_2035)'>
        <path
          d='M632.285 877.71C691.967 870.21 973.219 602.799 1106.38 470.031C1008.59 495.725 797.257 552.475 734.316 573.919C655.64 600.725 596.464 740.563 548.656 808.339C500.848 876.114 723.472 711.284 768.226 706.57C812.981 701.856 557.684 887.085 632.285 877.71Z'
          fill='url(#paint1_linear_6252_2035)'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2035'
        x='471.693'
        y='95.5132'
        width='1244.77'
        height='914.079'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2035' />
      </filter>
      <filter
        id='filter1_f_6252_2035'
        x='665.502'
        y='0.652344'
        width='1407.48'
        height='957.89'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2035' />
      </filter>
      <filter
        id='filter2_f_6252_2035'
        x='492.565'
        y='74.1138'
        width='1463.09'
        height='1097.23'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2035' />
      </filter>
      <filter
        id='filter3_f_6252_2035'
        x='804.603'
        y='49.4644'
        width='1056.16'
        height='928.14'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2035' />
      </filter>
      <filter
        id='filter4_f_6252_2035'
        x='241.968'
        y='170.031'
        width='1164.42'
        height='1008.02'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2035' />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2035'
        x1='1430.47'
        y1='420.395'
        x2='1517.96'
        y2='753.38'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6252_2035'
        x1='925.204'
        y1='517.632'
        x2='994.847'
        y2='782.706'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
