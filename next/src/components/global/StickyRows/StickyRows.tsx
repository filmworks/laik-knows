import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './StickyRows.module.scss';
import type { StickyRowsTypes } from './StickyRows.types';

export default function StickyRows({ heading, rows, index }: StickyRowsTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;
  const Subheading = index === 0 ? Markdown.h2 : Markdown.h3;

  return (
    <section className={styles.section}>
      <Heading className={styles.heading}>{heading}</Heading>
      <ul>
        {rows.map(({ heading, paragraph, img }, i) => (
          <li className={styles.item} key={i}>
            <div className={styles.container}>
              <Img data={img} sizes='(max-width: 359px) 173px, (max-width: 1366px) 50vw, 667px' />
              <div className={styles.content}>
                <span className={styles.num}>{i + 1}</span>
                <div>
                  <Subheading className={styles.subheading}>{heading}</Subheading>
                  <Markdown.p>{paragraph}</Markdown.p>
                </div>
              </div>
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
    width='1158'
    height='1319'
    viewBox='0 0 1158 1319'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_f_5746_921)'>
      <path
        d='M830.374 645.842C920.47 624.008 940.718 505.582 939.579 449.099C898.794 426.461 808.391 393.162 773.063 441.072C728.902 500.961 642.796 444.02 622.904 521.12C603.011 598.221 675.513 595.225 593.378 669.791C511.242 744.357 682.678 849.077 712.14 795.998C741.603 742.918 717.753 673.136 830.374 645.842Z'
        fill='#0076B7'
      />
    </g>
    <g>
      <g filter='url(#filter1_f_5746_921)'>
        <path
          d='M526.752 798.139L700.972 906.155L655.386 990.126L536.967 1005.41L440.224 888.329L526.752 798.139Z'
          fill='#22D3EE'
        />
        <path
          d='M526.752 798.139L700.972 906.155L655.386 990.126L536.967 1005.41L440.224 888.329L526.752 798.139Z'
          stroke='#FF0518'
          strokeWidth='72.7926'
        />
      </g>
      <g filter='url(#filter2_f_5746_921)'>
        <path
          d='M364.622 1098.51C260.975 1113.63 275.416 957.503 295.593 877.548L289.612 874.302L394.09 555.595C450.087 560.56 583.766 592.033 670.51 678.197C778.941 785.903 494.18 1079.61 364.622 1098.51Z'
          fill='url(#paint0_linear_5746_921)'
        />
        <path
          d='M364.622 1098.51C260.975 1113.63 275.416 957.503 295.593 877.548L289.612 874.302L394.09 555.595C450.087 560.56 583.766 592.033 670.51 678.197C778.941 785.903 494.18 1079.61 364.622 1098.51Z'
          stroke='black'
          strokeWidth='0.727926'
        />
      </g>
      <g filter='url(#filter3_f_5746_921)'>
        <path
          d='M396.82 231.054C382.343 294.773 687.56 632.642 841.978 793.611L764.277 862.982C702.941 799.001 546.009 652.153 408.971 576.613C237.673 482.187 414.916 151.405 396.82 231.054Z'
          fill='#1D4ED8'
        />
      </g>
      <g filter='url(#filter4_f_5746_921)'>
        <path
          d='M430.053 373.677C451.61 314.949 631.36 433.732 718.54 500.464C678.7 573.852 592.196 730.346 564.902 769.213C530.785 817.796 464.819 650.357 426.748 592.123C388.676 533.888 515.182 548.077 531.041 502.487C546.901 456.897 403.106 447.087 430.053 373.677Z'
          fill='url(#paint1_linear_5746_921)'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_5746_921'
        x='352.931'
        y='198.211'
        width='805.07'
        height='830.619'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='109.189' result='effect1_foregroundBlur_5746_921' />
      </filter>
      <filter
        id='filter1_f_5746_921'
        x='173.141'
        y='533.302'
        width='794.586'
        height='729.16'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='109.189' result='effect1_foregroundBlur_5746_921' />
      </filter>
      <filter
        id='filter2_f_5746_921'
        x='62.4969'
        y='336.829'
        width='850.878'
        height='981.446'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='109.189' result='effect1_foregroundBlur_5746_921' />
      </filter>
      <filter
        id='filter3_f_5746_921'
        x='115.33'
        y='0.412384'
        width='945.025'
        height='1080.95'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='109.189' result='effect1_foregroundBlur_5746_921' />
      </filter>
      <filter
        id='filter4_f_5746_921'
        x='201.262'
        y='139.474'
        width='735.657'
        height='856.845'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='109.189' result='effect1_foregroundBlur_5746_921' />
      </filter>
      <linearGradient
        id='paint0_linear_5746_921'
        x1='609.573'
        y1='939.005'
        x2='282.376'
        y2='761.38'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_5746_921'
        x1='644.732'
        y1='636.424'
        x2='368.504'
        y2='486.47'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
