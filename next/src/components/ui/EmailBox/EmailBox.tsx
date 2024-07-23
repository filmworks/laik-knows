import Button from '../Button';
import Checkbox from '../Checkbox';
import Input from '../Input';
import styles from './EmailBox.module.scss';
import type { EmailBoxTypes } from './EmailBox.types';

export default function EmailBox({ heading }: EmailBoxTypes) {
  return (
    <form className={styles.form}>
      <h4>Pobierz próbkę, tego co Cię czeka</h4>
      <p>Pobierz pierwszą lekcję kursową za darmo juz dziś!</p>
      <Input label='E-mail' register={{ name: 'email' }} errors={{}} />
      <Checkbox
        label={
          <>
            Akceptuję{' '}
            <a href='https://kryptonum.eu/pl' target='_blank' rel='noreferrer' className='link'>
              politykę prywatności
            </a>
          </>
        }
        register={{ name: 'privacy' }}
        errors={{}}
      />
      <Button>Zapisz się</Button>
    </form>
  );
}
