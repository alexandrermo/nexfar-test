import React from 'react';
import { useField } from '@unform/core';
import { InputSelectProps } from './types';

const Input: React.FC<InputSelectProps> = ({
  name,
  options,
  ...rest
}: InputSelectProps) => {
  const { fieldName, registerField } = useField(name);

  const inputRef = React.useRef<HTMLSelectElement>(null);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef, // acessar o input como referência
      getValue: (ref) => {
        return ref.current.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <select name={name} ref={inputRef} {...rest}>
      {options.map(({ value, label }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Input;
