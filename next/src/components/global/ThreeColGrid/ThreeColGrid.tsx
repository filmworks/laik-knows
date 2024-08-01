import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './ThreeColGrid.module.scss';
import { ThreeColGridTypes } from './ThreeColGrid.types';

export default function ThreeColGrid({ heading, list, index }: ThreeColGridTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;
  const Subheading = index === 0 ? Markdown.h2 : Markdown.h3;
  return (
    <section className={styles.section}>
      <Heading>{heading}</Heading>
      <ul className={`${styles.list} max-width`}>
        {list.map(({ heading, paragraph, img }, i) => (
          <li className={styles.item} key={i}>
            <Img
              data={img}
              sizes='(max-width: 562px) 156px, (max-width: 923px) 28vw, (max-width: 959px) 256px, (max-width: 1285px) 30vw, 381px'
            />
            <div className={styles.content}>
              <Subheading>{heading}</Subheading>
              <Markdown.p>{paragraph}</Markdown.p>
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
    xmlns='http://www.w3.org/2000/svg'
    width={1722}
    height={1774}
    fill='none'
    viewBox='0 0 1722 1774'
    className='blob'
  >
    <g filter='url(#filter0_f_6252_2022)'>
      <path
        fill='#0076B7'
        d='M1034 1185c148-74 76-230 21-300-97-6-296-1-318 77-26 97-239 71-205 177 34 105 167 64 83 199-84 134 332 175 338 94s-103-155 81-247Z'
      />
    </g>
    <g>
      <g filter='url(#filter1_f_6252_2022)'>
        <path fill='#22D3EE' d='m769 1273 333-11 15-254-145-195-237 137 34 323Z' />
        <path stroke='#FF0518' strokeWidth={100} d='m769 1273 333-11 15-254-145-195-237 137 34 323Z' />
      </g>
      <g filter='url(#filter2_f_6252_2022)'>
        <path
          fill='url(#paint0_linear_6252_2022)'
          d='M834 1279c-142 102-226-157-251-299l-11-1-62-585c86-34 304-84 490-12 232 89 12 770-166 897Z'
        />
        <path
          stroke='#000'
          d='M834 1279c-142 102-226-157-251-299l-11-1-62-585c86-34 304-84 490-12 232 89 12 770-166 897Z'
        />
      </g>
      <g filter='url(#filter3_f_6252_2022)'>
        <path
          fill='#1D4ED8'
          d='M594 608c11 103 423 373 628 496l-45 156c-81-49-282-149-438-160-194-14-160-620-145-492Z'
        />
      </g>
      <g filter='url(#filter4_f_6252_2022)'>
        <path
          fill='url(#paint1_linear_6252_2022)'
          d='M714 760c-9-100 336-49 509-11-8 135-27 423-41 499-17 95-228-106-324-165-95-59 100-125 92-203s-226 6-236-120Z'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_6252_2022'
        width={1193.3}
        height={1189.99}
        x={228.242}
        y={583.292}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2022' stdDeviation={150} />
      </filter>
      <filter
        id='filter1_f_6252_2022'
        width={1085.78}
        height={1177.02}
        x={382.309}
        y={447.313}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2022' stdDeviation={150} />
      </filter>
      <filter
        id='filter2_f_6252_2022'
        width={1190.76}
        height={1557.82}
        x={209.716}
        y={44.6614}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2022' stdDeviation={150} />
      </filter>
      <filter
        id='filter3_f_6252_2022'
        width={1240.25}
        height={1269.24}
        x={281.855}
        y={290.663}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2022' stdDeviation={150} />
      </filter>
      <filter
        id='filter4_f_6252_2022'
        width={1109.82}
        height={1171.43}
        x={413.603}
        y={401.53}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur result='effect1_foregroundBlur_6252_2022' stdDeviation={150} />
      </filter>
      <linearGradient
        id='paint0_linear_6252_2022'
        x1={1086.51}
        x2={485.321}
        y1={841.626}
        y2={805.13}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6252_2022'
        x1={1208.25}
        x2={700.714}
        y1={998.707}
        y2={967.896}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF0018' />
        <stop offset={1} stopColor='#0ADBFF' />
      </linearGradient>
    </defs>
  </svg>
);
