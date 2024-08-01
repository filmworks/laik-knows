import Button from '../Button';
import styles from './FormState.module.scss';
import type { FormStateTypes } from './FormState.types';

export default function FormState({ errorState, successState, isSuccess, setStatus, isLoading }: FormStateTypes) {
  return (
    (isSuccess !== undefined || isLoading) && (
      <div className={styles.state}>
        {isLoading ? (
          <span className={styles.loader}></span>
        ) : (
          <>
            <h3>{isSuccess ? successState.heading : errorState.heading}</h3>
            <p>{isSuccess ? successState.paragraph : errorState.paragraph}</p>
            {isSuccess === false && (
              <>
                <Button type='button' onClick={() => setStatus({ sending: false, success: undefined })}>
                  Spróbuj ponownie
                </Button>
              </>
            )}
          </>
        )}
      </div>
    )
  );
}
