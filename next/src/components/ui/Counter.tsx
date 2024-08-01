'use client';

import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

type CounterTypes = {
  value: string;
};

export default function Counter({ value }: CounterTypes) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 70, stiffness: 120 });
  const isInView = useInView(ref, { once: true, margin: '0px' });

  const numericValue = parseFloat(value.replace(/[^\d.-]/g, ''));
  const nonNumericPart = value.replace(/[0-9.-]/g, '');

  useEffect(() => {
    if (isInView) motionValue.set(numericValue);
  }, [motionValue, isInView, numericValue]);

  useEffect(
    () =>
      springValue.on('change', (latest: { toFixed: (arg0: number) => number | bigint }) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat('pl-PL').format(latest.toFixed(0));
        }
      }),
    [springValue]
  );

  return (
    <>
      <span ref={ref}>{Intl.NumberFormat('pl-PL').format(numericValue)}</span>
      {nonNumericPart}
    </>
  );
}
