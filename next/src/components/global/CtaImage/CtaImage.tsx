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
    xmlns='http://www.w3.org/2000/svg'
    width={1250}
    height={1073}
    fill='none'
    viewBox='0 0 1250 1073'
  >
    <g filter='url(#filter0_f_6252_2070)'>
      <path
        fill='#0076B7'
        d='M495 512c-132 15-79 109-36 155 84 18 256 47 279 9 28-47 210 0 187-61-24-61-140-60-60-118S588 352 578 394c-9 42 81 98-83 118Z'
      />
    </g>
    <g>
      <g filter='url(#filter1_f_6252_2070)'>
        <path fill='#22D3EE' d='m784 455-67-28-138 71-77 69 115-17 167-95Z' />
        <path stroke='#FF0518' strokeWidth={100} d='m784 455-67-28-138 71-77 69 115-17 167-95Z' />
      </g>
      <g filter='url(#filter2_f_6252_2070)'>
        <path
          fill='url(#paint0_linear_6252_2070)'
          d='M810 489c80-16-43 66-114 109l1 1-300 173c-34 2-100-4-96-42 6-47 408-221 509-241Z'
        />
        <path stroke='#000' d='M810 489c80-16-43 66-114 109l1 1-300 173c-34 2-100-4-96-42 6-47 408-221 509-241Z' />
      </g>
      <g filter='url(#filter3_f_6252_2070)'>
        <path fill='#1D4ED8' d='M609 614c53-30 122-145 150-199l91-41c-11 22-27 69-5 86 28 22-302 192-236 154Z' />
      </g>
      <g filter='url(#filter4_f_6252_2070)'>
        <path
          fill='url(#paint1_linear_6252_2070)'
          d='M755 488c-52 30-88-17-99-44 73-37 231-118 274-138 53-26-15 51-30 77-14 25-84 26-124 49s44 19-21 56Z'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2070'
        width={1115.43}
        height={911.846}
        x={111.401}
        y={82.8428}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2070' stdDeviation={150} />
      </filter>
      <filter
        id='filter1_f_6252_2070'
        width={1123.18}
        height={847.058}
        x={57.6582}
        y={80.8828}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2070' stdDeviation={150} />
      </filter>
      <filter
        id='filter2_f_6252_2070'
        width={1136.03}
        height={885.76}
        x={0.35498}
        y={186.588}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2070' stdDeviation={150} />
      </filter>
      <filter
        id='filter3_f_6252_2070'
        width={849.819}
        height={845.491}
        x={300.521}
        y={74.2168}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2070' stdDeviation={150} />
      </filter>
      <filter
        id='filter4_f_6252_2070'
        width={893.752}
        height={797.155}
        x={355.93}
        y={0.392578}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2070' stdDeviation={150} />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2070'
        x1={530.593}
        x2={576.229}
        y1={590.749}
        y2={679.373}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6252_2070'
        x1={791.882}
        x2={830.408}
        y1={374.347}
        y2={449.166}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
