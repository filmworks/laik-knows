import getLegalLink from '@/components/ui/get-legal-link';
import styles from './Footer.module.scss';
import CookieButton from './_CookieButton';

export default async function Footer() {
  const { privacyPolicy } = await getLegalLink();
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} max-width`}>
        <p className={styles.copyright}>
          <span>Ⓒ Stworzone przez </span>
          <a href='https://kryptonum.eu/pl' className='link' target='_blank' rel='noreferrer'>
            Kryptonum
          </a>
        </p>
        <div className={styles.row}>
          <a href={privacyPolicy} target='_blank' rel='noreferrer' className='link'>
            Polityka prywatności
          </a>
          <CookieButton />
        </div>
      </div>
    </footer>
  );
}
