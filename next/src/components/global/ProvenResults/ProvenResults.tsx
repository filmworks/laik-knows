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
    className='blob'
    width='1810'
    height='2397'
    viewBox='0 0 1810 2397'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_f_6252_2015)'>
      <path
        d='M1415.01 1371.94C1585.31 1271.43 1485.97 1090.03 1415.01 1011.9C1298.5 1011.9 1060.7 1035.51 1041.63 1129.97C1017.78 1248.05 760.711 1235.25 810.729 1358.56C860.747 1481.87 1015.45 1421.38 926.466 1589.47C837.48 1757.57 1338.82 1770.94 1338.82 1673.81C1338.82 1576.68 1202.14 1497.57 1415.01 1371.94Z'
        fill='#0076B7'
      />
    </g>
    <g>
      <g filter='url(#filter1_f_6252_2015)'>
        <path
          d='M822.901 1494.11L1137.48 1677.78L1299.83 1451.82L1279.38 1186.36L980.215 1174.89L822.901 1494.11Z'
          fill='#22D3EE'
        />
        <path
          d='M822.901 1494.11L1137.48 1677.78L1299.83 1451.82L1279.38 1186.36L980.215 1174.89L822.901 1494.11Z'
          stroke='#FF0518'
          strokeWidth='100'
        />
      </g>
      <g filter='url(#filter2_f_6252_2015)'>
        <path
          d='M609.221 1309.99C418.05 1321.34 490.963 1032.18 551.316 886.186L541.523 879.149L825.405 301.11C924.741 319.506 1155.99 400.049 1286.29 575.062C1449.17 793.828 848.184 1295.81 609.221 1309.99Z'
          fill='url(#paint0_linear_6252_2015)'
        />
        <path
          d='M609.221 1309.99C418.05 1321.34 490.963 1032.18 551.316 886.186L541.523 879.149L825.405 301.11C924.741 319.506 1155.99 400.049 1286.29 575.062C1449.17 793.828 848.184 1295.81 609.221 1309.99Z'
          stroke='black'
        />
      </g>
      <g filter='url(#filter3_f_6252_2015)'>
        <path
          d='M760.46 877.368C711.084 979.155 935.262 1470.4 1053.52 1703.31L920.961 1821.98C874.008 1729.41 745.687 1518.97 608.034 1417.87C435.967 1291.49 822.18 750.134 760.46 877.368Z'
          fill='#1D4ED8'
        />
      </g>
      <g filter='url(#filter4_f_6252_2015)'>
        <path
          d='M785.626 1358.9C836.571 1260.44 1126.2 1509.19 1264.65 1645.88C1178.31 1766.05 991.463 2021.97 934.846 2084.24C864.073 2162.07 785.291 1853.05 731.293 1742.21C677.296 1631.37 896.551 1684.42 934.56 1607.79C972.569 1531.16 721.944 1481.97 785.626 1358.9Z'
          fill='url(#paint1_linear_6252_2015)'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2015'
        x='504.29'
        y='711.898'
        width='1304.75'
        height='1322.61'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2015' />
      </filter>
      <filter
        id='filter1_f_6252_2015'
        x='457.457'
        y='823.68'
        width='1193.63'
        height='1220.21'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2015' />
      </filter>
      <filter
        id='filter2_f_6252_2015'
        x='185.364'
        y='0.549774'
        width='1429.04'
        height='1610.27'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2015' />
      </filter>
      <filter
        id='filter3_f_6252_2015'
        x='263.487'
        y='558.146'
        width='1090.04'
        height='1563.84'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2015' />
      </filter>
      <filter
        id='filter4_f_6252_2015'
        x='422.787'
        y='1036.42'
        width='1141.86'
        height='1360.24'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2015' />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2015'
        x1='1098.21'
        y1='1052.09'
        x2='562.421'
        y2='667.133'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6252_2015'
        x1='1104.69'
        y1='1868.52'
        x2='652.364'
        y2='1543.53'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
