import { isExternalLink } from '@/utils/is-external-link';
import styles from './Button.module.scss';
import type { ButtonTypes } from './Button.types';
import Link from 'next/link';

export default function Button({ data, href, children }: ButtonTypes) {
  if (data) {
    href = data.href;
    children = data.text;
  }

  const isExternal = isExternalLink(href);
  const Element = href ? (isExternal ? 'a' : Link) : 'button';
  return (
    <Element
      href={href || ''}
      {...(href && {
        href: href,
        ...(isExternal && { target: '_blank', rel: 'noopener' }),
      })}
      className={`${styles.btn} ${isExternal && styles.external}`}
    >
      <span>
        {children}
        {isExternal && <ArrowIcon />}
      </span>
      {isExternal && (
        <>
          <span className={styles.glow} />
          <span className={styles.bullets}>
            {
              <>
                <BulltetIcon className={`${styles.bulletIcon} ${styles.bulletIcon__1}`} />
                <BulltetIcon className={`${styles.bulletIcon} ${styles.bulletIcon__2}`} />
                <BulltetIcon className={`${styles.bulletIcon} ${styles.bulletIcon__3}`} />
                <BulltetIcon className={`${styles.bulletIcon} ${styles.bulletIcon__4}`} />
                <BulltetIcon className={`${styles.bulletIcon} ${styles.bulletIcon__5}`} />
                <BulltetIcon className={`${styles.bulletIcon} ${styles.bulletIcon__6}`} />
                <BulltetIcon className={`${styles.bulletIcon} ${styles.bulletIcon__7}`} />
                <BulltetIcon className={`${styles.bulletIcon} ${styles.bulletIcon__8}`} />
              </>
            }
          </span>
        </>
      )}
    </Element>
  );
}

const ArrowIcon = ({ ...props }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='17' height='7' fill='none' {...props}>
    <path strokeLinejoin='bevel' strokeWidth='1.001' d='M15.5 3.5H0m13-3 3 3-3 3' />
  </svg>
);

const BulltetIcon = ({ ...props }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='2' height='2' fill='none' {...props}>
    <path d='M.51.268a.508.508 0 0 0 .682.681.438.438 0 0 0 .217-.217.508.508 0 0 0-.681-.681.438.438 0 0 0-.217.217Z' />
  </svg>
);
