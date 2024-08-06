'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { EASING } from '@/global/constants';
import AccordionArrow from '@/components/ui/AccordionArrow';
import styles from './Faq.module.scss';
import { AccordionTypes } from './Faq.types';

export default function Accordion({ list }: AccordionTypes) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const handleClick = (e: React.MouseEvent<HTMLElement>, i: number) => {
    e.preventDefault();
    setOpenIndex(i === openIndex ? null : i);
  };

  return (
    <div className={styles.list}>
      {list.map(({ question, answer }, i) => (
        <details key={i} open>
          <summary className={styles.summary} onClick={e => handleClick(e, i)} tabIndex={openIndex === i ? -1 : 0}>
            <AccordionArrow isOpen={openIndex === i} />
            {question}
          </summary>
          <motion.div
            className={styles.content}
            initial={{ height: 0 }}
            animate={{ height: openIndex === i ? 'auto' : 0 }}
            exit={{ height: 0 }}
            transition={{
              duration: 0.3,
              ease: EASING,
            }}
          >
            {answer}
          </motion.div>
        </details>
      ))}
    </div>
  );
}
