import CtaButtonRow from '@/components/ui/CtaButtonRow';
import Pricing from '@/components/ui/Pricing';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './FeatureList.module.scss';
import type { FeatureListTypes } from './FeatureList.types';

export default function FeatureList({ heading, paragraph, list, cta, imgLg, imgSm, index, course }: FeatureListTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;

  return (
    <section className={styles.section}>
      <div className='max-width'>
        <div className={styles.content}>
          <header>
            <Heading>{heading}</Heading>
            <Markdown.p>{paragraph}</Markdown.p>
          </header>
          <ul>
            {list.map((item, i) => (
              <li key={i}>
                <ArrowRightIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Pricing {...course} />
          <CtaButtonRow {...cta} />
        </div>
        <div className={styles.images}>
          <Img data={imgSm} sizes='175px' />
          <Img
            data={imgLg}
            sizes='(max-width: 389px) 95vw, (max-width: 479px) 360px, (max-width: 599px) 65vw, (max-width: 699px) 50vw, (max-width: 1023px) 380px, (max-width: 1079px) 35vw, (max-width: 1159px) 380px, (max-width: 1290px) 30vw, 380px'
          />
        </div>
      </div>
      <BlobIcon />
    </section>
  );
}

const ArrowRightIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' fill='none'>
    <path stroke='#A7B4BC' strokeLinejoin='round' d='M20 12H5m13-3 3 3-3 3' />
  </svg>
);

const BlobIcon = () => (
  <svg
    className='blob'
    xmlns='http://www.w3.org/2000/svg'
    width={2428}
    height={2465}
    fill='none'
    viewBox='0 0 2428 2465'
  >
    <g filter='url(#filter0_f_6252_2063)'>
      <path
        fill='#0076B7'
        d='M1764 1185c111-164-57-285-155-325-105 50-309 174-286 267 30 117-208 216-110 306 99 90 212-31 204 159-7 190 451-14 409-102s-200-100-62-305Z'
      />
    </g>
    <g>
      <g filter='url(#filter1_f_6252_2063)'>
        <path fill='#22D3EE' d='m1283 1550 363 30 49-274-133-230-275 118-4 356Z' />
        <path stroke='#FF0518' strokeWidth={100} d='m1283 1550 363 30 49-274-133-230-275 118-4 356Z' />
      </g>
      <g filter='url(#filter2_f_6252_2063)'>
        <path
          fill='url(#paint0_linear_6252_2063)'
          d='M1011 1476c-168 93-227-199-235-357l-12-2 7-644c97-26 341-54 534 48 241 127-85 839-294 955Z'
        />
        <path
          stroke='#000'
          d='M1011 1476c-168 93-227-199-235-357l-12-2 7-644c97-26 341-54 534 48 241 127-85 839-294 955Z'
        />
      </g>
      <g filter='url(#filter3_f_6252_2063)'>
        <path fill='#1D4ED8' d='M960 1021c0 113 414 459 621 619l-68 164c-83-64-289-198-457-230-210-40-95-695-96-553Z' />
      </g>
      <g filter='url(#filter4_f_6252_2063)'>
        <path
          fill='url(#paint1_linear_6252_2063)'
          d='M1191 1444c3-111 372-11 556 53-26 145-84 457-109 537-30 101-234-144-331-220-96-77 124-124 126-209 1-86-247-22-242-161Z'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2063'
        width={1239.11}
        height={1410.18}
        x={889.36}
        y={559.804}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2063' stdDeviation={150} />
      </filter>
      <filter
        id='filter1_f_6252_2063'
        width={1115.06}
        height={1221.72}
        x={932.224}
        y={712.14}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2063' stdDeviation={150} />
      </filter>
      <filter
        id='filter2_f_6252_2063'
        width={1227.16}
        height={1646.37}
        x={463.214}
        y={148.147}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2063' stdDeviation={150} />
      </filter>
      <filter
        id='filter3_f_6252_2063'
        width={1251.32}
        height={1403.01}
        x={629.752}
        y={700.734}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2063' stdDeviation={150} />
      </filter>
      <filter
        id='filter4_f_6252_2063'
        width={1156.01}
        height={1263.87}
        x={890.785}
        y={1094.46}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2063' stdDeviation={150} />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2063'
        x1={1340.56}
        x2={691.144}
        y1={1032.69}
        y2={916.414}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6252_2063'
        x1={1698.48}
        x2={1150.23}
        y1={1766.5}
        y2={1668.34}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
