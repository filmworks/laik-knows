import Input from '@/components/ui/Input';
import styles from './DetailsAccordion.module.scss';
import Checkbox from '@/components/ui/Checkbox';
import Button from '@/components/ui/Button';
import { FormStatusTypes } from '@/global/types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormTypes = { heading: JSX.Element; paragraph: JSX.Element; cta: string; isOpen: boolean; privacyLink: string };

export default function Form({ heading, paragraph, cta, isOpen, privacyLink }: FormTypes) {
  const [status, setStatus] = useState<FormStatusTypes>({ sending: false, success: undefined });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm({ mode: 'onTouched' });

  const onSubmit = async () => {
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

  const tabIndex = isOpen ? 0 : -1;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {heading}
      {paragraph}
      <Input
        disabled={status.sending}
        type='email'
        tabIndex={tabIndex}
        label='E-mail'
        register={register('email', {
          required: { value: true, message: 'Adres e-mail jest wymagany' },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Nieprawidłowy format',
          },
        })}
        filled={getValues().email}
        errors={errors}
      />
      <Checkbox
        disabled={status.sending}
        tabIndex={tabIndex}
        className={styles.checkbox}
        label={
          <>
            Akceptuję{' '}
            <a tabIndex={tabIndex} href={privacyLink} target='_blank' rel='noreferrer' className='link'>
              politykę prywatności
            </a>
          </>
        }
        register={register('legal', {
          required: { value: true, message: 'Zgoda jest wymagana' },
        })}
        errors={errors}
      />
      <Button tabIndex={tabIndex} isLoading={status.sending}>
        {cta}
      </Button>
    </form>
  );
}
