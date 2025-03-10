'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '@/public/icons/logo.webp';
import styles from './Header.module.scss';

export default function _Header() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function setHeaderBackground() {
      if ((isActive && window.scrollY >= 80) || (!isActive && window.scrollY < 80)) return;
      if (window.scrollY >= 80) setIsActive(true);
      else setIsActive(false);
    }

    window.addEventListener('scroll', setHeaderBackground);

    return () => window.removeEventListener('scroll', setHeaderBackground);
  }, [isActive]);
  return (
    <header className={styles.header} data-active={isActive}>
      <div className='max-width'>
        <Link href='/' aria-label='Przejdź na górę strony'>
          <Image src={logo} alt='Logo Laik Knows' sizes='80px' />
        </Link>
      </div>
    </header>
  );
}
