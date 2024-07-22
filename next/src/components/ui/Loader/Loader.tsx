import styles from './Loader.module.scss';
import { LoaderTypes } from './Loader.types';

export default function Loader({ center = false }: LoaderTypes) {
  if (center)
    return (
      <div className={styles.container}>
        <div className={styles.loader}></div>
      </div>
    );
  return <div className={styles.loader}></div>;
}
