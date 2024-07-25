import Error from '../Error';
import styles from './Checkbox.module.scss';
import { CheckboxTypes } from './Checkbox.types';

export default function Checkbox({ label, register, errors, ...props }: CheckboxTypes) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const target = event.target as HTMLInputElement;
      target.checked = !target.checked;
      event.target.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };
  return (
    <label className={styles.checkbox} aria-invalid={!!errors[register.name]}>
      <Error error={errors[register.name]?.message?.toString()} />
      <div className={styles.row}>
        <div className={styles.icon}>
          <div>
            <input {...props} {...register} name={register.name} type='checkbox' onKeyDown={handleKeyDown} />
            <CheckmarkIcon />
          </div>
        </div>
        <span>{label}</span>
      </div>
    </label>
  );
}

const CheckmarkIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'>
    <path
      fill='#69A5C6'
      d='M13.776 3.502c.275.245.3.666.056.941l-7.112 8a.667.667 0 0 1-.996 0l-3.556-4a.667.667 0 0 1 .997-.886l3.057 3.44 6.613-7.44a.667.667 0 0 1 .941-.055Z'
    />
  </svg>
);
