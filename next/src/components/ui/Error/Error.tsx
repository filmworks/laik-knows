'use client';

import styles from './Error.module.scss';
import type { ErrorTypes } from './Error.types';

export default function Error({ error }: ErrorTypes) {
  if (!error) return null;
  return (
    <span className={styles.error} role='alert'>
      <ErrorIcon />
      <span>{error}</span>
    </span>
  );
}

const ErrorIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' fill='none'>
    <g fill='#FF8D83'>
      <path d='M7.999 3.167a5.333 5.333 0 1 0 0 10.666 5.333 5.333 0 0 0 0-10.666ZM1.332 8.5a6.667 6.667 0 1 1 13.333 0 6.667 6.667 0 0 1-13.333 0Z' />
      <path d='M7.999 9.834a.667.667 0 0 1-.667-.667v-4a.667.667 0 0 1 1.333 0v4A.667.667 0 0 1 8 9.834ZM6.999 11.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z' />
    </g>
  </svg>
);
