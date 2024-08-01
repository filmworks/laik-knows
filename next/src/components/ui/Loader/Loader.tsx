import styles from './Loader.module.scss';
import type { LoaderTypes } from './Loader.types';

export default function Loader({ isLoading }: LoaderTypes) {
  return (
    isLoading && (
      <div className={styles.container}>
        <span className={styles.loader}></span>
      </div>
    )
  );
}
