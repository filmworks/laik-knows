import Input from '@/components/ui/Input';
import styles from './DetailsAccordion.module.scss';
import Checkbox from '@/components/ui/Checkbox';
import Button from '@/components/ui/Button';
import { FormStatusTypes } from '@/global/types';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

type FormTypes = { heading: JSX.Element; paragraph: JSX.Element; cta: string };

export default function Form({ heading, paragraph, cta }: FormTypes) {
  const [status, setStatus] = useState<FormStatusTypes>({ sending: false, success: undefined });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm({ mode: 'onTouched' });

  const onSubmit = async (data: FieldValues) => {
    setStatus({ sending: true, success: undefined });
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const isTrue = true;
      // Tu będzie logika do wysyłania maila
      if (isTrue) {
        setStatus({ sending: false, success: true });
        reset();
      } else {
        setStatus({ sending: false, success: false });
      }
    } catch {
      setStatus({ sending: false, success: false });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {heading}
      {paragraph}
      <Input
        label='E-mail'
        register={register('email', {
          required: { value: true, message: 'Adres e-mail jest wymagany' },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Nieprawidłowy format',
          },
        })}
        filled={getValues().email}
        errors={errors}
      />
      <Checkbox
        label={
          <>
            Akceptuję{' '}
            <a href='https://kryptonum.eu/pl' target='_blank' rel='noreferrer' className='link'>
              politykę prywatności
            </a>
          </>
        }
        register={register('legal', {
          required: { value: true, message: 'Zgoda jest wymagana' },
        })}
        errors={errors}
      />
      <Button isLoading={status.sending}>{cta}</Button>
    </form>
  );
}
