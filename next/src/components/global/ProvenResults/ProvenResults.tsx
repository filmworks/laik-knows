import Counter from '@/components/ui/Counter';
import Markdown from '@/components/ui/markdown';
import styles from './ProvenResults.module.scss';
import { ProvenResultsTypes } from './ProvenResults.types';

export default function ProvenResults({ heading, list, index }: ProvenResultsTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;

  return (
    <section className={styles.section}>
      <div className='max-width'>
        <Heading>{heading}</Heading>
        <ul className={styles.list}>
          {list.map(({ value, description }, i) => (
            <li className={styles.item} key={i}>
              <div className={styles.percent}>
                <Counter value={value} />
              </div>
              <Markdown.p>{description}</Markdown.p>
            </li>
          ))}
        </ul>
      </div>
      <BlobIcon />
    </section>
  );
}

const BlobIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={1810}
    height={2397}
    fill='none'
    viewBox='0 0 1810 2397'
    className='blob'
  >
    <g filter='url(#filter0_f_6252_2015)'>
      <path
        fill='#0076B7'
        d='M1415 1372c170-101 71-282 0-360-116 0-354 24-373 118-24 118-281 105-231 229 50 123 204 62 115 230-89 169 413 182 413 85s-137-176 76-302Z'
      />
    </g>
    <g>
      <g filter='url(#filter1_f_6252_2015)'>
        <path fill='#22D3EE' d='m823 1494 314 184 163-226-21-266-299-11-157 319Z' />
        <path stroke='#FF0518' strokeWidth={100} d='m823 1494 314 184 163-226-21-266-299-11-157 319Z' />
      </g>
      <g filter='url(#filter2_f_6252_2015)'>
        <path
          fill='url(#paint0_linear_6252_2015)'
          d='M609 1310c-191 11-118-278-58-424l-9-7 283-578c100 19 331 99 461 274 163 219-438 721-677 735Z'
        />
        <path
          stroke='#000'
          d='M609 1310c-191 11-118-278-58-424l-9-7 283-578c100 19 331 99 461 274 163 219-438 721-677 735Z'
        />
      </g>
      <g filter='url(#filter3_f_6252_2015)'>
        <path
          fill='#1D4ED8'
          d='M760 877c-49 102 175 593 294 826l-133 119c-47-93-175-303-313-404-172-127 214-668 152-541Z'
        />
      </g>
      <g filter='url(#filter4_f_6252_2015)'>
        <path
          fill='url(#paint1_linear_6252_2015)'
          d='M786 1359c51-99 340 150 479 287-87 120-274 376-330 438-71 78-150-231-204-342s166-58 204-134c38-77-213-126-149-249Z'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2015'
        width={1304.75}
        height={1322.61}
        x={504.29}
        y={711.898}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2015' stdDeviation={150} />
      </filter>
      <filter
        id='filter1_f_6252_2015'
        width={1193.63}
        height={1220.21}
        x={457.457}
        y={823.68}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2015' stdDeviation={150} />
      </filter>
      <filter
        id='filter2_f_6252_2015'
        width={1429.04}
        height={1610.27}
        x={185.364}
        y={0.549774}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2015' stdDeviation={150} />
      </filter>
      <filter
        id='filter3_f_6252_2015'
        width={1090.04}
        height={1563.84}
        x={263.487}
        y={558.146}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2015' stdDeviation={150} />
      </filter>
      <filter
        id='filter4_f_6252_2015'
        width={1141.86}
        height={1360.24}
        x={422.787}
        y={1036.42}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2015' stdDeviation={150} />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2015'
        x1={1098.21}
        x2={562.421}
        y1={1052.09}
        y2={667.133}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6252_2015'
        x1={1104.69}
        x2={652.364}
        y1={1868.52}
        y2={1543.53}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
