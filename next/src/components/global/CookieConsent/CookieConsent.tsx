import styles from './CookieConsent.module.scss';
import Content from './_Content';

export default function CookieConsent() {
  return (
    <aside className={styles['CookieConsent']}>
      <Content {...CookieConsent} />
    </aside>
  );
}
