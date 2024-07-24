'use client';

import { useEffect, useState } from 'react';
import styles from './SaleFinishTime.module.scss';

type CounterProps = {
  duration: number;
};

export default function Counter({ duration }: CounterProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(prev => prev - 1000);
    }, 1000);
  }, [timeLeft]);

  function getTime(miliseconds: number) {
    const newDate = new Date(miliseconds);
    const totalSeconds = Math.floor(miliseconds / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    return [
      { num: totalDays, title: 'dni' },
      { num: totalHours % 60, title: 'godzin' },
      { num: totalMinutes % 60, title: 'minut' },
      { num: totalSeconds % 60, title: 'sekund' },
    ];
  }

  return (
    <div className={styles.counter}>
      {getTime(timeLeft).map(({ num, title }, i) => (
        <div key={i} className={styles.box}>
          <span>{num}</span>
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
}
