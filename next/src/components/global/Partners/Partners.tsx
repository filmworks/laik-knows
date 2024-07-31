import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './Partners.module.scss';
import type { PartnersTypes } from './Partners.types';

export default function Partners({ heading, paragraph, list, index }: PartnersTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;

  return (
    <section className={styles.section}>
      <div className='max-width'>
        <header>
          <Heading>{heading}</Heading>
          <Markdown.p>{paragraph}</Markdown.p>
        </header>
      </div>
      <div className={styles.container}>
        <ul className='max-width'>
          {list.map(({ name, href, img }, i) => (
            <li key={i}>
              <a href={href} target='_blank' rel='noreferrer' aria-label={`Przejdź do strony ${name}`}>
                <Img data={img} sizes='(max-width: 1023px) 35vw, (max-width: 1286px) 25vw, 313px' />
              </a>
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
    width='1079'
    height='1132'
    viewBox='0 0 1079 1132'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_f_6252_2056)'>
      <path
        d='M695.926 573.358C811.657 541.321 782.059 419.265 752.794 362.242C684.473 343.839 541.307 320.127 515.201 372.502C482.569 437.971 333.852 389.864 343.705 470.069C353.558 550.274 453.827 539.239 375.098 623.75C296.369 708.262 588.228 795.291 603.57 738.334C618.913 681.377 551.263 613.405 695.926 573.358Z'
        fill='#0076B7'
      />
    </g>
    <g style={{ mixBlendMode: 'color' }}>
      <g filter='url(#filter1_f_6252_2056)'>
        <path
          d='M393.058 760.78L632.073 799.156L678.489 620.175L602.144 460.562L413.983 525.211L393.058 760.78Z'
          fill='#22D3EE'
        />
        <path
          d='M393.058 760.78L632.073 799.156L678.489 620.175L602.144 460.562L413.983 525.211L393.058 760.78Z'
          stroke='#FF0518'
          strokeWidth='72.7926'
        />
      </g>
      <g filter='url(#filter2_f_6252_2056)'>
        <path
          d='M545.215 903.608C429.46 956.496 405.289 759.802 407.673 654.844L399.916 652.833L437.199 226.502C503.174 214.075 665.809 208.523 788.544 285.731C941.962 382.241 689.91 837.498 545.215 903.608Z'
          fill='url(#paint0_linear_6252_2056)'
        />
        <path
          d='M545.215 903.608C429.46 956.496 405.289 759.802 407.673 654.844L399.916 652.833L437.199 226.502C503.174 214.075 665.809 208.523 788.544 285.731C941.962 382.241 689.91 837.498 545.215 903.608Z'
          stroke='black'
          strokeWidth='0.727926'
        />
      </g>
      <g filter='url(#filter3_f_6252_2056)'>
        <path
          d='M360.405 261.678C354.22 336.604 610.987 587.281 740.144 703.254L686.455 808.6C635.15 762.489 505.149 662.855 395.588 633.215C258.637 596.166 368.137 168.021 360.405 261.678Z'
          fill='#1D4ED8'
        />
      </g>
      <g filter='url(#filter4_f_6252_2056)'>
        <path
          d='M424.944 387.002C432.9 313.761 672.065 398.454 790.654 449.956C765.968 545.144 711.558 748.563 691.406 800.734C666.215 865.948 543.266 693.329 483.215 637.59C423.164 581.85 571.77 562.133 576.946 505.526C582.121 448.919 414.999 478.552 424.944 387.002Z'
          fill='url(#paint1_linear_6252_2056)'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2056'
        x='124.86'
        y='122.221'
        width='872.748'
        height='852.739'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='109.189' result='effect1_foregroundBlur_6252_2056' />
      </filter>
      <filter
        id='filter1_f_6252_2056'
        x='135.426'
        y='197.227'
        width='800.006'
        height='861.492'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='109.189' result='effect1_foregroundBlur_6252_2056' />
      </filter>
      <filter
        id='filter2_f_6252_2056'
        x='181.149'
        y='0.428009'
        width='873.979'
        height='1130.78'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='109.189' result='effect1_foregroundBlur_6252_2056' />
      </filter>
      <filter
        id='filter3_f_6252_2056'
        x='107.86'
        y='29.9397'
        width='850.662'
        height='997.039'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='109.189' result='effect1_foregroundBlur_6252_2056' />
      </filter>
      <filter
        id='filter4_f_6252_2056'
        x='206.139'
        y='140.052'
        width='802.892'
        height='893.563'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='109.189' result='effect1_foregroundBlur_6252_2056' />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2056'
        x1='786.401'
        y1='626.484'
        x2='362.012'
        y2='516.424'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6252_2056'
        x1='744.921'
        y1='626.303'
        x2='386.641'
        y2='533.388'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
