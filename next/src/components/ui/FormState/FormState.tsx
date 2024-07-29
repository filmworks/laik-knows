import Button from '../Button';
import styles from './FormState.module.scss';
import type { FormStateTypes } from './FormState.types';

export default function FormState({ errorState, successState, isSuccess, setStatus }: FormStateTypes) {
  return (
    isSuccess !== undefined && (
      <div className={styles.state} data-is-success={!!isSuccess} data-element='FormState'>
        <h3>{isSuccess ? successState.heading : errorState.heading}</h3>
        <p>{isSuccess ? successState.paragraph : errorState.paragraph}</p>
        {isSuccess === false && (
          <>
            <Button type='button' onClick={() => setStatus({ sending: false, success: undefined })}>
              Spróbuj ponownie
            </Button>
          </>
        )}
      </div>
    )
  );
}
