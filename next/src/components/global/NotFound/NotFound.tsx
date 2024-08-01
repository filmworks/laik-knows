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
          <Img data={imgSm} sizes='(max-width: 549px) 156px, (max-width: 1379px) 28vw, 381px' />
        </div>
        <div className={styles.lg}>
          <Img data={imgLg} sizes='(max-width: 399px) 156px, (max-width: 1539px) 40vw, 587px' />
        </div>
      </div>
      <BlobIcon />
    </section>
  );
}

const BlobIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='blob'
    width={1785}
    height={2339}
    fill='none'
    viewBox='0 0 1785 2339'
  >
    <g filter='url(#filter0_f_6264_2084)'>
      <path
        fill='#0076B7'
        d='M529 1042c-170-101-71-282 0-360 117 0 355 23 374 118 24 118 281 105 231 229-50 123-205 62-116 230 89 169-412 182-412 85s136-176-77-302Z'
      />
    </g>
    <g>
      <g filter='url(#filter1_f_6264_2084)'>
        <path fill='#22D3EE' d='m963 1628-315 184-162-226 20-266 299-11 158 319Z' />
        <path stroke='#FF0518' strokeWidth={100} d='m963 1628-315 184-162-226 20-266 299-11 158 319Z' />
      </g>
      <g filter='url(#filter2_f_6264_2084)'>
        <path
          fill='url(#paint0_linear_6264_2084)'
          d='M1191 1310c191 11 119-278 58-424l10-7-284-578c-99 19-331 99-461 274-163 219 438 721 677 735Z'
        />
        <path
          stroke='#000'
          d='M1191 1310c191 11 119-278 58-424l10-7-284-578c-99 19-331 99-461 274-163 219 438 721 677 735Z'
        />
      </g>
      <g filter='url(#filter3_f_6264_2084)'>
        <path
          fill='#1D4ED8'
          d='M1040 784c49 102-175 593-293 826l133 119c46-93 175-303 312-404 173-126-214-668-152-541Z'
        />
      </g>
      <g filter='url(#filter4_f_6264_2084)'>
        <path
          fill='url(#paint1_linear_6264_2084)'
          d='M1052 1301c-51-99-341 150-479 287 86 120 273 376 330 438 70 78 149-231 203-342s-165-58-203-134c-38-77 213-126 149-249Z'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6264_2084'
        width={1304.75}
        height={1322.61}
        x={135.401}
        y={381.87}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6264_2084' stdDeviation={150} />
      </filter>
      <filter
        id='filter1_f_6264_2084'
        width={1193.62}
        height={1220.21}
        x={134.399}
        y={957.686}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6264_2084' stdDeviation={150} />
      </filter>
      <filter
        id='filter2_f_6264_2084'
        width={1429.03}
        height={1610.27}
        x={186.082}
        y={0.553528}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6264_2084' stdDeviation={150} />
      </filter>
      <filter
        id='filter3_f_6264_2084'
        width={1090.04}
        height={1563.84}
        x={446.956}
        y={465.149}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6264_2084' stdDeviation={150} />
      </filter>
      <filter
        id='filter4_f_6264_2084'
        width={1141.86}
        height={1360.24}
        x={272.828}
        y={978.425}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6264_2084' stdDeviation={150} />
      </filter>
      <linearGradient
        id='paint0_linear_6264_2084'
        x1={702.273}
        x2={1238.06}
        y1={1052.1}
        y2={667.137}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6264_2084'
        x1={732.791}
        x2={1185.11}
        y1={1810.52}
        y2={1485.53}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
