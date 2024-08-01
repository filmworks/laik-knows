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
    xmlns='http://www.w3.org/2000/svg'
    width={1230}
    height={1319}
    fill='none'
    viewBox='0 0 1230 1319'
  >
    <g filter='url(#filter0_f_6252_2049)'>
      <path
        fill='#0076B7'
        d='M902 646c90-22 111-140 110-197-41-22-132-56-167-8-44 60-130 3-150 80s53 74-30 149c-82 75 90 179 119 126 30-53 6-123 118-150Z'
      />
    </g>
    <g>
      <g filter='url(#filter1_f_6252_2049)'>
        <path fill='#22D3EE' d='m599 798 174 108-46 84-118 16-97-118 87-90Z' />
        <path stroke='#FF0518' strokeWidth={72.7926} d='m599 798 174 108-46 84-118 16-97-118 87-90Z' />
      </g>
      <g filter='url(#filter2_f_6252_2049)'>
        <path
          fill='url(#paint0_linear_6252_2049)'
          d='M437 1099c-104 15-90-141-69-221l-6-4 104-318c56 5 190 36 277 122 108 108-177 402-306 421Z'
        />
        <path
          stroke='#000'
          strokeWidth={0.727926}
          d='M437 1099c-104 15-90-141-69-221l-6-4 104-318c56 5 190 36 277 122 108 108-177 402-306 421Z'
        />
      </g>
      <g filter='url(#filter3_f_6252_2049)'>
        <path fill='#1D4ED8' d='M469 231c-15 64 291 402 445 563l-78 69c-61-64-218-211-355-286-171-95 6-425-12-346Z' />
      </g>
      <g filter='url(#filter4_f_6252_2049)'>
        <path
          fill='url(#paint1_linear_6252_2049)'
          d='M502 374c22-59 201 60 289 127-40 73-127 229-154 268-34 49-100-118-138-177-38-58 88-44 104-89 16-46-128-56-101-129Z'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2049'
        width={805.07}
        height={830.619}
        x={424.931}
        y={198.362}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2049' stdDeviation={109.189} />
      </filter>
      <filter
        id='filter1_f_6252_2049'
        width={794.586}
        height={729.16}
        x={245.141}
        y={533.452}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2049' stdDeviation={109.189} />
      </filter>
      <filter
        id='filter2_f_6252_2049'
        width={850.878}
        height={981.446}
        x={134.497}
        y={336.98}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2049' stdDeviation={109.189} />
      </filter>
      <filter
        id='filter3_f_6252_2049'
        width={945.025}
        height={1080.95}
        x={187.33}
        y={0.562775}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2049' stdDeviation={109.189} />
      </filter>
      <filter
        id='filter4_f_6252_2049'
        width={735.657}
        height={856.845}
        x={273.262}
        y={139.624}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2049' stdDeviation={109.189} />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2049'
        x1={681.573}
        x2={354.376}
        y1={939.156}
        y2={761.531}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6252_2049'
        x1={716.732}
        x2={440.504}
        y1={636.575}
        y2={486.62}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
