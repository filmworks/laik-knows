import Markdown from '@/components/ui/markdown';
import styles from './ParticipantCarousel.module.scss';
import type { ParticipantCarouselTypes } from './ParticipantCarousel.types';
import Carousel from './_Carousel';

export default function ParticipantCarousel({ heading, list, index }: ParticipantCarouselTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;
  return (
    <section className={`${styles.section}`}>
      <Carousel leftArrowIcon={LeftArrowIcon} rightArrowIcon={RightArrowIcon} list={list}>
        <Heading>{heading}</Heading>
      </Carousel>
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
