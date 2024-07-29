import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormStatusTypes } from '@/global/types';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import FormState from '@/components/ui/FormState';
import Input from '@/components/ui/Input';
import styles from './DetailsAccordion.module.scss';

type FormTypes = {
  heading: JSX.Element;
  paragraph: JSX.Element;
  cta: string;
  isOpen: boolean;
  privacyLink: string;
  email: string;
};

export default function Form({ heading, paragraph, cta, isOpen, privacyLink, email }: FormTypes) {
  const formStateData = {
    errorState: {
      heading: 'Nie udało się dodać maila',
      paragraph: (
        <>
          Podczas przesyłania informacji pojawił się problem z serwerem. Jeśli problem się powtórzy napisz na
          adres:&nbsp;
          <a href={`mailto:${email}`} className='link' target='_blank' rel='noreferrer'>
            {email}
          </a>
        </>
      ),
    },
    successState: {
      heading: 'Dziękuję za dodanie adresu e-mail',
      paragraph: 'Wkrótce na twój adres e-mail zostanie wysłana wiadomość z pierwszą darmową lekcją',
    },
  };

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
      <FormState {...formStateData} isSuccess={status.success} setStatus={setStatus} />
    </form>
  );
}
