import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './ThreeColGrid.module.scss';
import { ThreeColGridTypes } from './ThreeColGrid.types';

export default function ThreeColGrid({ heading, list, index }: ThreeColGridTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;
  const Subheading = index === 0 ? Markdown.h2 : Markdown.h3;
  return (
    <section className={styles.section}>
      <Heading>{heading}</Heading>
      <ul className={`${styles.list} max-width`}>
        {list.map(({ heading, paragraph, img }, i) => (
          <li className={`${styles.item} ${i % 2 !== 0 ? styles.reverse : ''}`} key={i}>
            <Img
              data={img}
              sizes='(max-width: 562px) 156px, (max-width: 923px) 28vw, (max-width: 959px) 256px, (max-width: 1285px) 30vw, 381px'
            />
            <div className={styles.content}>
              <Subheading>{heading}</Subheading>
              <Markdown.p>{paragraph}</Markdown.p>
            </div>
          </li>
        ))}
      </ul>
      <BlobIcon />
    </section>
  );
}

const BlobIcon = () => (
  <svg
    className='blob'
    width='1722'
    height='1774'
    viewBox='0 0 1722 1774'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_f_6252_2022)'>
      <path
        d='M1034.1 1185.03C1181.69 1111.32 1109.6 954.565 1055.11 885.4C958.148 878.601 758.875 884.377 737.487 961.873C710.752 1058.74 497.564 1033.09 531.994 1138.63C566.424 1244.17 698.7 1202.85 614.836 1337.55C530.972 1472.25 947.411 1512.64 953.08 1431.8C958.748 1350.97 849.62 1277.16 1034.1 1185.03Z'
        fill='#0076B7'
      />
    </g>
    <g style={{ mixBlendMode: 'color' }}>
      <g filter='url(#filter1_f_6252_2022)'>
        <path
          d='M769.315 1272.78L1101.68 1261.51L1117.07 1007.96L972.061 812.895L735.421 949.664L769.315 1272.78Z'
          fill='#22D3EE'
        />
        <path
          d='M769.315 1272.78L1101.68 1261.51L1117.07 1007.96L972.061 812.895L735.421 949.664L769.315 1272.78Z'
          stroke='#FF0518'
          strokeWidth='100'
        />
      </g>
      <g filter='url(#filter2_f_6252_2022)'>
        <path
          d='M834.401 1278.84C692.28 1380.67 607.834 1121.85 583.376 979.714L572.388 979.047L510.254 394.425C595.928 360.277 813.733 309.913 999.564 381.649C1231.85 471.318 1012.05 1151.56 834.401 1278.84Z'
          fill='url(#paint0_linear_6252_2022)'
        />
        <path
          d='M834.401 1278.84C692.28 1380.67 607.834 1121.85 583.376 979.714L572.388 979.047L510.254 394.425C595.928 360.277 813.733 309.913 999.564 381.649C1231.85 471.318 1012.05 1151.56 834.401 1278.84Z'
          stroke='black'
        />
      </g>
      <g filter='url(#filter3_f_6252_2022)'>
        <path
          d='M593.706 608.485C605.12 711.133 1017.39 981.408 1222.1 1103.72L1177.49 1259.9C1096.16 1211.26 894.623 1111.2 739.095 1100.13C544.685 1086.28 579.438 480.175 593.706 608.485Z'
          fill='#1D4ED8'
        />
      </g>
      <g filter='url(#filter4_f_6252_2022)'>
        <path
          d='M713.76 760.435C705.177 659.592 1049.96 710.723 1223.42 748.893C1215.23 883.737 1195.51 1172.34 1182.09 1247.99C1165.32 1342.55 954.047 1142.24 858.389 1082.92C762.731 1023.61 957.889 957.843 949.942 880.159C941.995 802.475 724.489 886.487 713.76 760.435Z'
          fill='url(#paint1_linear_6252_2022)'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2022'
        x='228.242'
        y='583.292'
        width='1193.3'
        height='1189.99'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2022' />
      </filter>
      <filter
        id='filter1_f_6252_2022'
        x='382.309'
        y='447.313'
        width='1085.78'
        height='1177.02'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2022' />
      </filter>
      <filter
        id='filter2_f_6252_2022'
        x='209.716'
        y='44.6614'
        width='1190.76'
        height='1557.82'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2022' />
      </filter>
      <filter
        id='filter3_f_6252_2022'
        x='281.855'
        y='290.663'
        width='1240.25'
        height='1269.24'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2022' />
      </filter>
      <filter
        id='filter4_f_6252_2022'
        x='413.603'
        y='401.53'
        width='1109.82'
        height='1171.43'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2022' />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2022'
        x1='1086.51'
        y1='841.626'
        x2='485.321'
        y2='805.13'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6252_2022'
        x1='1208.25'
        y1='998.707'
        x2='700.714'
        y2='967.896'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
