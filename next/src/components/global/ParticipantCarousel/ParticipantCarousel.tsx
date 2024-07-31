import Markdown from '@/components/ui/markdown';
import styles from './ParticipantCarousel.module.scss';
import type { ParticipantCarouselTypes } from './ParticipantCarousel.types';
import Carousel from './_Carousel';

export default function ParticipantCarousel({ heading, list, index }: ParticipantCarouselTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;
  return (
    <section className={styles.section}>
      <Carousel leftArrowIcon={LeftArrowIcon} rightArrowIcon={RightArrowIcon} list={list}>
        <Heading>{heading}</Heading>
      </Carousel>
      <BlobIcon />
    </section>
  );
}

const LeftArrowIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' width='17' height='8' fill='none'>
    <path stroke='#C3D5E2' strokeLinejoin='bevel' d='M2 4h15M4 7 1 4l3-3' />
  </svg>
);

const RightArrowIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' width='17' height='8' fill='none'>
    <path stroke='#C3D5E2' strokeLinejoin='bevel' d='M16 4H0m13-3 3 3-3 3' />
  </svg>
);

const BlobIcon = () => (
  <svg
    className='blob'
    width='1356'
    height='1200'
    viewBox='0 0 1356 1200'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_f_6252_2077)'>
      <path
        d='M780.061 450.243C809.967 339.229 694.925 304.234 633.666 300.614C585.244 347.989 496.02 454.493 526.5 501.507C564.6 560.273 452.561 659.482 523.487 690.391C594.412 721.299 634.11 633.255 665.478 739.296C696.845 845.338 910.638 647.047 871.142 606.679C831.646 566.31 742.68 589.01 780.061 450.243Z'
        fill='#0076B7'
      />
    </g>
    <g style={{ mixBlendMode: 'color' }}>
      <g filter='url(#filter1_f_6252_2077)'>
        <path
          d='M839.701 704.808L987.661 526.411L862.676 401.038L693.918 386.31L655.653 572.914L839.701 704.808Z'
          fill='#22D3EE'
        />
        <path
          d='M839.701 704.808L987.661 526.411L862.676 401.038L693.918 386.31L655.653 572.914L839.701 704.808Z'
          stroke='#FF0518'
          strokeWidth='100'
        />
      </g>
      <g filter='url(#filter2_f_6252_2077)'>
        <path
          d='M950.786 834.112C938.06 955.293 764.119 879.501 678.739 826.457L673.305 831.874L339.931 593.657C361.792 533.211 436.361 396.413 559.75 332.789C713.987 253.259 966.693 682.636 950.786 834.112Z'
          fill='url(#paint0_linear_6252_2077)'
        />
        <path
          d='M950.786 834.112C938.06 955.293 764.119 879.501 678.739 826.457L673.305 831.874L339.931 593.657C361.792 533.211 436.361 396.413 559.75 332.789C713.987 253.259 966.693 682.636 950.786 834.112Z'
          stroke='black'
        />
      </g>
      <g filter='url(#filter3_f_6252_2077)'>
        <path
          d='M312.17 574.72C370.938 616.283 702.584 526.566 861.061 476.512L921.794 572.047C858.805 591.909 713.389 650.61 635.632 726.521C538.436 821.41 238.71 522.766 312.17 574.72Z'
          fill='#1D4ED8'
        />
      </g>
      <g filter='url(#filter4_f_6252_2077)'>
        <path
          d='M577.163 639.486C520.647 597.283 706.869 441.302 807.045 368.587C873.516 435.265 1014.76 579.122 1047.97 621.127C1089.48 673.634 887.319 691.003 812.137 713.39C736.954 735.778 793.017 603.653 748.862 571.838C704.707 540.022 647.809 692.239 577.163 639.486Z'
          fill='url(#paint1_linear_6252_2077)'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2077'
        x='199.393'
        y='0.613281'
        width='976.599'
        height='1069.51'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2077' />
      </filter>
      <filter
        id='filter1_f_6252_2077'
        x='300.154'
        y='32.626'
        width='1055.03'
        height='1039.96'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2077' />
      </filter>
      <filter
        id='filter2_f_6252_2077'
        x='39.3315'
        y='22.5527'
        width='1212.67'
        height='1177'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2077' />
      </filter>
      <filter
        id='filter3_f_6252_2077'
        x='0.702148'
        y='176.513'
        width='1221.09'
        height='868.766'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2077' />
      </filter>
      <filter
        id='filter4_f_6252_2077'
        x='266.703'
        y='68.5869'
        width='1086.83'
        height='947.343'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_6252_2077' />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2077'
        x1='839.665'
        y1='500.385'
        x2='542.387'
        y2='796.743'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6252_2077'
        x1='930.191'
        y1='492.115'
        x2='679.222'
        y2='742.307'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset='1' stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
