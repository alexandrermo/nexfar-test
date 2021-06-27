import React from 'react';
import { useField } from '@unform/core';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  name,
  noUnform,
  ...rest
}: InputProps) => {
  const { fieldName, registerField } = useField(name);

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (!noUnform) {
      registerField({
        name: fieldName,
        ref: inputRef, // acessar o input como referência
        getValue: (ref) => {
          return ref.current.value;
        },
      });
    }
  }, [fieldName, registerField]);

  return <input name={name} ref={inputRef} {...rest} />;
};

export default Input;
