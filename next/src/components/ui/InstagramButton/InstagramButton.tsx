import styles from './InstagramButton.module.scss';
import type { InstagramButtonTypes } from './InstagramButton.types';

export default function InstagramButton({ username, url }: InstagramButtonTypes) {
  return (
    <a target='_blank' rel='noreferrer' className={styles.btn} href={url || '/'}>
      <span>{username}</span>
    </a>
  );
}
