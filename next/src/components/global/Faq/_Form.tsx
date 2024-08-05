'use client';

import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { REGEX } from '@/global/constants';
import { FormStatusTypes } from '@/global/types';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import FormState from '@/components/ui/FormState';
import Input from '@/components/ui/Input';
import styles from './Faq.module.scss';

type FormTypes = {
  heading: JSX.Element;
  paragraph: JSX.Element | null;
  cta: string;
  privacyLink: string;
  email: string;
};

export default function Form({ heading, paragraph, cta, email, privacyLink }: FormTypes) {
  const formStateData = {
    errorState: {
      heading: 'Nie udało się wysłać wiadomości',
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
      heading: 'Dziękuję za dodanie przesłanie wiadomości',
      paragraph: 'Postaramy się odpowiedzieć na twoje pytanie jak najszybciej',
    },
  };

  const [status, setStatus] = useState<FormStatusTypes>({ sending: false, success: undefined });
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const tabIndex = status.success === undefined && !status.sending ? 0 : -1;

  const onSubmit = async (data: FieldValues) => {
    setStatus({ sending: true, success: undefined });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok && responseData.success) {
        setStatus({ sending: false, success: true });
        reset();
      } else {
        setStatus({ sending: false, success: false });
      }
    } catch {
      setStatus({ sending: false, success: false });
    }
  };

  const emailValue = watch('email');
  const messageValue = watch('message');
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} contact-box`}>
      <header>
        {heading}
        {paragraph}
      </header>
      <Input
        tabIndex={tabIndex}
        disabled={status.sending}
        type='email'
        label='E-mail'
        register={register('email', {
          required: { value: true, message: 'Adres e-mail jest wymagany' },
          pattern: {
            value: REGEX.email,
            message: 'Nieprawidłowy format',
          },
        })}
        filled={emailValue}
        errors={errors}
      />
      <Input
        tabIndex={tabIndex}
        disabled={status.sending}
        textarea
        label='Wiadomość'
        register={register('message', {
          required: { value: true, message: 'Wiadomość jest wymagana' },
        })}
        filled={messageValue}
        errors={errors}
      />
      <Checkbox
        tabIndex={tabIndex}
        disabled={status.sending}
        className={styles.checkbox}
        label={
          <>
            Akceptuję{' '}
            <a href={privacyLink} tabIndex={tabIndex} target='_blank' rel='noreferrer' className='link'>
              politykę prywatności
            </a>
          </>
        }
        register={register('legal', {
          required: { value: true, message: 'Zgoda jest wymagana' },
        })}
        errors={errors}
      />
      <Button tabIndex={tabIndex}>{cta}</Button>
      <FormState {...formStateData} isSuccess={status.success} setStatus={setStatus} isLoading={status.sending} />
    </form>
  );
}
