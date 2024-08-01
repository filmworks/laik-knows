import CtaButtonRow from '@/components/ui/CtaButtonRow';
import Pricing from '@/components/ui/Pricing';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './CtaImage.module.scss';
import type { CtaImageTypes } from './CtaImage.types';

export default function CtaImage({ heading, paragraph, img, course, cta, index }: CtaImageTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;
  return (
    <section className={styles.section}>
      <div className={`${styles.container} max-width`}>
        <div className={styles.content}>
          <header>
            <Heading>{heading}</Heading>
            <Markdown.p>{paragraph}</Markdown.p>
            <Pricing {...course} />
            <CtaButtonRow {...cta} />
          </header>
        </div>
        <div className={styles.lines}>
          <Img
            data={img}
            sizes='(max-width: 559px) 360px, (max-width: 759px) 64vw, (max-width: 899px) 487px, (max-width: 1299px) 37vw, 482px'
          />
        </div>
        <BlobIcon />
      </div>
    </section>
  );
}

const BlobIcon = () => (
  <svg
    className='blob'
    width='1250'
    height='1073'
    viewBox='0 0 1250 1073'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_f_6252_2070)'>
      <path
        d='M494.564 511.538C363.16 527.268 416.377 621.478 459.411 666.617C542.602 685.475 714.694 713.791 737.538 676.193C766.093 629.194 948.392 676.313 924.719 615.105C901.045 553.897 784.679 554.913 864.628 496.912C944.577 438.91 587.923 352.005 578.439 393.844C568.955 435.683 658.819 491.876 494.564 511.538Z'
        fill='#0076B7'
      />
    </g>
    <g>
      <g filter='url(#filter1_f_6252_2070)'>
        <path
          d='M783.595 454.635L717.116 427.235L579.134 498.287L501.513 567.402L617.486 550.113L783.595 454.635Z'
          fill='#22D3EE'
        />
        <path
          d='M783.595 454.635L717.116 427.235L579.134 498.287L501.513 567.402L617.486 550.113L783.595 454.635Z'
          stroke='#FF0518'
          strokeWidth='100'
        />
      </g>
      <g filter='url(#filter2_f_6252_2070)'>
        <path
          d='M809.569 489.01C889.714 473.001 767.086 554.757 695.753 597.636L697.397 598.84L397 771.664C363.206 773.531 296.729 767.858 301.167 730.233C306.715 683.201 709.388 509.021 809.569 489.01Z'
          fill='url(#paint0_linear_6252_2070)'
        />
        <path
          d='M809.569 489.01C889.714 473.001 767.086 554.757 695.753 597.636L697.397 598.84L397 771.664C363.206 773.531 296.729 767.858 301.167 730.233C306.715 683.201 709.388 509.021 809.569 489.01Z'
          stroke='black'
        />
      </g>
      <g filter='url(#filter3_f_6252_2070)'>
        <path
          d='M609.235 614.196C661.887 583.804 730.984 468.568 758.951 414.749L850.34 374.217C839.201 395.614 822.521 442.781 844.911 460.276C872.899 482.146 543.42 652.184 609.235 614.196Z'
          fill='#1D4ED8'
        />
      </g>
      <g filter='url(#filter4_f_6252_2070)'>
        <path
          d='M754.806 488.012C702.602 517.626 667.137 471.245 655.93 444.353C729.314 406.565 886.775 325.893 929.551 305.506C983.02 280.022 914.656 356.743 900.433 382.511C886.211 408.279 815.643 409.095 775.67 432.031C735.698 454.967 820.061 450.994 754.806 488.012Z'
          fill='url(#paint1_linear_6252_2070)'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2070'
        x='111.401'
        y='82.8428'
        width='1115.43'
        height='911.846'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2070' />
      </filter>
      <filter
        id='filter1_f_6252_2070'
        x='57.6582'
        y='80.8828'
        width='1123.18'
        height='847.058'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2070' />
      </filter>
      <filter
        id='filter2_f_6252_2070'
        x='0.35498'
        y='186.588'
        width='1136.03'
        height='885.76'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2070' />
      </filter>
      <filter
        id='filter3_f_6252_2070'
        x='300.521'
        y='74.2168'
        width='849.819'
        height='845.491'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2070' />
      </filter>
      <filter
        id='filter4_f_6252_2070'
        x='355.93'
        y='0.392578'
        width='893.752'
        height='797.155'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2070' />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2070'
        x1='530.593'
        y1='590.749'
        x2='576.229'
        y2='679.373'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6252_2070'
        x1='791.882'
        y1='374.347'
        x2='830.408'
        y2='449.166'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
