import { InputHTMLAttributes } from 'react';

export interface InputCheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'name' | 'type' | 'className'
  > {
  name: string;
  label: string;
  className?: string;
  classNameIpt?: string;
}
