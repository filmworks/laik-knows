import { FieldErrors } from 'react-hook-form';

export type InputTypes = {
  label?: string;
  disabled?: boolean;
  register: {
    name: string;
  };
  errors: FieldErrors;
  textarea?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;
