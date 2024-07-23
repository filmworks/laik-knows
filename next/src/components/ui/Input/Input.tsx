import Error from '@/components/ui/Error';
import styles from './Input.module.scss';
import type { InputTypes } from './Input.types';
import Textarea from './_Textarea';

export default function Input({ label, disabled = false, register, errors, textarea = false, ...props }: InputTypes) {
  const Element = textarea ? Textarea : 'input';

  return (
    <label className={styles.input} aria-disabled={disabled} aria-invalid={!!errors[register.name]}>
      <p className={styles.label}>
        {label && <span dangerouslySetInnerHTML={{ __html: label }} />}
        <Error error={errors[register.name]?.message?.toString()} />
      </p>
      <Element disabled={disabled} {...register} name={register.name} {...props} />
    </label>
  );
}
