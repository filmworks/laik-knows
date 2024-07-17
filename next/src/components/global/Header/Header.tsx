import Image from 'next/image';
import styles from './Header.module.scss';
import type { HeaderTypes } from './Header.types';
import logo from '@/public/laik-knows-logo.webp';

export default function Header({}: HeaderTypes) {
  return (
    <>
      <a href='#main' className={styles.skipToMainContent}>
        Przejdź do głównej treści
      </a>
      <header className={`${styles.header} max-width`}>
        <Image
          src={logo}
          alt='Laik Knows Logo'
          sizes='(max-width: 660px) 60px, (max-width: 768px) 10vw, 81px'
          width={81}
          height={80}
        />
      </header>
    </>
  );
}
