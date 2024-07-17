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
      <span>{children}</span>
    </Element>
  );
}
