import { InputHTMLAttributes } from 'react';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: string;
  noUnform?: boolean;
}
