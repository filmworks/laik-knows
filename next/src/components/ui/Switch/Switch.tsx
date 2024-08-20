'use client';

import styles from './Switch.module.scss';
import type { SwitchTypes } from './Switch.types';

const Switch = ({ labelProps, inputProps, children }: SwitchTypes) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const target = e.target as HTMLInputElement;
      target.checked = !target.checked;
      e.target.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <label {...labelProps} className={`${styles['Switch']} ${labelProps?.className || ''}`}>
      <div className={styles.container}>
        <input type='checkbox' {...inputProps} onKeyDown={handleKeyDown} />
        <div className={styles.box}>
          <Tick className={styles.tick} />
        </div>
      </div>
      {children}
    </label>
  );
};

export default Switch;

const Tick = ({ ...props }) => (
  <svg width={17} height={17} viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g id='Check'>
      <path
        id='Vector'
        d='M15.1038 5.33254L7.10378 13.3325C7.05735 13.379 7.0022 13.4159 6.9415 13.4411C6.88081 13.4662 6.81574 13.4792 6.75003 13.4792C6.68433 13.4792 6.61926 13.4662 6.55856 13.4411C6.49786 13.4159 6.44272 13.379 6.39628 13.3325L2.89628 9.83254C2.80246 9.73872 2.74976 9.61148 2.74976 9.47879C2.74976 9.34611 2.80246 9.21886 2.89628 9.12504C2.9901 9.03122 3.11735 8.97852 3.25003 8.97852C3.38272 8.97852 3.50996 9.03122 3.60378 9.12504L6.75003 12.2719L14.3963 4.62504C14.4901 4.53122 14.6174 4.47852 14.75 4.47852C14.8827 4.47852 15.01 4.53122 15.1038 4.62504C15.1976 4.71886 15.2503 4.84611 15.2503 4.97879C15.2503 5.11148 15.1976 5.23872 15.1038 5.33254Z'
        fill='#1E72A0'
      />
    </g>
  </svg>
);
