import Button from '@/components/ui/Button';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './NotFound.module.scss';
import type { NotFoundTypes } from './NotFound.types';

export default function NotFound({ heading, paragraph, cta, imgLg, imgSm }: NotFoundTypes) {
  return (
    <section className={`${styles.section} max-width`}>
      <header>
        <Markdown.h1>{heading}</Markdown.h1>
        <Markdown.p>{paragraph}</Markdown.p>
        <Button data={cta} />
      </header>
      <div className={styles.images}>
        <div className={styles.sm}>
          <Img data={imgSm} sizes='' />
        </div>
        <div className={styles.lg}>
          <Img data={imgLg} sizes='' />
        </div>
      </div>
      <BlobIcon />
    </section>
  );
}

const BlobIcon = () => (
  <svg width='1785' height='2339' viewBox='0 0 1785 2339' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g filter='url(#filter0_f_6264_2084)'>
      <path
        d='M529.429 1041.91C359.135 941.4 458.473 760.004 529.429 681.87C645.942 681.87 883.738 705.485 902.814 799.944C926.66 918.017 1183.73 905.221 1133.71 1028.53C1083.69 1151.84 928.989 1091.35 1017.97 1259.44C1106.96 1427.54 605.619 1440.92 605.619 1343.78C605.619 1246.65 742.297 1167.54 529.429 1041.91Z'
        fill='#0076B7'
      />
    </g>
    <g style={{ mixBlendMode: 'color' }}>
      <g filter='url(#filter1_f_6264_2084)'>
        <path
          d='M962.58 1628.11L648.004 1811.79L485.653 1585.83L506.097 1320.37L805.266 1308.89L962.58 1628.11Z'
          fill='#22D3EE'
        />
        <path
          d='M962.58 1628.11L648.004 1811.79L485.653 1585.83L506.097 1320.37L805.266 1308.89L962.58 1628.11Z'
          stroke='#FF0518'
          strokeWidth='100'
        />
      </g>
      <g filter='url(#filter2_f_6264_2084)'>
        <path
          d='M1191.26 1310C1382.43 1321.34 1309.52 1032.19 1249.16 886.189L1258.96 879.153L975.075 301.114C875.739 319.509 644.491 400.053 514.186 575.066C351.306 793.831 952.296 1295.81 1191.26 1310Z'
          fill='url(#paint0_linear_6264_2084)'
        />
        <path
          d='M1191.26 1310C1382.43 1321.34 1309.52 1032.19 1249.16 886.189L1258.96 879.153L975.075 301.114C875.739 319.509 644.491 400.053 514.186 575.066C351.306 793.831 952.296 1295.81 1191.26 1310Z'
          stroke='black'
        />
      </g>
      <g filter='url(#filter3_f_6264_2084)'>
        <path
          d='M1040.02 784.37C1089.4 886.157 865.218 1377.41 746.957 1610.31L879.519 1728.99C926.472 1636.41 1054.79 1425.98 1192.45 1324.87C1364.51 1198.5 978.3 657.136 1040.02 784.37Z'
          fill='#1D4ED8'
        />
      </g>
      <g filter='url(#filter4_f_6264_2084)'>
        <path
          d='M1051.85 1300.9C1000.91 1202.44 711.276 1451.2 572.829 1587.88C659.172 1708.06 846.015 1963.97 902.632 2026.24C973.405 2104.08 1052.19 1795.05 1106.18 1684.21C1160.18 1573.38 940.927 1626.42 902.918 1549.79C864.909 1473.17 1115.53 1423.98 1051.85 1300.9Z'
          fill='url(#paint1_linear_6264_2084)'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6264_2084'
        x='135.401'
        y='381.87'
        width='1304.75'
        height='1322.61'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6264_2084' />
      </filter>
      <filter
        id='filter1_f_6264_2084'
        x='134.399'
        y='957.686'
        width='1193.62'
        height='1220.21'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6264_2084' />
      </filter>
      <filter
        id='filter2_f_6264_2084'
        x='186.082'
        y='0.553528'
        width='1429.03'
        height='1610.27'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6264_2084' />
      </filter>
      <filter
        id='filter3_f_6264_2084'
        x='446.956'
        y='465.149'
        width='1090.04'
        height='1563.84'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6264_2084' />
      </filter>
      <filter
        id='filter4_f_6264_2084'
        x='272.828'
        y='978.425'
        width='1141.86'
        height='1360.24'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6264_2084' />
      </filter>
      <linearGradient
        id='paint0_linear_6264_2084'
        x1='702.273'
        y1='1052.1'
        x2='1238.06'
        y2='667.137'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6264_2084'
        x1='732.791'
        y1='1810.52'
        x2='1185.11'
        y2='1485.53'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
