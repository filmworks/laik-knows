'use client';

import { useNavigation, usePagination } from '../Carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { ReactNode } from 'react';
import InstagramButton from '@/components/ui/InstagramButton';
import OpenVideoBox from '@/components/ui/OpenVideoBox';
import styles from './ParticipantCarousel.module.scss';
import { ParticipantTypes } from './ParticipantCarousel.types';

type CarouselTypes = {
  list: ParticipantTypes[];
  children: JSX.Element;
  leftArrowIcon: ReactNode;
  rightArrowIcon: ReactNode;
};

export default function _Carousel({ list, children, leftArrowIcon, rightArrowIcon }: CarouselTypes) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', skipSnaps: true, loop: true });
  const { scrollSnaps, selectedIndex, onDotButtonClick } = usePagination(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = useNavigation(emblaApi);

  return (
    <>
      <div className={`${styles.row} max-width`}>
        {children}
        <nav className={styles.pagination}>
          <button
            type='button'
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            aria-label='Przejdź do poprzedniego elementu'
          >
            {leftArrowIcon}
          </button>
          <div className={styles.dots}>
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                type='button'
                onClick={() => onDotButtonClick(i)}
                aria-current={i === selectedIndex}
                aria-label={`Przejdź do ${i + 1} elementu`}
              ></button>
            ))}
          </div>
          <button
            type='button'
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            aria-label='Przejdź do następnego elementu'
          >
            {rightArrowIcon}
          </button>
        </nav>
      </div>
      <div className={styles.box}>
        <div className={styles.slider} ref={emblaRef}>
          <div className={styles.container}>
            {list.map(({ name, image, video, instagram }, i) => (
              <div key={i} className={styles.slide}>
                <OpenVideoBox img={image} video={video} sizes='(max-width: 689px) 280px, 310px' />
                <div className={styles.content}>
                  <span>{name}</span>
                  <InstagramButton {...instagram} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
