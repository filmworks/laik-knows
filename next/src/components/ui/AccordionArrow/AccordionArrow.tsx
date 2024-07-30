import styles from './AccordionArrow.module.scss';
import type { AccordionArrowTypes } from './AccordionArrow.types';

export default function AccordionArrow({ isOpen = false }: AccordionArrowTypes) {
  return (
    <div className={styles.arrows} data-open={isOpen}>
      <ArrowUp />
      <ArrowDown />
    </div>
  );
}

const ArrowUp = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' fill='none'>
    <g stroke='#C3D5E2' strokeLinejoin='round' strokeWidth='1.001'>
      <path d='M12.5 4.5V20M9.5 7l3-3 3 3' />
    </g>
  </svg>
);

const ArrowDown = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'>
    <g stroke='#A7B4BC' strokeLinejoin='round'>
      <path d='M12 20V4M15 17l-3 3-3-3' />
    </g>
  </svg>
);
