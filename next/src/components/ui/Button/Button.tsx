import Link from 'next/link';
import { isExternalLink } from '@/utils/is-external-link';
import styles from './Button.module.scss';
import type { ButtonTypes } from './Button.types';

export default function Button({ href, theme = 'secondary', children, text, ...props }: ButtonTypes) {
  const _children = children || text;
  const isExternal = isExternalLink(href);
  const Element = href ? (isExternal ? 'a' : Link) : 'button';

  return (
    <Element
      href={href || ''}
      {...(href &&
        Element !== 'button' && { href: href, ...(isExternalLink(href) && { target: '_blank', rel: 'noopener' }) })}
      data-theme={theme}
      className={styles.button}
      {...props}
    >
      {_children}
      {theme === 'primary' && (
        <>
          <ArrowIcon />
          <div className={styles.dots}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} style={{ transitionDelay: `${i * 0.03}s` }} />
            ))}
          </div>
        </>
      )}
    </Element>
  );
}

const ArrowIcon = ({ ...props }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={17} height={7} fill='none' stroke='#C3D5E2' {...props}>
    <path strokeLinejoin='bevel' strokeWidth={1} d='M16 4H0m13-3 3 3-3 3' />
  </svg>
);
