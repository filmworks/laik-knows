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
    width='2428'
    height='2465'
    viewBox='0 0 2428 2465'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_f_6252_2063)'>
      <path
        d='M1764.33 1184.64C1874.63 1020.52 1706.78 899.701 1609.07 859.804C1503.94 910.049 1299.58 1033.9 1323.1 1127.35C1352.51 1244.17 1115.05 1343.48 1213.35 1433.16C1311.66 1522.85 1425.15 1401.56 1417.35 1591.59C1409.56 1781.63 1867.65 1577.5 1825.77 1489.86C1783.88 1402.22 1626.45 1389.79 1764.33 1184.64Z'
        fill='#0076B7'
      />
    </g>
    <g style={{ mixBlendMode: 'color' }}>
      <g filter='url(#filter1_f_6252_2063)'>
        <path
          d='M1282.78 1550.21L1645.81 1580.27L1694.85 1306.39L1561.93 1075.7L1287.06 1194.36L1282.78 1550.21Z'
          fill='#22D3EE'
        />
        <path
          d='M1282.78 1550.21L1645.81 1580.27L1694.85 1306.39L1561.93 1075.7L1287.06 1194.36L1282.78 1550.21Z'
          stroke='#FF0518'
          strokeWidth='100'
        />
      </g>
      <g filter='url(#filter2_f_6252_2063)'>
        <path
          d='M1010.59 1476.24C843.005 1568.92 784.095 1276.59 775.588 1118.84L763.718 1116.71L770.576 472.765C868.133 446.525 1111.51 419.471 1304.55 521.182C1545.84 648.321 1220.08 1360.4 1010.59 1476.24Z'
          fill='url(#paint0_linear_6252_2063)'
        />
        <path
          d='M1010.59 1476.24C843.005 1568.92 784.095 1276.59 775.588 1118.84L763.718 1116.71L770.576 472.765C868.133 446.525 1111.51 419.471 1304.55 521.182C1545.84 648.321 1220.08 1360.4 1010.59 1476.24Z'
          stroke='black'
        />
      </g>
      <g filter='url(#filter3_f_6252_2063)'>
        <path
          d='M960.483 1020.69C959.829 1133.82 1373.94 1480.37 1581.07 1639.51L1512.65 1803.75C1430.36 1740.47 1223.84 1605.95 1056.04 1574.09C846.3 1534.27 961.302 879.282 960.483 1020.69Z'
          fill='#1D4ED8'
        />
      </g>
      <g filter='url(#filter4_f_6252_2063)'>
        <path
          d='M1190.84 1444.3C1194.35 1333.49 1562.94 1433.03 1746.79 1496.65C1720.71 1642.31 1662.5 1953.78 1638.27 2034.38C1607.98 2135.12 1403.64 1890.28 1307.12 1813.57C1210.6 1736.85 1431.3 1690.16 1432.55 1604.63C1433.8 1519.1 1186.46 1582.8 1190.84 1444.3Z'
          fill='url(#paint1_linear_6252_2063)'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2063'
        x='889.36'
        y='559.804'
        width='1239.11'
        height='1410.18'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2063' />
      </filter>
      <filter
        id='filter1_f_6252_2063'
        x='932.224'
        y='712.14'
        width='1115.06'
        height='1221.72'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2063' />
      </filter>
      <filter
        id='filter2_f_6252_2063'
        x='463.214'
        y='148.147'
        width='1227.16'
        height='1646.37'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2063' />
      </filter>
      <filter
        id='filter3_f_6252_2063'
        x='629.752'
        y='700.734'
        width='1251.32'
        height='1403.01'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2063' />
      </filter>
      <filter
        id='filter4_f_6252_2063'
        x='890.785'
        y='1094.46'
        width='1156.01'
        height='1263.87'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2063' />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2063'
        x1='1340.56'
        y1='1032.69'
        x2='691.144'
        y2='916.414'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6252_2063'
        x1='1698.48'
        y1='1766.5'
        x2='1150.23'
        y2='1668.34'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
