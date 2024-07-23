import Error from '@/components/ui/Error';
import styles from './Input.module.scss';
import type { InputTypes } from './Input.types';
import Textarea from './_Textarea';

export default function Input({
  label,
  disabled = false,
  register,
  errors,
  textarea = false,
  filled = false,
  ...props
}: InputTypes) {
  const Element = textarea ? Textarea : 'input';

  return (
    <label
      className={styles.input}
      aria-disabled={disabled}
      aria-invalid={!!errors[register.name]}
      data-filled={Boolean(filled)}
    >
      <p className={styles.row}>
        <span className={styles.label} dangerouslySetInnerHTML={{ __html: label }} />
        <Error error={errors[register.name]?.message?.toString()} />
      </p>
      <Element disabled={disabled} {...register} name={register.name} {...props} />
    </label>
  );
}
