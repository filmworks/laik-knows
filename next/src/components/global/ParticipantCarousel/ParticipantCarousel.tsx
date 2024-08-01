import Markdown from '@/components/ui/markdown';
import styles from './ParticipantCarousel.module.scss';
import type { ParticipantCarouselTypes } from './ParticipantCarousel.types';
import Carousel from './_Carousel';

export default function ParticipantCarousel({ heading, list, index }: ParticipantCarouselTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;
  return (
    <section className={styles.section}>
      <Carousel LeftArrowIcon={LeftArrowIcon} RightArrowIcon={RightArrowIcon} list={list}>
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
    xmlns='http://www.w3.org/2000/svg'
    width={1356}
    height={1200}
    fill='none'
    viewBox='0 0 1356 1200'
  >
    <g filter='url(#filter0_f_6252_2077)'>
      <path
        fill='#0076B7'
        d='M780 450c30-111-85-146-146-149-49 47-138 153-107 201 38 58-74 157-4 188 71 31 111-57 142 49 32 106 246-92 206-132-39-41-128-18-91-157Z'
      />
    </g>
    <g>
      <g filter='url(#filter1_f_6252_2077)'>
        <path fill='#22D3EE' d='m840 705 148-179-125-125-169-15-38 187 184 132Z' />
        <path stroke='#FF0518' strokeWidth={100} d='m840 705 148-179-125-125-169-15-38 187 184 132Z' />
      </g>
      <g filter='url(#filter2_f_6252_2077)'>
        <path
          fill='url(#paint0_linear_6252_2077)'
          d='M951 834c-13 121-187 46-272-8l-6 6-333-238c22-61 96-198 220-261 154-80 407 350 391 501Z'
        />
        <path
          stroke='#000'
          d='M951 834c-13 121-187 46-272-8l-6 6-333-238c22-61 96-198 220-261 154-80 407 350 391 501Z'
        />
      </g>
      <g filter='url(#filter3_f_6252_2077)'>
        <path fill='#1D4ED8' d='M312 575c59 41 391-48 549-98l61 95c-63 20-209 79-286 155-98 94-397-204-324-152Z' />
      </g>
      <g filter='url(#filter4_f_6252_2077)'>
        <path
          fill='url(#paint1_linear_6252_2077)'
          d='M577 639c-56-42 130-198 230-270 67 66 208 210 241 252 41 53-161 70-236 92-75 23-19-109-63-141s-101 120-172 67Z'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2077'
        width={976.599}
        height={1069.51}
        x={199.393}
        y={0.613281}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2077' stdDeviation={150} />
      </filter>
      <filter
        id='filter1_f_6252_2077'
        width={1055.03}
        height={1039.96}
        x={300.154}
        y={32.626}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2077' stdDeviation={150} />
      </filter>
      <filter
        id='filter2_f_6252_2077'
        width={1212.67}
        height={1177}
        x={39.3315}
        y={22.5527}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2077' stdDeviation={150} />
      </filter>
      <filter
        id='filter3_f_6252_2077'
        width={1221.09}
        height={868.766}
        x={0.702148}
        y={176.513}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2077' stdDeviation={150} />
      </filter>
      <filter
        id='filter4_f_6252_2077'
        width={1086.83}
        height={947.343}
        x={266.703}
        y={68.5869}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2077' stdDeviation={150} />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2077'
        x1={839.665}
        x2={542.387}
        y1={500.385}
        y2={796.743}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6252_2077'
        x1={930.191}
        x2={679.222}
        y1={492.115}
        y2={742.307}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
