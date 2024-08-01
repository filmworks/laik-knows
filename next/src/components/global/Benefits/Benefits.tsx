import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './Benefits.module.scss';
import type { BenefitsTypes } from './Benefits.types';

export default function Benefits({ heading, paragraph, list, index }: BenefitsTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;
  const Subheading = index === 0 ? Markdown.h2 : Markdown.h3;

  return (
    <section className={styles.section}>
      <div className='max-width'>
        <header className={styles.header}>
          <Heading>{heading}</Heading>
          <Markdown.p>{paragraph}</Markdown.p>
        </header>
      </div>
      <div className={styles.container}>
        <ul className={`${styles.list} max-width`}>
          {list.map(({ heading, paragraph, img }, i) => (
            <li key={i} className={styles.item}>
              <div className={styles.content}>
                <Markdown.p>{paragraph}</Markdown.p>
                <Subheading>{heading}</Subheading>
              </div>
              <Img
                data={img}
                sizes='(max-width: 359px) 92vw, (max-width: 699px) 328px, (max-width: 759px) 48vw, (max-width: 959px) 371px, (max-width: 1279px) 30vw, 381px'
              />
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
    xmlns='http://www.w3.org/2000/svg'
    width={1891}
    height={2339}
    fill='none'
    viewBox='0 0 1891 2339'
  >
    <g filter='url(#a)'>
      <path
        fill='#0076B7'
        d='M395 1372c-170-101-71-282 0-360 116 0 354 23 373 118 24 118 281 105 231 228-50 124-205 63-116 231s-412 182-412 85 137-177-76-302Z'
      />
    </g>
    <g
      style={{
        mixBlendMode: 'color',
      }}
    >
      <g filter='url(#b)'>
        <path fill='#22D3EE' d='m1068 1628-314 184-163-226 21-266 299-11 157 319Z' />
        <path stroke='#FF0518' strokeWidth={100} d='m1068 1628-314 184-163-226 21-266 299-11 157 319Z' />
      </g>
      <g filter='url(#c)'>
        <path
          fill='url(#d)'
          d='M1297 1310c191 11 118-278 58-424l9-7-283-578c-100 18-331 99-461 274-163 219 438 721 677 735Z'
        />
        <path
          stroke='#000'
          d='M1297 1310c191 11 118-278 58-424l9-7-283-578c-100 18-331 99-461 274-163 219 438 721 677 735Z'
        />
      </g>
      <g filter='url(#e)'>
        <path
          fill='#1D4ED8'
          d='M1146 784c49 102-175 593-294 826l133 119c47-93 175-303 313-404 172-127-214-668-152-541Z'
        />
      </g>
      <g filter='url(#f)'>
        <path
          fill='url(#g)'
          d='M1157 1301c-51-99-340 150-479 287 87 120 274 376 330 438 71 78 150-231 204-342s-166-58-204-134c-38-77 213-126 149-249Z'
        />
      </g>
    </g>
    <defs>
      <filter
        id='a'
        width={1304.8}
        height={1322.6}
        x={0.9}
        y={711.8}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_5941_2017' stdDeviation={150} />
      </filter>
      <filter
        id='b'
        width={1193.6}
        height={1220.2}
        x={239.9}
        y={957.6}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_5941_2017' stdDeviation={150} />
      </filter>
      <filter
        id='c'
        width={1429}
        height={1610.3}
        x={291.6}
        y={0.4}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_5941_2017' stdDeviation={150} />
      </filter>
      <filter
        id='e'
        width={1090}
        height={1563.8}
        x={552.5}
        y={465}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_5941_2017' stdDeviation={150} />
      </filter>
      <filter
        id='f'
        width={1141.9}
        height={1360.2}
        x={378.3}
        y={978.3}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_5941_2017' stdDeviation={150} />
      </filter>
      <linearGradient id='d' x1={807.8} x2={1343.6} y1={1052} y2={667} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient id='g' x1={838.3} x2={1290.6} y1={1810.4} y2={1485.4} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
