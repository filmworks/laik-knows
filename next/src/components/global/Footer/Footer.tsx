import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} max-width`}>
        <p className={styles.copyright}>
          <span>Ⓒ Stworzone przez</span>
          <a href='https://kryptonum.eu/pl' className='link' target='_blank' rel='noreferr'>
            Kryptonum
          </a>
        </p>
        <a href='/' target='_blank' rel='noreferrer' className='link'>
          Polityka prywatności
        </a>
      </div>
    </footer>
  );
}
