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
          <Markdown>{paragraph}</Markdown>
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
    xmlns='http://www.w3.org/2000/svg'
    width={1079}
    height={1132}
    fill='none'
    viewBox='0 0 1079 1132'
  >
    <g filter='url(#filter0_f_6252_2056)'>
      <path
        fill='#0076B7'
        d='M696 573c116-32 86-154 57-211-69-18-212-42-238 11-32 65-181 17-171 97s110 69 31 154c-79 84 213 171 229 114 15-57-53-125 92-165Z'
      />
    </g>
    <g>
      <g filter='url(#filter1_f_6252_2056)'>
        <path fill='#22D3EE' d='m393 761 239 38 46-179-76-159-188 64-21 236Z' />
        <path stroke='#FF0518' strokeWidth={72.7926} d='m393 761 239 38 46-179-76-159-188 64-21 236Z' />
      </g>
      <g filter='url(#filter2_f_6252_2056)'>
        <path
          fill='url(#paint0_linear_6252_2056)'
          d='M545 904c-116 52-140-144-137-249l-8-2 37-426c66-13 229-18 352 59 153 96-99 551-244 618Z'
        />
        <path
          stroke='#000'
          strokeWidth={0.727926}
          d='M545 904c-116 52-140-144-137-249l-8-2 37-426c66-13 229-18 352 59 153 96-99 551-244 618Z'
        />
      </g>
      <g filter='url(#filter3_f_6252_2056)'>
        <path fill='#1D4ED8' d='M360 262c-6 75 251 325 380 441l-54 106a871 871 0 0 0-290-176c-137-37-28-465-36-371Z' />
      </g>
      <g filter='url(#filter4_f_6252_2056)'>
        <path
          fill='url(#paint1_linear_6252_2056)'
          d='M425 387c8-73 247 11 366 63-25 95-79 299-100 351-25 65-148-108-208-163-60-56 89-76 94-132 5-57-162-27-152-119Z'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2056'
        width={872.748}
        height={852.739}
        x={124.86}
        y={122.221}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2056' stdDeviation={109.189} />
      </filter>
      <filter
        id='filter1_f_6252_2056'
        width={800.006}
        height={861.492}
        x={135.426}
        y={197.227}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2056' stdDeviation={109.189} />
      </filter>
      <filter
        id='filter2_f_6252_2056'
        width={873.979}
        height={1130.78}
        x={181.149}
        y={0.428009}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2056' stdDeviation={109.189} />
      </filter>
      <filter
        id='filter3_f_6252_2056'
        width={850.662}
        height={997.039}
        x={107.86}
        y={29.9397}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2056' stdDeviation={109.189} />
      </filter>
      <filter
        id='filter4_f_6252_2056'
        width={802.892}
        height={893.563}
        x={206.139}
        y={140.052}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2056' stdDeviation={109.189} />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2056'
        x1={786.401}
        x2={362.012}
        y1={626.484}
        y2={516.424}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6252_2056'
        x1={744.921}
        x2={386.641}
        y1={626.303}
        y2={533.388}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
