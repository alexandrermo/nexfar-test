import { SelectHTMLAttributes } from 'react';

export interface InputSelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'name'> {
  name: string;
  options: { value: string; label: string }[];
}
