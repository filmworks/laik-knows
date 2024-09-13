import styles from './Header.module.scss';
import _Header from './_Header';

export default function Header() {
  return (
    <>
      <a href='#main' className={styles.skipToMainContent}>
        Przejdź do głównej treści
      </a>
      <_Header />
    </>
  );
}

