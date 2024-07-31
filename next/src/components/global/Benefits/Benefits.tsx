import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './Benefits.module.scss';
import type { BenefitsTypes } from './Benefits.types';

export default function Benefits({ heading, paragraph, list, index }: BenefitsTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;
  const Subheading = index === 0 ? Markdown.h2 : Markdown.h3;

  return (
    <section className={styles.section}>
      <div className='max-width'>
        <header className={styles.header}>
          <Heading>{heading}</Heading>
          <Markdown.p>{paragraph}</Markdown.p>
        </header>
      </div>
      <div className={styles.container}>
        <ul className={`${styles.list} max-width`}>
          {list.map(({ heading, paragraph, img }, i) => (
            <li key={i} className={styles.item}>
              <div className={styles.content}>
                <Markdown.p>{paragraph}</Markdown.p>
                <Subheading>{heading}</Subheading>
              </div>
              <Img
                data={img}
                sizes='(max-width: 359px) 92vw, (max-width: 699px) 328px, (max-width: 759px) 48vw, (max-width: 959px) 371px, (max-width: 1279px) 30vw, 381px'
              />
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
    className='blob'
    width='1891'
    height='2339'
    viewBox='0 0 1891 2339'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_f_5941_2017)'>
      <path
        d='M394.924 1371.82C224.63 1271.31 323.968 1089.92 394.924 1011.78C511.437 1011.78 749.232 1035.4 768.309 1129.86C792.155 1247.93 1049.22 1235.13 999.206 1358.44C949.188 1481.75 794.484 1421.26 883.469 1589.36C972.455 1757.45 471.114 1770.83 471.114 1673.69C471.114 1576.56 607.791 1497.46 394.924 1371.82Z'
        fill='#0076B7'
      />
    </g>
    <g style={{ mixBlendMode: 'color' }}>
      <g filter='url(#filter1_f_5941_2017)'>
        <path
          d='M1068.08 1627.98L753.504 1811.65L591.153 1585.69L611.597 1320.23L910.766 1308.76L1068.08 1627.98Z'
          fill='#22D3EE'
        />
        <path
          d='M1068.08 1627.98L753.504 1811.65L591.153 1585.69L611.597 1320.23L910.766 1308.76L1068.08 1627.98Z'
          stroke='#FF0518'
          strokeWidth='100'
        />
      </g>
      <g filter='url(#filter2_f_5941_2017)'>
        <path
          d='M1296.76 1309.86C1487.93 1321.21 1415.02 1032.05 1354.66 886.057L1364.46 879.021L1080.57 300.982C981.239 319.377 749.99 399.921 619.686 574.933C456.806 793.699 1057.8 1295.68 1296.76 1309.86Z'
          fill='url(#paint0_linear_5941_2017)'
        />
        <path
          d='M1296.76 1309.86C1487.93 1321.21 1415.02 1032.05 1354.66 886.057L1364.46 879.021L1080.57 300.982C981.239 319.377 749.99 399.921 619.686 574.933C456.806 793.699 1057.8 1295.68 1296.76 1309.86Z'
          stroke='black'
        />
      </g>
      <g filter='url(#filter3_f_5941_2017)'>
        <path
          d='M1145.52 784.237C1194.9 886.025 970.718 1377.27 852.457 1610.18L985.019 1728.85C1031.97 1636.28 1160.29 1425.84 1297.95 1324.74C1470.01 1198.36 1083.8 657.004 1145.52 784.237Z'
          fill='#1D4ED8'
        />
      </g>
      <g filter='url(#filter4_f_5941_2017)'>
        <path
          d='M1157.35 1300.77C1106.41 1202.31 816.776 1451.07 678.329 1587.75C764.672 1707.93 951.515 1963.84 1008.13 2026.11C1078.9 2103.94 1157.69 1794.92 1211.68 1684.08C1265.68 1573.24 1046.43 1626.29 1008.42 1549.66C970.409 1473.03 1221.03 1423.85 1157.35 1300.77Z'
          fill='url(#paint1_linear_5941_2017)'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_5941_2017'
        x='0.895508'
        y='711.782'
        width='1304.75'
        height='1322.61'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_5941_2017' />
      </filter>
      <filter
        id='filter1_f_5941_2017'
        x='239.899'
        y='957.553'
        width='1193.63'
        height='1220.21'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_5941_2017' />
      </filter>
      <filter
        id='filter2_f_5941_2017'
        x='291.581'
        y='0.420898'
        width='1429.04'
        height='1610.27'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_5941_2017' />
      </filter>
      <filter
        id='filter3_f_5941_2017'
        x='552.457'
        y='465.016'
        width='1090.04'
        height='1563.84'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_5941_2017' />
      </filter>
      <filter
        id='filter4_f_5941_2017'
        x='378.329'
        y='978.292'
        width='1141.86'
        height='1360.24'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_5941_2017' />
      </filter>
      <linearGradient
        id='paint0_linear_5941_2017'
        x1='807.772'
        y1='1051.96'
        x2='1343.56'
        y2='667.005'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_5941_2017'
        x1='838.291'
        y1='1810.39'
        x2='1290.61'
        y2='1485.4'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
